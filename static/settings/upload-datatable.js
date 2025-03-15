const VOTE_ERROR_SIMPLE_MESSAGE = "Vote count decreased";
const VOTE_ERROR_MESSAGE = "Vote count cannot decrease unless this is a surplus transfer," +
                           " i.e., the candidate must have been elected in the previous round";

function requireRevalidation() {
    disableDataOptionsAndSubmitButton();
    $("#validateButton").prop("disabled", false);
}

const errorPopupFormatter = function(e, row, onRendered) {
  let container = document.createElement("div"),
      contents = "<strong style='font-size:1.2em;'>Error Details</strong><br/>";
  contents += `<span class="upload-hoverable">${VOTE_ERROR_SIMPLE_MESSAGE}</span>`;
  contents += `<div class="upload-hover">${VOTE_ERROR_MESSAGE}</div>`
  container.innerHTML = contents;
  return container;
};

const lessThanZeroError = function(e, row, onRendered) {
  let container = document.createElement("div"),
      contents = "<strong style='font-size:1.2em;'>Error Details</strong><br/>";
  contents += `<span>Must be a positive number</span>`;
  container.innerHTML = contents;
  return container;
};

function voteCountCallback(cell, value, parameters) {
    requireRevalidation();
    const cells = cell.getRow().getCells();
    cell.setValue(value);
    if (cells.length <= 3) {
      return true;
    }
    let cellIndex = 0;
    for(let i = 0; i < cells.length; i++ ) {
      if(cells[i] === cell) {
        cellIndex = i;
        break;
      }
    }
    if(cellIndex < 1) {
      console.log("Invalid cell index")
      return false;
    }

    if (value < 0) {
      cell.getRow().popup(lessThanZeroError, "bottom")
      return false;
    }

    const numCols = cell.getTable().getColumns().length;
    let prevRoundVotes = cells[1].getValue();
    if(cells[1].getField() === cell.getField()) {
      prevRoundVotes = value;
    }
    let prevRoundStatus = cells[2].getValue();
    for (let c = 1; c < numCols; c+=2) {
        const numVotes = cells[c].getField() === cell.getField() ? value : cells[c].getValue();
        const status = cells[c + 1].getValue();

        if (isNaN(numVotes) || numVotes == null ||
            // If it hasn't been edited and isn't currently being edited.
            (!cells[c].isEdited() && cells[c].getField() !== cell.getField())) {
            // User hasn't entered data here yet - no error
            cells[c].clearValidation();
        } else if (numVotes >= prevRoundVotes) {
            // Number of votes has stayed the same or increased - no error
            cells[c].clearValidation();
        } else if (prevRoundStatus === 'Elected') {
            // Last round, the candidate was elected - no error, it's allowed to decrease
            cells[c].clearValidation();
        } else {
            if (c === cellIndex) {
              cell.popup(errorPopupFormatter, "bottom")
              return false;
            } else {
              cells[c].validate();
            }
        }

        prevRoundVotes = numVotes;
        prevRoundStatus = status;
    }
    return true;
}

// Checks if this cell is after an Eliminated cell, and if so,
// it cannot be edited.
const editCheck = function(cell) {
  const cells = cell.getRow().getCells();
  const value = cell.getValue();
  if (value !== null) {
    return true;
  }
  let seenElected = false;
  let seenVotesAfterElected = 0;
  for (let i = 0; i < cells.length; i++) {
    const curCell = cells[i];
    if (curCell.getField() === cell.getField()) {
      return true;
    }
    if (curCell.getValue() === "Elected") {
      seenElected = true;
    }
    if (seenElected && curCell.getColumn().getDefinition().title === "# Votes") {
      if (seenVotesAfterElected > 0) {
        return false;
      }
      seenVotesAfterElected++;
    }
    if (seenElected && curCell.getColumn().getDefinition().title === "Status") {
        return false;
    }
    if (curCell.getValue() === "Eliminated" || (curCell.getValue() === "Elected"
        && curCell.getColumn().getField() === "Status")) {
      return false;
    }
  }
  return true;
};

function updateStatusCell(cell) {
  updateElectedCell(cell);
  updateEliminatedCell(cell);
}

function updateElectedCell(cell) {
  const cells = cell.getRow().getCells();
  const value = cell.getValue();
  const oldValue = cell.getOldValue();
  if (value === null || (value !== "Elected" && oldValue !== "Elected")) {
    return;
  }
  let nullifyVotes = false;
  let afterEditedCell = false;
  for (let i = 0; i < cells.length; i++) {
    const curCell = cells[i];
    if (afterEditedCell) {
      if (value === "Elected") {
        if (nullifyVotes) {
          if (curCell.getColumn().getDefinition().title === "# Votes") {
            curCell.setValue(null, false);
          }
        }
        if (curCell.getColumn().getDefinition().title === "Status") {
          // After we see our first status to null, we will start nullifying votes too.
          nullifyVotes = true;
          curCell.setValue(null, false);
        }
      } else if (oldValue === "Elected") {
        if (curCell.getValue() === null) {
          curCell.restoreOldValue();
        }
      }
    }
    if (curCell.getField() === cell.getField()) {
      afterEditedCell = true;
    }
  }
}

function updateEliminatedCell(cell) {
    const cells = cell.getRow().getCells();
    const value = cell.getValue();
    const oldValue = cell.getOldValue();
    if (value === null || !(value === "Eliminated" || oldValue === "Eliminated")) {
      return;
    }
    let afterEditedCell = false;
    for (let i = 0; i < cells.length; i++) {
      const curCell = cells[i];
      if (afterEditedCell) {
        if (value === "Eliminated") {
          curCell.setValue(null, false);
        } else if (oldValue === "Eliminated") {
          if (curCell.getValue() === null) {
            curCell.restoreOldValue();
          }
        }
      }
      if (curCell.getField() === cell.getField()) {
        afterEditedCell = true;
      }
    }
}

let table = null;
function createDataTable(id, data = null, includeModifiers = true) {
  table = new Tabulator("#" + id, {
    data: data ? data : [
      {id: 1, candidate: new Candidate("Candidate 1")},
      {id: 2, candidate: new Candidate("Candidate 2")},
      {id: 3, candidate: new Candidate("Candidate 3")}
    ],
    addRowPos:"bottom",
    layout:"fitDataFill",
    debugInvalidOptions:false,
    layoutColumnsOnNewData:true,
    validationMode: "highlight",
    columns: [
      {
        title: "Candidates",
        field: "candidate",
        formatter: Candidate.customCandidateFormatter,
        editor: Candidate.customCandidateEditor,
        sorter: Candidate.customCandidateSorter,
        variableHeight: true,
      },
    ],
  });
  table.on("dataChanged", function(data) {
    $("#validateButton").prop("disabled", false);
  });
  if(!data) {
    initTable();
  } else {
    let i = 1;
    console.log(JSON.stringify(data));
    for (j = 0; ; j++) {
      if(!data[j]) {
        break;
      }
      while (data[j][`votes-${i + 1}`] != null) {
        i++;
      }
    }
    initTable(i, false);
  }

  if(includeModifiers) {
    initTableModifiers();
  }
}

function addRound(withData = true) {
  const cols = table.getColumns();
  const lastCol = table.getColumn(cols[cols.length - 1]);
  const colNr = table.getColumnDefinitions().length;
  const colDef = {
    title: `Round ${colNr}`, columns: [
      {
        title: `# Votes`,
        editorParams: {selectContents: true},
        field: `votes-${colNr}`, hozAlign: "center",
        editor: "number",
        editable: editCheck,
        validator: [{type: voteCountCallback}],
      },
      {
        title: `Status`,
        field: `status-${colNr}`, hozAlign: "center",
        editorParams: {selected: 0, values: ["Active", "Eliminated", "Elected"]},
        editor: "list",
        validator: [{type: voteCountCallback}],
        cellEdited: updateStatusCell,
        editable: editCheck,
      }]
  }
  const rows = table.getRows();
  if (withData) {
    for (let i = 1; i <= rows.length; i++) {
      const obj = {id: i}
      obj[`votes-${colNr}`] = 0;
      obj[`status-${colNr}`] = "Active";
      rows[i - 1].update(obj);
    }
  }
  return table.addColumn(colDef, false, lastCol ? lastCol.getField() : null);
}

function addRow() {
  const rows = table.getRows();
  const rowNr = rows.length + 1;
  const candidate = {id: rowNr, candidate: new Candidate(`Candidate ${rowNr}`)}

  for(let i = 1; i <= table.getColumnDefinitions().length; i++) {
    candidate[`votes-${i}`] = 0;
    candidate[`status-${i}`] = "Active";
  }
  return table.addRow(candidate, false);
}

function toJson(tableData) {
  let data = []
  let rowNames = [];
  for (let i = 0; i < tableData.length; i++) {
    rowNames[i] = tableData[i].candidate;
    let rounds = [];
    for (let j = 1; j < table.getColumnDefinitions().length; j++) {
      let obj = {}
      obj["# Votes"] = tableData[i][`votes-${j}`]
      obj["Status"] = tableData[i][`status-${j}`]
      rounds.push(obj);
    }
    data.push(rounds);
  }
  return {rowNames: rowNames, data: data};
}


function validateDataEntry() {
   // Serialize data, add it to the hidden input
   const serializedData = JSON.stringify(toJson(table.getData()));
   document.getElementById('dataEntry').value = serializedData;

   // Prepare the mock form
   const form = document.getElementsByTagName('form')[0];
   const data = $(form).serializeArray();

   // AJAX to check if it would survive all serverside processing
   $.post('/validateDataEntry', data, function(data) {
      $('#dataEntryValidationMessage').text(data.message);

      $('#dataEntryValidationMessage').toggleClass('validationSuccess', data.success);
      $('#dataEntryValidationMessage').toggleClass('validationFailure', !data.success);
      if (data.success) {
        enableDataOptionsAndSubmitButton();
        $("#validateButton").prop("disabled", true);
      } else {
        disableDataOptionsAndSubmitButton();
      }
   });
}

function initTable(count = 3, withData = true) {
  table.on("tableBuilt", () => {
    for (let i = 0; i < count; i++) {
      addRound(withData);
    }

  });

}

function initTableModifiers() {
  document.getElementById("upload-add-row")
  .addEventListener("click", function(e) {
    e.preventDefault();
    addRow();
  });

  document.getElementById("upload-del-row").addEventListener("click",
      function(e) {
        e.preventDefault();
        var rows = table.getRows();
        if (rows.length > 0) {
          rows[rows.length - 1].delete();
        }
      });

  document.getElementById("upload-add-col").addEventListener("click",
      function(e) {
        e.preventDefault();
        addRound();
      });

  document.getElementById("upload-del-col").addEventListener("click",
      function(e) {
        e.preventDefault();
        var columns = table.getColumns();
        const length = columns.length;
        if (length >= 3) {
          const field = columns[length - 1].getField();
          const field2 = columns[length - 2].getField();
          table.deleteColumn(field);
          table.deleteColumn(field2);
        }
      });

  document.getElementById("upload-show-advanced-options").addEventListener(
      "click", function(e) {
        table.redraw(true);
      });
}