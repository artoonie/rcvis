// noinspection JSUnusedLocalSymbols
import Candidate from "./model/candidate";
import {
    CellComponent,
    ColumnDefinition,
    EditModule,
    EditorParams,
    FormatModule,
    HistoryModule,
    InteractionModule,
    PopupModule,
    ResizeColumnsModule,
    ResizeTableModule,
    SortModule,
    Tabulator,
    ValidateModule
} from "tabulator-tables";
import {disableDataOptionsAndSubmitButton, enableDataOptionsAndSubmitButton} from "rcvis-settings";

const VOTE_ERROR_SIMPLE_MESSAGE = "Vote count decreased";
const VOTE_ERROR_MESSAGE = "Vote count cannot decrease unless this is a surplus transfer,"
    +
    " i.e., the candidate must have been elected in the previous round";

function requireRevalidation() {
    $("#validateButton").prop("disabled", false);
}

const errorPopupFormatter = function (table: Tabulator) {
    const container = document.createElement("div");
    const contents = `<strong style='font-size:1.2em;'>${VOTE_ERROR_SIMPLE_MESSAGE}</strong>
    <br/><span>${VOTE_ERROR_MESSAGE}</span>`;
    container.innerHTML = contents;
    const closeAlert = document.createElement("button");
    closeAlert.classList.add("close-alert");
    closeAlert.textContent = "Ok";
    closeAlert.style.textAlign = "center";
    closeAlert.onclick = function (e) {
        e.preventDefault();
        table.clearAlert();
    };
    container.appendChild(document.createElement("br"));
    container.appendChild(closeAlert);
    return container;
};

const lessThanZeroError = function (table: Tabulator) {
    const container = document.createElement("div");
    container.innerHTML = `<strong style='font-size:1.2em;'>Error Details</strong>
        <br/><span>Must be a positive number</span>`;
    const closeAlert = document.createElement("button");
    closeAlert.textContent = "Ok";
    closeAlert.classList.add("close-alert");
    closeAlert.style.textAlign = "center";
    closeAlert.onclick = function (e) {
        e.preventDefault();
        table.clearAlert();
    };
    container.appendChild(document.createElement("br"));
    container.appendChild(closeAlert);
    return container;
};

export default class RcvisDataTable {
    _sidecarOnly: boolean;
    _includeModifiers: boolean;
    _table: Tabulator;

    constructor(id: string, data: any = null, sidecarOnly = false) {
        this._sidecarOnly = sidecarOnly;
        this._includeModifiers = !sidecarOnly;
        this._table = this.createDataTable(id, data, sidecarOnly);

        this.table.on("dataChanged", function () {
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

    static voteCountCallback(cell: CellComponent, value: number) {
        requireRevalidation();
        const cells = cell.getRow().getCells();
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
            (cell.getTable() as any).alert(lessThanZeroError(cell.getTable()), "error");
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
                // if (c === cellIndex) {
                (cell.getTable() as any).alert(errorPopupFormatter(cell.getTable()), "error");
                return false;
                // } else {
                //     cells[c].validate();
                // }
            }

            prevRoundVotes = numVotes;
            prevRoundStatus = status;
        }
        return true;
    }

    // Checks if this cell is after an Eliminated cell, and if so,
    // it cannot be edited.
    editCheck(cell: CellComponent) {
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

    static updateElectedCell(cell: CellComponent) {
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

    static updateEliminatedCell(cell: CellComponent) {
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

    static updateStatusCell(cell: CellComponent) {
        RcvisDataTable.updateElectedCell(cell);
        RcvisDataTable.updateEliminatedCell(cell);
    }


    createDataTable(id: string, data: any = null, sidecarOnly = false) {
        Tabulator.registerModule([
            EditModule, FormatModule, HistoryModule, InteractionModule,
            PopupModule, ResizeTableModule, ResizeColumnsModule, SortModule, ValidateModule
        ]);
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
                    editorParams: {"sidecarOnly": sidecarOnly} as EditorParams,
                    sorter: Candidate.customCandidateSorter,
                    variableHeight: true,
                    resizable: true,
                    maxWidth: 200,
                },
            ],
        });
    }

    static statusFormatter(cell: CellComponent) {
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
        const colDef: ColumnDefinition = {
            title: `Round ${colNr}`, columns: [
                {
                    title: `# Votes`,
                    editorParams: {selectContents: true},
                    field: `votes-${colNr}`, hozAlign: "center",
                    editor: "number",
                    editable: editableFunc,
                    validator: [{type: RcvisDataTable.voteCountCallback}],
                    cellEdited: c => c.validate,
                    resizable: true,
                },
                {
                    title: `Status`,
                    field: `status-${colNr}`, hozAlign: "center",
                    editorParams: {
                        selected: 0, values: ["Active", "Eliminated", "Elected"]
                    } as EditorParams,
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

        interface RowData {
            id: number;

            [key: string]: any;
        }

        if (!readOnly) {
            for (let i = 1; i <= rows.length; i++) {
                const obj: RowData = {id: i};
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

        interface CandidateRowData {
            id: number;
            candidate: Candidate;

            [key: string]: any;
        }

        const candidate: CandidateRowData = {
            id: rowNr, candidate: new Candidate(`Candidate ${rowNr}`)
        };

        for (let i = 1; i <= this.table.getColumnDefinitions().length; i++) {
            candidate[`votes-${i}`] = 0;
            candidate[`status-${i}`] = "Active";
        }
        return this.table.addRow(candidate, false);
    }

    toJson(tableData: any) {
        const data = [];
        const rowNames = [];

        interface VotesStatus {
            [key: string]: any;
        }

        for (let i = 0; i < tableData.length; i++) {
            rowNames[i] = tableData[i].candidate.candidateName;
            const rounds = [];
            for (let j = 1; j < this.table.getColumnDefinitions().length; j++) {
                const obj: VotesStatus = {};
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
        const dataEntry = document.getElementById('dataEntry');
        if (dataEntry instanceof HTMLInputElement) {
            dataEntry.value = JSON.stringify(
                this.toJson(this.table.getData()));
        }

        // Prepare the mock form
        const form = document.getElementsByTagName('form')[0];
        const data = $(form).serializeArray();

        // AJAX to check if it would survive all serverside processing
        $.post('/validateDataEntry', data, function (data) {
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

    initTable(wrapperId: string, count = 3, readOnly = false) {
        this.table.on("tableBuilt", () => {
            for (let i = 0; i < count; i++) {
                this.addRound(readOnly);
            }
        });
    }

    initTableModifiers() {
        const tableInstance = this;
        document.getElementById("upload-add-row")
        .addEventListener("click", function (e) {
            e.preventDefault();
            tableInstance.addRow();
        });

        document.getElementById("upload-del-row").addEventListener("click",
            function (e) {
                e.preventDefault();
                const rows = tableInstance.table.getRows();
                if (rows.length > 0) {
                    rows[rows.length - 1].delete();
                }
            });

        document.getElementById("upload-add-col").addEventListener("click",
            function (e) {
                e.preventDefault();
                tableInstance.addRound();
            });

        document.getElementById("upload-del-col").addEventListener("click",
            function (e) {
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
