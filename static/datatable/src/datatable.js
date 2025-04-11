// noinspection JSUnusedLocalSymbols
import Candidate from "./model/candidate.js";
import $ from "jquery";
import {TabulatorFull as Tabulator} from "tabulator-tables";
import {disableDataOptionsAndSubmitButton, enableDataOptionsAndSubmitButton} from "rcvis-settings";

const VOTE_ERROR_SIMPLE_MESSAGE = "Vote count decreased";
const VOTE_ERROR_MESSAGE = "Vote count cannot decrease unless this is a surplus transfer,"
    +
    " i.e., the candidate must have been elected in the previous round";

function requireRevalidation() {
    $("#validateButton").prop("disabled", false);
}

const errorPopupFormatter = function() {
    let container = document.createElement("div"),
        contents = "<strong style='font-size:1.2em;'>Error Details</strong><br/>";
    contents += `<span class="upload-hoverable">${VOTE_ERROR_SIMPLE_MESSAGE}</span>`;
    contents += `<div class="upload-hover">${VOTE_ERROR_MESSAGE}</div>`;
    container.innerHTML = contents;
    return container;
};

const lessThanZeroError = function() {
    let container = document.createElement("div"),
        contents = "<strong style='font-size:1.2em;'>Error Details</strong><br/>";
    contents += `<span>Must be a positive number</span>`;
    container.innerHTML = contents;
    return container;
};

export default class RcvisDataTable {

    constructor(id, data = null, sidecarOnly = false) {
        this._sidecarOnly = sidecarOnly;
        this._includeModifiers = !sidecarOnly;
        this._table = this.createDataTable(id, data, sidecarOnly);

        this.table.on("dataChanged", function() {
            $("#validateButton").prop("disabled", false);
        });
        if (!data) {
            this.initTable(id);
        } else {
            let i = 0;
            for (let j = 0; data[j]; j++) {
                while (data[j][`votes-${i + 1}`] != null) {
                    i++;
                }
            }
            this.initTable(id, i, true);
        }

        if (this.includeModifiers) {
            this.initTableModifiers();
        }
    }

    get table() {
        return this._table;
    }

    get sidecarOnly() {
        return this._sidecarOnly;
    }

    get includeModifiers() {
        return this._includeModifiers;
    }

    static voteCountCallback(cell, value) {
        requireRevalidation();
        const cells = cell.getRow().getCells();
        cell.setValue(value);
        if (cells.length <= 3) {
            return true;
        }
        let cellIndex = 0;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i] === cell) {
                cellIndex = i;
                break;
            }
        }
        if (cellIndex < 1) {
            return false;
        }

        if (value < 0) {
            cell.getRow().popup(lessThanZeroError, "bottom");
            return false;
        }

        const numCols = cell.getTable().getColumns().length;
        let prevRoundVotes = cells[1].getValue();
        if (cells[1].getField() === cell.getField()) {
            prevRoundVotes = value;
        }
        let prevRoundStatus = cells[2].getValue();
        for (let c = 1; c < numCols; c += 2) {
            const numVotes = cells[c].getField() === cell.getField() ? value
                : cells[c].getValue();
            const status = cells[c + 1].getValue();

            if (isNaN(numVotes) || numVotes == null ||
                // If it hasn't been edited and isn't currently being edited.
                (!cells[c].isEdited() && cells[c].getField()
                    !== cell.getField())) {
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
                    cell.popup(errorPopupFormatter, "bottom");
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
    editCheck(cell) {
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
            if (seenElected && curCell.getColumn().getDefinition().title
                === "# Votes") {
                if (seenVotesAfterElected > 0) {
                    return false;
                }
                seenVotesAfterElected++;
            }
            if (seenElected && curCell.getColumn().getDefinition().title
                === "Status") {
                return false;
            }
            if (curCell.getValue() === "Eliminated" || (curCell.getValue()
                === "Elected"
                && curCell.getColumn().getField() === "Status")) {
                return false;
            }
        }
        return true;
    }

    static updateElectedCell(cell) {
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
                        if (curCell.getColumn().getDefinition().title
                            === "# Votes") {
                            curCell.setValue(null, false);
                        }
                    }
                    if (curCell.getColumn().getDefinition().title
                        === "Status") {
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

    static updateEliminatedCell(cell) {
        const cells = cell.getRow().getCells();
        const value = cell.getValue();
        const oldValue = cell.getOldValue();
        if (value === null || !(value === "Eliminated" || oldValue
            === "Eliminated")) {
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

    static updateStatusCell(cell) {
        RcvisDataTable.updateElectedCell(cell);
        RcvisDataTable.updateEliminatedCell(cell);
    }

    createDataTable(id, data = null, sidecarOnly = false) {
        return new Tabulator("#" + id, {
            data: data ? data : [
                {id: 1, candidate: new Candidate("Candidate 1")},
                {id: 2, candidate: new Candidate("Candidate 2")},
                {id: 3, candidate: new Candidate("Candidate 3")}
            ],
            addRowPos: "bottom",
            layout: "fitDataFill",
            debugInvalidOptions: false,
            layoutColumnsOnNewData: true,
            validationMode: "highlight",
            columns: [
                {
                    title: "Candidates",
                    field: "candidate",
                    formatter: Candidate.customCandidateFormatter,
                    formatterParams: {sidecarOnly: sidecarOnly},
                    editor: Candidate.customCandidateEditor,
                    editorParams: {sidecarOnly: sidecarOnly},
                    sorter: Candidate.customCandidateSorter,
                    variableHeight: true,
                    resizable: true,
                    maxWidth: 200,
                },
            ],
        });
    }

    static statusFormatter(cell) {
        const elem = document.createElement("span");
        if (cell.getValue()) {
            elem.classList.add(
                `upload-status-${cell.getValue().toLowerCase()}`);
            elem.textContent = cell.getValue();
        }
        return elem;
    }

    addRound(readOnly = false) {
        const cols = this.table.getColumns();
        const lastCol = this.table.getColumn(cols[cols.length - 1]);
        const colNr = this.table.getColumnDefinitions().length;
        const editableFunc = readOnly ? () => false : this.editCheck;
        const colDef = {
            title: `Round ${colNr}`, columns: [
                {
                    title: `# Votes`,
                    editorParams: {selectContents: true},
                    field: `votes-${colNr}`, hozAlign: "center",
                    editor: "number",
                    editable: editableFunc,
                    validator: [{type: RcvisDataTable.voteCountCallback}],
                    resizable: true,
                },
                {
                    title: `Status`,
                    field: `status-${colNr}`, hozAlign: "center",
                    editorParams: {
                        selected: 0, values: ["Active", "Eliminated", "Elected"]
                    },
                    editor: "list",
                    formatter: RcvisDataTable.statusFormatter,
                    validator: [{type: RcvisDataTable.voteCountCallback}],
                    cellEdited: RcvisDataTable.updateStatusCell,
                    editable: editableFunc,
                    minWidth: 100,
                    headerSort: false,
                }],
        };
        const rows = this.table.getRows();
        if (!readOnly) {
            for (let i = 1; i <= rows.length; i++) {
                const obj = {id: i};
                obj[`votes-${colNr}`] = 0;
                obj[`status-${colNr}`] = "Active";
                rows[i - 1].update(obj);
            }
        }
        return this.table.addColumn(colDef, false,
            lastCol ? lastCol.getField() : null);
    }

    addRow() {
        const rows = this.table.getRows();
        const rowNr = rows.length + 1;
        const candidate = {
            id: rowNr, candidate: new Candidate(`Candidate ${rowNr}`)
        };

        for (let i = 1; i <= this.table.getColumnDefinitions().length; i++) {
            candidate[`votes-${i}`] = 0;
            candidate[`status-${i}`] = "Active";
        }
        return this.table.addRow(candidate, false);
    }

    toJson(tableData) {
        let data = [];
        let rowNames = [];
        for (let i = 0; i < tableData.length; i++) {
            rowNames[i] = tableData[i].candidate.candidateName;
            let rounds = [];
            for (let j = 1; j < this.table.getColumnDefinitions().length; j++) {
                let obj = {};
                obj["# Votes"] = tableData[i][`votes-${j}`];
                obj["Status"] = tableData[i][`status-${j}`];
                rounds.push(obj);
            }
            data.push(rounds);
        }
        return {rowNames: rowNames, data: data};
    }

    validateDataEntry() {
        // Serialize data, add it to the hidden input
        document.getElementById('dataEntry').value = JSON.stringify(
            this.toJson(this.table.getData()));

        // Prepare the mock form
        const form = document.getElementsByTagName('form')[0];
        const data = $(form).serializeArray();

        // AJAX to check if it would survive all serverside processing
        $.post('/validateDataEntry', data, function(data) {
            const validationMessage = $('#dataEntryValidationMessage');
            validationMessage.text(data.message);

            validationMessage.toggleClass('validationSuccess',
                data.success);
            validationMessage.toggleClass('validationFailure',
                !data.success);
            if (data.success) {
                enableDataOptionsAndSubmitButton();
                $("#validateButton").prop("disabled", true);
            } else {
                disableDataOptionsAndSubmitButton();
            }
        });
    }

    initTable(wrapperId, count = 3, readOnly = false) {
        this.table.on("tableBuilt", () => {
            for (let i = 0; i < count; i++) {
                this.addRound(readOnly);
            }
        });
    }

    initTableModifiers() {
        const tableInstance = this;
        document.getElementById("upload-add-row")
        .addEventListener("click", function(e) {
            e.preventDefault();
            tableInstance.addRow();
        });

        document.getElementById("upload-del-row").addEventListener("click",
            function(e) {
                e.preventDefault();
                const rows = tableInstance.table.getRows();
                if (rows.length > 0) {
                    rows[rows.length - 1].delete();
                }
            });

        document.getElementById("upload-add-col").addEventListener("click",
            function(e) {
                e.preventDefault();
                tableInstance.addRound();
            });

        document.getElementById("upload-del-col").addEventListener("click",
            function(e) {
                e.preventDefault();
                const columns = tableInstance.table.getColumns();
                const length = columns.length;
                if (length >= 3) {
                    const field = columns[length - 1].getField();
                    const field2 = columns[length - 2].getField();
                    tableInstance.table.deleteColumn(field);
                    tableInstance.table.deleteColumn(field2);
                }
            });

    }
}
