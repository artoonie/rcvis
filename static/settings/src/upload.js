import {
    getDatatableOptions,
    getDatatableOuterWrapper,
    getDatatableUploadBox,
    getEntireForm,
    getEntireOptionsWrapper,
    getFileUploadBox,
    getManuallyEditSidecarButton,
    getManuallyEditSidecarErrorButton,
    getOptionsForManualSidecarEntry,
    getUploadSubmitButton
} from "./settings-page-elements";
import RcvisDataTable from "rcvis-datatable";
import Candidate from "rcvis-datatable/candidate";
import CandidateDatatable from "rcvis-datatable/candidate-datatable";
import $ from "jquery";

const uploadWrapperDivId = "dataTableWrapperUpload";
const wrapperDivId = 'dataTableWrapper';
let uploadDataTable = null;
let uploadByDataTableTable = null;
let uploadDataTableEdited = false;
let manualSidecarSelectedLast = false;

export function getUploadByDataTableTable() {
    return uploadByDataTableTable;
}

export function enableDataOptionsAndSubmitButton() {
    const entireOptionsWrapper = getEntireOptionsWrapper();
    if(entireOptionsWrapper) {
        entireOptionsWrapper.style.opacity = '100%';
    }
    getUploadSubmitButton().disabled = false;
}

export function disableDataOptionsAndSubmitButton() {
    const entireOptionsWrapper = getEntireOptionsWrapper();
    if (entireOptionsWrapper) {
        entireOptionsWrapper.style.opacity = '10%';
    }
    getUploadSubmitButton().disabled = true;
}

function hideManualOptionsShowTable() {
    getOptionsForManualSidecarEntry().style.display = 'none';
    getDatatableOuterWrapper().style.display = 'block';
    redrawOptions();
}

function hideManualEntryShowError() {
    getManuallyEditSidecarButton().style.display = "none";
    getManuallyEditSidecarErrorButton().style.display = "inline";
}

function hideManualEntryErrorShowMainButton() {
    getManuallyEditSidecarButton().style.display = "inline";
    getManuallyEditSidecarErrorButton().style.display = "none";
}

function showManualOptionsHideTable(redraw = true) {
    getOptionsForManualSidecarEntry().style.display = 'block';
    getDatatableOuterWrapper().style.display = 'none';
    document.removeEventListener('formdata', formListener);
    if (redraw) {
        redrawOptions();
    }
}

export function uploadSidecarInstead(e) {
  e.preventDefault();
  showManualOptionsHideTable();
}

function redrawOptions(delay = 100) {
    setTimeout(() => {
        const content = getDatatableOptions();
        content.style.maxHeight = (content.scrollHeight + 20) + "px";
    }, delay);
}

export function summaryFileSelected(files) {
    $("#selectResultsFileButton").text(files[0].name);
    enableDataOptionsAndSubmitButton();
    hideManualEntryErrorShowMainButton();
    showManualOptionsHideTable(false);
    manualSidecarSelectedLast = false;
    uploadDataTable = null;
}

export function manuallyEditUpload(e) {
    e.preventDefault();
    manualSidecarSelectedLast = true;
    if (uploadDataTable) {
        hideManualOptionsShowTable();
        return;
    }
    const form = getEntireForm();
    const formData = new FormData(form);
    const file = formData.getAll("jsonFile")[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContent = e.target.result;
            formData.set("jsonFile", fileContent);
            standardizeFormatAjax(formData);
        };
        reader.readAsText(file);
    }
}

function formListener(e) {
    if (uploadDataTable && uploadDataTableEdited && manualSidecarSelectedLast) {
        const data = e.formData;
        attachSidecarJson(transformTableDataToSidecarJson(), data);
    }
}

function uploadByDataTableInit() {
    uploadByDataTableTable = new RcvisDataTable(wrapperDivId);
}

function standardizeFormatAjax(formData) {
    $.ajax({
        url: '/convertToUTFormat',
        method: 'POST',
        dataTypes: 'json',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            const form = document.getElementById('form');
            if (data.success !== null && data.success === false) {
                hideManualEntryShowError();
                return;
            }
            if (uploadDataTable) {
                uploadDataTable.table.replaceData(
                    transformJsonToTableData(data));
            } else {
                uploadDataTable = new CandidateDatatable(uploadWrapperDivId,
                    Object.keys(data.results[0].tally), true);
                uploadDataTable.table.on("cellEdited", function(c) {
                    uploadDataTableEdited = true;
                    const img = c.getElement().getElementsByClassName(
                        "candidate-img-thumbnail");
                    if (img && img.length > 0) {
                        img[0].addEventListener("load", () => {
                            c.getRow().normalizeHeight();
                            setTimeout(() => {
                                c.getRow().reformat();
                                c.getTable().redraw(true);
                                redrawOptions();
                            }, 100);
                        }, {once: true});
                    }
                });
                uploadDataTable.table.on("dataProcessed", function() {
                    uploadDataTable.table.validate();
                    // uploadDataTable.table.redraw(true);
                    hideManualOptionsShowTable();
                });
                uploadDataTable.table.on("tableBuilt", function() {
                    uploadDataTable.table.redraw(true);
                });
            }
            form.addEventListener('formdata', formListener);
        }
    });
}

function attachSidecarJson(jsonData, formData) {
    const jsonString = JSON.stringify(jsonData);
    const blob = new Blob([jsonString], {type: "application/json"});
    const file = new File([blob], "sidecar.json", {type: "application/json"});

    formData.set("candidateSidecarFile", file);
}

function transformJsonToTableData(json) {
    const data = [];
    const candidates = Object.keys(json.results[0].tally);
    for (let i = 0; i < candidates.length; i++) {
        const candidate = {
            id: i + 1, candidate:
                new Candidate(candidates[i])
        };
        let status = "Active";
        for (let j = 0; j < json.results.length; j++) {
            const roundResults = json.results[j];
            const roundNr = roundResults.round;
            candidate["votes-" + roundNr] = roundResults.tally[candidates[i]];
            const anyWon = roundResults.tallyResults.map(n => n.elected).some(
                n => n);
            const won = roundResults.tallyResults.map(
                n => n.elected === candidates[i]).some(n => n);
            const lost = roundResults.tallyResults.map(
                n => n.eliminated === candidates[i]).some(n => n);
            if (won) {
                status = "Elected";
            } else if (lost || (anyWon && status !== null)) {
                status = "Eliminated";
            }
            candidate["status-" + roundNr] = status;
            if (status !== "Active") {
                status = null;
            }
        }
        data.push(candidate);
    }
    return data;
}

function transformTableDataToSidecarJson() {
    const info = {};
    const sidecar = {version: "1.0", order: [], info: info};
    uploadDataTable.table.getData().map(row => {
        const obj = {
            incumbent: row.candidate.incumbent,
            photo_url: row.candidate.photo_url,
            moreinfo_url: row.candidate.moreinfo_url,
            party: row.candidate.party,
        };
        info[row.candidate.candidateName] = obj;
        sidecar.order.push(row.candidate.candidateName);
    });
    return sidecar;
}

export function sidecarFileSelected(files) {
    $("#select-sidecar-file-button").text(files[0].name);
    showManualOptionsHideTable();
    manualSidecarSelectedLast = false;
}

export function showDataTable(doShow) {
    getFileUploadBox().style.display = doShow ? "none"
        : "block";
    getDatatableUploadBox().style.display = doShow
        ? "block" : "none";
    disableDataOptionsAndSubmitButton();
    if (doShow) {
        // destroyDataTableFromUpload();
        uploadByDataTableInit();
        getEntireForm().action = 'uploadByDataTable.html';
    } else {
        // destroyUploadByDataTable();
        getEntireForm().action = 'upload.html';
    }
}
