const wrapperDivId = 'dataTableWrapper';
const VOTES_FIELD_NUM = 0;
const STATUS_FIELD_NUM = 1;
const VOTE_ERROR_MESSAGE = "Vote count cannot decrease unless this is a surplus transfer," +
                           " i.e., the candidate must have been elected in the previous round";

function setVoteCountErrorError(row, col) {
    dtSetCellErrorMessage(wrapperDivId, row, col, VOTES_FIELD_NUM, VOTE_ERROR_MESSAGE);
}

function clearVoteCountError(row, col) {
    dtClearCellErrorMessage(wrapperDivId, row, col, VOTES_FIELD_NUM);
}

function requireRevalidation() {
    disableDataOptionsAndSubmitButton();
    $("#validateButton").prop("disabled", false);
}

function voteCountCallback(value, row, col) {
    requireRevalidation();

    if (value < 0) {
        return "Vote counts must be positive";
    }

    let thisCellErrorMessage = null;
    const numCols = dtGetNumColumns(wrapperDivId);
    let prevCellData = dtGetCellData(wrapperDivId, row, 0);
    for (let c = 1; c < numCols; ++c) {
        const cellData = dtGetCellData(wrapperDivId, row, c);
        const numVotes = cellData['# Votes'];

        if (isNaN(numVotes) || numVotes == null) {
            // User hasn't entered data here yet - no error
            clearVoteCountError(row, c);
        } else if (numVotes >= prevCellData['# Votes']) {
            // Number of votes has stayed the same or increased - no error
            clearVoteCountError(row, c);
        } else if (prevCellData['Status'] == 'Elected') {
            // Last round, the candidate was elected - no error, it's allowed to decrease
            clearVoteCountError(row, c);
        } else {
            if (c == col) {
                // Let the callback set the message
                thisCellErrorMessage = VOTE_ERROR_MESSAGE;
            } else {
                // We will set the message
                setVoteCountErrorError(row, c);
            }
        }

        prevCellData = cellData;
    }

    return thisCellErrorMessage;
}

function setEnabled(row, col, fieldNum, enable) {
    if (enable) {
        dtEnableField(wrapperDivId, row, col, fieldNum);
    } else {
        dtDisableField(wrapperDivId, row, col, fieldNum);
    }
}

function updateActivationOfRowStartingAtCol(status, row, col) {
    const numCols = dtGetNumColumns('dataTableWrapper');

    // Handle next round
    if (col + 1 < numCols) {
        if (status == 'Eliminated') {
            // Deactivate next cell
            setEnabled(row, col+1, VOTES_FIELD_NUM, false);
            setEnabled(row, col+1, STATUS_FIELD_NUM, false);
        } else if (status == 'Elected') {
            // Deactivate the next status,
            // but enable the next vote count in case of surplus transfer
            setEnabled(row, col+1, VOTES_FIELD_NUM, true);
            setEnabled(row, col+1, STATUS_FIELD_NUM, false);
        } else {
            // Both are enabled
            setEnabled(row, col+1, VOTES_FIELD_NUM, true);
            setEnabled(row, col+1, STATUS_FIELD_NUM, true);
        }
    }

    // Handle future rounds
    // All rounds after the next round are disabled if the status is Eliminated or Elected
    let deactivateRestOfCol = status == 'Active';
    for (let c = col+2; c < numCols; ++c) {
        setEnabled(row, c, VOTES_FIELD_NUM, deactivateRestOfCol);
        setEnabled(row, c, STATUS_FIELD_NUM, deactivateRestOfCol);
    }
}

function statusCallback(status, row, col) {
    requireRevalidation();

    updateActivationOfRowStartingAtCol(status, row, col);

    if (col == dtGetNumColumns(wrapperDivId) - 1 && status == 'Eliminated') {
        return "Cannot eliminate a candidate on the last round. (Where do their votes go?)" +
               " There should be an elimination on Round 1, but not the last round.";
    }
}

const table = new Tabulator("#" + wrapperDivId + "1", {
  data: [
    {id: 1, candidate: new Candidate("Candidate 1")},
    {id: 2, candidate: new Candidate("Candidate 2")},
    {id: 3, candidate: new Candidate("Candidate 3")}
  ],
  addRowPos:"bottom",
  layout:"fitColumns",
  debugInvalidOptions:false,
  columns: [
    {
      title: "Candidates", field: "candidate", width: 200,
      formatter: Candidate.customCandidateFormatter,
      editor: Candidate.customCandidateEditor,
      variableHeight: true,
    },
  ],
});

function addRound() {
  const cols = table.getColumns();
  const lastCol = table.getColumn(cols[cols.length - 1]);
  const colNr = table.getColumnDefinitions().length;
  const colDef = {
    title: `Round ${colNr}`, columns: [
      {
        title: `# Votes`,
        editorParams: {text: 0},
        field: `votes-${colNr}`, hozAlign: "center",
        editor: "number"
      },
      {
        title: `Status`,
        field: `status-${colNr}`, hozAlign: "center",
        editorParams: {selected: 0, values: ["Active", "Eliminated", "Elected"]},
        editor: "list"
      }]
  }
  for(let i = 1; i <= table.getRows(); i++) {
    const obj = {id : i}
    obj[`votes-${colNr}`] = 0;
    obj[`status-${colNr}`] = "Active";
    table.setData([obj]);
  }
  return table.addColumn(colDef, false, lastCol ? lastCol.getField() : null);
}


function validateDataEntry() {
   // Serialize data, add it to the hidden input
   const serializedData = dtToJSON(wrapperDivId);
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


table.on("tableBuilt", () => {
  // const p = addRound();
  for (let i = 0; i < 3; i++) {
    // console.log("Adding columns")
    // p.then(() => {table.addColumn(table)})
    addRound();
  }
});

document.getElementById("add-row").addEventListener("click", function(){
  table.addRow({});
});

document.getElementById("del-row").addEventListener("click", function(){
  table.deleteRow(1);
});

document.getElementById("add-col").addEventListener("click", function(){
});

document.getElementById("del-col").addEventListener("click", function(){
  // table.deleteColumn();
});

// dtCreateDataTable({
//   wrapperDivId,
//   rowsName: "Candidate",
//   columnsName: "Round",
//
//   /* Datum Config */
//   names: ["# Votes", "Status"],
//   types: [Number, Array],
//   values: [0, ["Active", "Eliminated", "Elected"]],
//   callbacks: [voteCountCallback, statusCallback]
// });
