/**
 * Global vars - storing data for callbacks
 */
/* Collection of eventTypes
* TODO: Figure out why lint doesn't like ENUMs */
// enum eventTypes = {};

// Initialization of config dictionary; stores in the form {wrapperDivId : config}
let configDict = {};

/**
 * Config object for each datatable. Expects clientConfig.wrapperDivId to exist.
 */
class Config {
    /**
     * Global variable containing configuration information for the table
     * @param {object} clientConfig     - Configuration information passed in by the client
     * @property {string} wrapperDivId  - ID for the wrapper
     * @property {number} numRows       - Number of rows in the table
     * @property {number} numColumns    - Number of columns in the table
     * @property {string} rowsName      - Name of rows in the table
     * @property {string} columnsName   - Name of columns in the table
     * @property {object} tableIds      - Container for all the table's magic strings
     * @property {object} datumConfig   - Container for default values of a cell
     */
    constructor(clientConfig) {
        this.numRows = clientConfig.numRows === undefined ? 3 : clientConfig.numRows;
        this.numColumns = clientConfig.numColumns === undefined ? 4 : clientConfig.numColumns;
        this.rowsName = clientConfig.rowsName === undefined ? "Row" : clientConfig.rowsName;
        this.columnsName = clientConfig.columnsName === undefined ? "Column" : clientConfig.columnsName;

        /**
         * @property {string} wrapperDivId      - ID for the div passed in by the client
         * @property {string} tableDivId        - ID for the div containing the table
         * @property {string} entryBoxDivId     - ID for the div containing the entry box
         * @property {string} tableElementId    - Id for the entire table element
         * @property {string} theadElementId    - ID for the table's first row (column headers) element
         * @property {string} tbodyElementId    - ID for the table's body element
         */
        this.tableIds = {
            wrapperDivId: clientConfig.wrapperDivId,
            tableDivId: '_tableDivId_' + clientConfig.wrapperDivId,
            entryBoxDivId: '_entryBoxDivId_' + clientConfig.wrapperDivId,
            tableElementId: '_tableId_' + clientConfig.wrapperDivId,
            theadElementId: '_theadId_' + clientConfig.wrapperDivId,
            tbodyElementId: '_tbodyId_' + clientConfig.wrapperDivId
        }

        /**
         * @property {object} names     - Array of the names for all fields in a cell | Default: ["Value"]
         * @property {object} types     - Array of the types for all fields in a cell | Default: [Number]
         * @property {object} defaults  - Array of the defaults for all fields in a cell | Default: [0]
         * @property {object} callbacks - Tells what function to execute when a field is changed | Default: ["None"]
         */
        this.datumConfig = {
            names: clientConfig.names === undefined ? ["Value", "Elected?", "Status"] : clientConfig.names,
            types: clientConfig.types === undefined ? [Number, Boolean, Object] : clientConfig.types,
            values: clientConfig.values === undefined ? [0, false, ["Active", "Eliminated", "Elected"]] : clientConfig.values,
            callbacks: clientConfig.callbacks === undefined ? ["None"] : clientConfig.callbacks
        }
    }
}

/**
 * Functions for table creation
 */

/**
 * If any option is not provided, chooses a sane default
 * @param {object} clientConfig - A set of overriding config values, edits in-place
 * @returns {undefined}         - Doesn't return anything
 * @throws Error                - If any required option is not provided
 */
function setConfig(clientConfig) {

    if (clientConfig.wrapperDivId === undefined) {
        throw new Error("An ID for the wrapper div is required");
    }

    let config = new Config(clientConfig);

    validateConfig(config);

    configDict[clientConfig.wrapperDivId] = config;
}

/**
 * Performs basic logic-checking on the config after defaults have been set
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 * @throws Error            - If any required option is not provided
 */
function validateConfig(config) {

    if (config.numColumns <= 0 || config.numRows <= 0) {
        throw new Error("The table must have at least one column and one row!")
    }
}

/**
 * Creates two sub divs and inserts them into the wrapper div
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createSubDivs(config) {
    let subDivClass = "SubDiv";

    let entryBoxDiv = document.createElement("div");
    entryBoxDiv.id = config.tableIds.entryBoxDivId;
    entryBoxDiv.classList.add(subDivClass);

    let tableDiv = document.createElement("div");
    tableDiv.id = config.tableIds.tableDivId;
    tableDiv.classList.add(subDivClass);

    document.getElementById(config.tableIds.wrapperDivId).appendChild(entryBoxDiv);
    document.getElementById(config.tableIds.wrapperDivId).appendChild(tableDiv);
}

/**
 * Creates an HTML table and assigns unique element IDs to all parts of the table.
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createTable(config) {
    let table = document.createElement("table");
    table.id = config.tableIds.tableElementId;
    table.classList.add("data-table");

    let thead = document.createElement("thead");
    thead.id = config.tableIds.theadElementId;

    let tbody = document.createElement("tbody");
    tbody.id = config.tableIds.tbodyElementId;

    table.appendChild(thead);
    table.appendChild(tbody);
    let tableDiv = document.getElementById(config.tableIds.tableDivId);
    tableDiv.appendChild(table);
    document.getElementById(config.tableIds.wrapperDivId).appendChild(tableDiv)

    createColumnHeader(config);
    addMultipleRows(config, config.numRows, 0);
}

function createColumnHeader(config) {
    // Insert a row into the body of the table
    let row = document.getElementById(config.tableIds.theadElementId).insertRow(0);
    // Then for each column
    for (let colIndex = 0; colIndex < config.numColumns; colIndex++) {
        // Create an entry cell
        if (colIndex === 0) {
            let cell = row.insertCell(colIndex);
            cell.id = cellIndexToElementId(config.tableIds.theadElementId, 0, colIndex)
            cell.classList.add("data-table-cell");

            let middle = document.createTextNode("");

            cell.appendChild(middle);
        } else {
            let cell = row.insertCell(colIndex);
            cell.id = cellIndexToElementId(config.tableIds.theadElementId, 0, colIndex)
            cell.classList.add("data-table-cell");

            let middle = document.createTextNode(config.columnsName + " " + colIndex);

            cell.appendChild(middle);
        }
    }
}

/**
 * Adds columns to the table.
 * @param {object} config       - Table configuration object
 * @param {Number} numberOfColumns - Number of columns to be added
 * @returns {undefined}         - Doesn't return anything
 */
 function addMultipleColumns(config, numberOfColumns) {
    for(let i = 0; i < numberOfColumns; i++){
        addSingleColumn(config);
    }
}

/**
 * Adds a single colunm to the table
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function addSingleColumn(config){
    let table = document.getElementById(config.tableIds.tableElementId);
    let numRows = table.rows.length; // get length row right now
    let numCols = table.rows[0].cells.length;

    let cell = table.rows[0].insertCell(numCols);
    cell.id = cellIndexToElementId(config.tableIds.theadElementId, 0, numCols);
    cell.classList.add("data-table-cell");

    let middle = document.createTextNode(config.columnsName + " " + numCols);

    cell.appendChild(middle);

    for(let rowIndex = 1; rowIndex < numRows; rowIndex++){
        createEntryCell(config, table.rows[rowIndex], rowIndex, numCols, " (" + rowIndex + ", " + numCols + ") ");

    }
    config.numColumns += 1;
}

/**
 * Deletes multiple Columns from an existing table
 *
 * @param {object} config       - Table configuration object
 * @param {Number} numberOfColumns - The number of columns to be deleted
 * @returns {undefined}         - Doesn't return anything
 */
function deleteColumns(config, numberOfColumns) {
    for(let i = 0; i < numberOfColumns; i++){
        deleteSingleColumn(config);
    }
}

/**
 * Deletes a single Column from an existing table (detle from the bottom of the table)
 *
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function deleteSingleColumn(config) {
     let table = document.getElementById(config.tableIds.tableElementId);
     let numRows = table.rows.length; // get length row right now
    for (let i = 0; i < numRows; i++){
        table.rows[i].deleteCell(-1);
    }
    config.numColumns -= 1;
}

/**
 * Adds rows to the table.
 * @param {object} config       - Table configuration object
 * @param {Number} numberOfRows - Number of rows to be added
 * @param {Number} index        - Vertical index where to start adding rows
 * @returns {undefined}         - Doesn't return anything
 */
function addMultipleRows(config, numberOfRows, index) {
    // For each of the newly requested rows
    for (let newRow = 0; newRow < numberOfRows; newRow++) {
        // The third argument of addSingleRow is optional and can be safely omitted.
        addSingleRow(config, index + newRow);
    }
}

/**
 * Adds a single row to the table
 * @param {object} config   - Table configuration object
 * @param {Number} rowIndex - Where to insert the row
 * @param {String} content  - Content to place in the left-most cell of a row (uses default if
 *                              no string is provided)
 * @returns {undefined}     - Doesn't return anything
 */
function addSingleRow(config, rowIndex, content) {
    // Insert a row into the body of the table
    let row = document.getElementById(config.tableIds.tbodyElementId).insertRow(rowIndex);
    // Then for each column
    for (let colIndex = 0; colIndex < config.numColumns; colIndex++) {
        // Create an entry cell
        if (colIndex === 0) {
            createRowHeader(config, row, rowIndex, colIndex)
        } else {
            createEntryCell(config, row, rowIndex, colIndex, " (" + rowIndex + ", " + colIndex + ") ")
        }
    }

    if (rowIndex >= config.numRows) {
        config.numRows += 1;
    }
}

function createRowHeader(config, row, rowIndex, colIndex) {

    let cell = row.insertCell(colIndex);
    cell.id = cellIndexToElementId(config.wrapperDivId, rowIndex, colIndex)
    cell.classList.add("data-table-cell");

    let input = document.createElement("INPUT");
    input.type = 'text';
    input.placeholder = config.rowsName + " " + (rowIndex + 1);
    input.classList.add('row-header-input');
    cell.appendChild(input);

}

/**
 * Adds a cell to a specific index on a passed-in row
 * @param {object} config           - Table configuration object
 * @param {HTMLTableRowElement} row - HTML table element to which the cell will be added
 * @param {Number} rowIndex         - The index of the row, used to create the cell's magic string
 * @param {Number} colIndex         - The index of the column, used to create the cell's magic string
 * @param {String} content          - The content of the cell
 * @returns {undefined}             - Doesn't return anything
 */
// eslint-disable-next-line max-params
function createEntryCell(config, row, rowIndex, colIndex, content) {
    /**
     * TODO: Set this up to deal with default fields
     */

    let cell = row.insertCell(colIndex);
    cell.id = cellIndexToElementId(config.wrapperDivId, rowIndex, colIndex)
    cell.classList.add("data-table-cell");

    // add all the stuff from datumConfig
    for (let fieldNum = 0; fieldNum < config.datumConfig.names.length; fieldNum++) {
        let type = config.datumConfig.types[fieldNum];

        let label = document.createElement("LABEL");
        label.innerHTML = config.datumConfig.names[fieldNum] + ": ";
        label.classList.add('cell-label');

        if (type === Number || type === String) {

            let input = document.createElement("INPUT");
            input.type = 'text';
            input.placeholder = config.datumConfig.values[fieldNum];
            input.classList.add('cell-input');

            if (config.datumConfig.callbacks[fieldNum] !== undefined) {
                input.addEventListener("focusout", function() {
                    /**
                     * FIXME: this is a placeholder implementation of a callback - do we need it?
                     */
                    // config.datumConfig.callbacks[fieldNum];
                })
            }
            label.appendChild(input);
        } else if (type === Boolean) {
            let input = document.createElement("INPUT");
            input.type = 'checkbox';
            input.defaultChecked = config.datumConfig.values[fieldNum];
            label.appendChild(input);
        } else {
            // At this point assume we have an array
            let select = document.createElement("select");
            for (let i = 0; i < config.datumConfig.values[fieldNum].length; i++) {
                let option = document.createElement("option");
                option.innerHTML = config.datumConfig.values[fieldNum][i];
                select.appendChild(option);
            }
            label.appendChild(select);
        }
        cell.appendChild(label);
    }

    // let middle = document.createTextNode(content);
    //
    // cell.appendChild(middle);
}

/**
 * Deletes multiple rows from an existing table
 *
 * FIXME: This will work when deleting from the bottom of the table but might not from the middle!
 *
 * @param {object} config       - Table configuration object
 * @param {Number} numberOfRows - The number of rows to be deleted
 * @param {Number} rowIndex     - The index of the top-most row to be deleted
 * @returns {undefined}         - Doesn't return anything
 */
function deleteRows(config, numberOfRows, rowIndex) {
    // Deletes from bottom up
    for (let rowNum = numberOfRows; rowNum >= 0; rowNum--) {
        deleteSingleRow(config, rowIndex + rowNum);
    }
}

/**
 * Deletes a single row from an existing table
 *
 * FIXME: This works when deleting from the bottom of the table. It does not support deleting from the middle!
 *
 * @param {object} config   - Table configuration object
 * @param {Number} rowIndex - Index of the row to be deleted
 * @returns {undefined}     - Doesn't return anything
 */
function deleteSingleRow(config, rowIndex) {
    document.getElementById(config.tableIds.tbodyElementId).deleteRow(rowIndex);
    config.numRows -= 1;
}

/**
 * Creates a magic string for a cell
 * @param {object} wrapperDivId - ID for the wrapper
 * @param {Number} rowIndex     - The row index for a cell
 * @param {Number} colIndex     - The column index for a cell
 * @returns {string}            - Returns a magic string unique to a cell, based on location
 */
function cellIndexToElementId(wrapperDivId, rowIndex, colIndex) {
    return wrapperDivId + "row_" + rowIndex + "_and_col_" + colIndex + "_";
}

/**
 * Calls functions that create the two main entry boxes: one for rows, another for columns
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createEntryBox(config) {
    createColumnEntryBox(config);

    createRowEntryBox(config);
}

/**
 * Creates HTML elements by which the user can easily create rows with custom left-most cells.
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createColumnEntryBox(config) {
    let entryBoxDiv = document.getElementById(config.tableIds.entryBoxDivId);
    createColumnInputAndBtn(config);
    createColumnDeleteBtn(config);

    /**
     * TODO: This is brute-force formatting that should not exist in final code. Give the buttons appropriate margins
     * and padding in the CSS file then take these lines out.
     */
    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    entryBoxDiv.appendChild(br);
    entryBoxDiv.appendChild(br1);
    entryBoxDiv.appendChild(br2);

}

// /**
//  * This function enables the user to enter the name of a column. Creates a field for text input
//  * as well as a button that sends input text to addSingleColumn().
//  * @param {object} config   - Table configuration object
//  * @returns {undefined}     - Doesn't return anything
//  */
// function createColumnInputAndBtn(config) {
//     let entryBoxDiv = document.getElementById(config.tableIds.entryBoxDivId);
//     // Creates the button that will take the user input and send it to addSingleColumn() when clicked
//     /**
//      * TODO: Button will need to accept a number of columns from the user then pass that number to addMultipleColumns
//      */
//     let addColumnBtn = document.createElement("button");
//     addColumnBtn.click();
//     addColumnBtn.innerHTML = "Add column to bottom";
//     addColumnBtn.onclick = function () {
//         addSingleColumn(config);
//     }
//     entryBoxDiv.appendChild(addColumnBtn);
// }

/**
 * This function enables the user to enter the name of a column. Creates a field for text input
 * as well as a button that sends input text to addSingleColumn().
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createColumnInputAndBtn(config) {
    let entryBoxDiv = document.getElementById(config.tableIds.entryBoxDivId);
    // Creates the field for text input
    let input = document.createElement("INPUT");
    input.type = 'text';
    /**
     * FIXME: Brute force pluralization below, need a better way to do this
     */
    input.placeholder = "Number of " + config.columnsName + "s";
    input.classList.add('enter-row-name');

    // If the user hits enter while in the text box, click the addColumnBtn
    input.addEventListener("keyup", function(event) {
        event.preventDefault();

        if (event.code === "Enter") {
            addColumnBtn.click();
        }
    })
    entryBoxDiv.appendChild(input);

    // Creates the button that will take the user input and send it to addSingleColumn() when clicked
    /**
     * TODO: Button will need to accept a number of columns from the user then pass that number to addMultipleColumns
     */
    let addColumnBtn = document.createElement("button");
    addColumnBtn.classList.add("add-row-button");
    addColumnBtn.innerHTML = "Add column to right";
    addColumnBtn.onclick = function () {
        let value = input.value.trim();
        if (value !== '') {
            addSingleColumn(config, config.numColumns, value);
        } else {
            addSingleColumn(config, config.numColumns, config.columnsName);
        }
        input.value = '';
    }
    entryBoxDiv.appendChild(addColumnBtn);
}

/**
 * Creates a button that will call deleteSingleColumn().
 * FIXME: This currently only deletes the table's bottom-most row.
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createColumnDeleteBtn(config) {
    let deleteColumnBtn = document.createElement("button");
    deleteColumnBtn.innerHTML = "Delete column from right";
    deleteColumnBtn.classList.add("add-row-button");
    deleteColumnBtn.onclick = function () {
        deleteSingleColumn(config);
    }
    document.getElementById(config.tableIds.entryBoxDivId).appendChild(deleteColumnBtn);
}

/**
 * Creates HTML elements by which the user can easily create rows with custom left-most cells.
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createRowEntryBox(config) {
    let entryBoxDiv = document.getElementById(config.tableIds.entryBoxDivId);

    /**
     * TODO: Implement (editable?) container for already existing row names
     */

    createRowInputAndBtn(config);

    createRowDeleteBtn(config);
}

/**
 * This function enables the user to enter the name of a row. Creates a field for text input
 * as well as a button that sends input text to addSingleRow().
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createRowInputAndBtn(config) {
    let entryBoxDiv = document.getElementById(config.tableIds.entryBoxDivId);

    // Creates the field for text input
    let input = document.createElement("INPUT");
    input.type = 'text';
    input.placeholder = "Enter " + config.rowsName + " Name";
    input.classList.add('enter-row-name');

    // If the user hits enter while in the text box, click the addRowBtn
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        /**
         * FIXME: This might cause an error for mobile users. Potentially there's a better way than waiting for "enter"?
         */
        if (event.code === "Enter") {
            addRowBtn.click();
        }
    })
    entryBoxDiv.appendChild(input);

    // Creates the button that will take the user input and send it to addSingleRow() when clicked
    let addRowBtn = document.createElement("button");
    addRowBtn.innerHTML = "+ Add a " + config.rowsName + " to the bottom";
    addRowBtn.classList.add("add-row-button");
    addRowBtn.onclick = function () {
        let value = input.value.trim();
        if (value !== '') {
            addSingleRow(config, config.numRows, value);
        } else {
            addSingleRow(config, config.numRows, config.datumConfig.names[0])
        }
        input.value = '';
    }
    entryBoxDiv.appendChild(addRowBtn);
}

/**
 * Creates a button that will call deleteSingleRow().
 * FIXME: This currently only deletes the table's bottom-most row.
 * @param {object} config   - Table configuration object
 * @returns {undefined}     - Doesn't return anything
 */
function createRowDeleteBtn(config) {
    let deleteRowBtn = document.createElement("button");
    deleteRowBtn.innerHTML = "Delete a " + config.rowsName + " from the bottom";
    deleteRowBtn.classList.add("add-row-button") // this is just a temp. The icon will be replaced.
    deleteRowBtn.onclick = function () {
        deleteSingleRow(config, config.numRows - 1);
    }
    document.getElementById(config.tableIds.entryBoxDivId).appendChild(deleteRowBtn);
}

/**
 * This function clears out an old table and reinitializes it with the previously passed-in clientConfig
 * @param {object} clientConfig - Client configuration requests
 * @returns {undefined}         - Doesn't return anything
 */
function createResetButton(clientConfig) {
    let wrapperDiv = document.getElementById(clientConfig.wrapperDivId);

    let resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset the table";

    // Clears the wrapper div, deletes the old config object, and calls dt_CreateDataTable again
    resetBtn.onclick = function () {
        wrapperDiv.innerHTML = '';
        Reflect.deleteProperty(configDict, clientConfig.wrapperDivId);
        dt_CreateDataTable(clientConfig);
    }
    wrapperDiv.appendChild(resetBtn);
}

function toJSON() {
    /**
     * Parses data held in HTML to JSON and sends it to client
     * TODO: Fill this out
     */
}

function getFieldId(row, col, fieldName) {
    /**
     * Transforms arguments into a magic string for accessing HTML
     * TODO: Fill this out
     */
}

function getCellId(row, col) {
    /**
     * Transforms arguments into a magic string for accessing HTML
     * TODO: Fill this out
     */
}

function showHelpTooltip(event) {
    /**
     * Uses the data-label attribute and converts it to a tooltip
     */
    const helpText = event.target.getAttribute('data-label');

    let div = document.createElement('div');
    div.id = 'timeline-info-tooltip';
    div.innerHTML = helpText;
    div.style.position = 'fixed';
    div.style.left = (event.clientX+5) + 'px';
    div.style.top = (event.clientY-30) + 'px';

    // To ensure tooltip is never transparent,
    // find the first non-transparent element in the hierarchy and add it there
    const firstNonTransparentElement = event.target.parentElement.parentElement.parentElement;
    firstNonTransparentElement.appendChild(div);
}

function hideHelpTooltip() {
    /**
     * Hides the tooltip created by showHelpTooltip
     */
    document.getElementById('timeline-info-tooltip').remove();
}

/**
 * Public functions below
 */

/**
 * Function available to client in order to create a datatable.
 * @param {object} clientConfig - Client configuration requests
 */
// eslint-disable-next-line no-unused-vars,camelcase
function dt_CreateDataTable(clientConfig) {
    setConfig(clientConfig);

    createSubDivs(configDict[clientConfig.wrapperDivId]);

    createTable(configDict[clientConfig.wrapperDivId]);

    createResetButton(clientConfig);

    createEntryBox(configDict[clientConfig.wrapperDivId])

}

function dt_disableField(row, col, fieldName) {
    /**
     * Calls getFieldId() then disables a specific field in a specific cell
     * TODO: Fill this out
     */
}

function dt_enableField(row, col, fieldName) {
    /**
     * Calls getFieldId() then enables a specific field in a specific cell
     * TODO: Fill this out
     */
}

function dt_disableCell(row, col) {
    /**
     * Calls getCellId() then disables all fields of a specific cell
     * TODO: Fill this out
     */
}

function dt_enableCell(row, col) {
    /**
     * Calls getCellId() then enables all fields of a specific cell
     * TODO: Fill this out
     */
}

function dt_setFieldValue(row, col, fieldName, value) {
    /**
     * Calls getFieldId() then updates a specific field in a
     * specific cell to a given value
     * TODO: Fill this out
     */
}

function dt_getFieldValue(row, col, fieldName, value) {
    /**
     * Calls getFieldId() then retrieves a value from
     * a specific field in a specific cell
     * TODO: Fill this out
     */
}


// In case of node.js
/* eslint no-undef: ["off"] */
if (typeof exports !== typeof undefined) {
    exports.createDataTable = dt_createDataTable;
}
