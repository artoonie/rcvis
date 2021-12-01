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

function voteCountCallback(value, row, col) {
    if (value < 0) {
        return "Vote counts must be positive";
    }

    let thisCellErrorMessage = null;
    const numCols = dtGetNumColumns('dataTableWrapper');
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
    updateActivationOfRowStartingAtCol(status, row, col);
}

dtCreateDataTable({
  wrapperDivId,
  rowsName: "Candidate",
  columnsName: "Round",

  /* Datum Config */
  names: ["# Votes", "Status"],
  types: [Number, Array],
  values: [0, ["Active", "Eliminated", "Elected"]],
  callbacks: [voteCountCallback, statusCallback]
});
