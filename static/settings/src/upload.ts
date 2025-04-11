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
import {CellComponent} from "tabulator-tables";

const uploadWrapperDivId = "dataTableWrapperUpload";
const wrapperDivId = 'dataTableWrapper';
let uploadDataTable: CandidateDatatable = null;
let uploadByDataTableTable: RcvisDataTable = null;
let uploadDataTableEdited = false;
let manualSidecarSelectedLast = false;

export function getUploadByDataTableTable() {
    return uploadByDataTableTable;
}

export function enableDataOptionsAndSubmitButton() {
    const entireOptionsWrapper = getEntireOptionsWrapper();
    if (entireOptionsWrapper) {
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

export function uploadSidecarInstead(e: MouseEvent) {
    e.preventDefault();
    showManualOptionsHideTable();
}

function redrawOptions(delay = 100) {
    setTimeout(() => {
        const content = getDatatableOptions();
        content.style.maxHeight = (content.scrollHeight + 20) + "px";
    }, delay);
}

export function summaryFileSelected(files: any) {
    document.getElementById("selectResultsFileButton").textContent = files[0].name;
    enableDataOptionsAndSubmitButton();
    hideManualEntryErrorShowMainButton();
    showManualOptionsHideTable(false);
    manualSidecarSelectedLast = false;
    uploadDataTable = null;
}

export function manuallyEditUpload(e: MouseEvent) {
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
            if (typeof fileContent === 'string') {
                formData.set("jsonFile", fileContent);
                standardizeFormatAjax(formData);
            }
        };
        reader.readAsText(file as Blob);
    }
}

function formListener(e: FormDataEvent) {
    if (uploadDataTable && uploadDataTableEdited && manualSidecarSelectedLast) {
        const data = e.formData;
        attachSidecarJson(transformTableDataToSidecarJson(), data);
    }
}

function uploadByDataTableInit() {
    uploadByDataTableTable = new RcvisDataTable(wrapperDivId);
    uploadByDataTableTable.table.on("cellEdited", c => {
        disableDataOptionsAndSubmitButton();
        c.validate();
    });
}

function standardizeFormatAjax(formData: FormData) {
    fetch('/convertToUTFormat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData
    }).then(response => {
        const form = document.getElementById('form');
        const dataPromise = response.json();
        if (response.status !== 200) {
            hideManualEntryShowError();
            return;
        }
        if (uploadDataTable) {
            dataPromise.then(data => {
                uploadDataTable.table.replaceData(
                    transformJsonToTableData(data));
            })
        } else {
            dataPromise.then(data => {
                uploadDataTable = new CandidateDatatable(uploadWrapperDivId,
                    Object.keys(data.results[0].tally), true);
                (window as any).uploadDataTable = uploadDataTable;
                uploadDataTable.table.on("cellEdited", function (c: CellComponent) {
                    disableDataOptionsAndSubmitButton();
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
                    setTimeout(() => {
                        c.getRow().reformat();
                    }, 150);
                });
                uploadDataTable.table.on("dataProcessed", function () {
                    console.log("dataProcessed")
                    uploadDataTable.table.validate();
                    // uploadDataTable.table.redraw(true);
                    hideManualOptionsShowTable();
                });
                uploadDataTable.table.on("tableBuilt", function () {
                    uploadDataTable.table.rowManager.adjustTableSize();
                    uploadDataTable.table.redraw(true);
                });
            })
        }
        form.addEventListener('formdata', formListener);

    })
}

function attachSidecarJson(jsonData: any, formData: FormData) {
    const jsonString = JSON.stringify(jsonData);
    const blob = new Blob([jsonString], {type: "application/json"});
    const file = new File([blob], "sidecar.json", {type: "application/json"});

    formData.set("candidateSidecarFile", file);
}

function transformJsonToTableData(json: any) {
    const data = [];
    const candidates = Object.keys(json.results[0].tally);

    interface CandidateData {
        id: number;

        [key: string]: any;
    }

    for (let i = 0; i < candidates.length; i++) {
        const candidate: CandidateData = {
            id: i + 1, candidate: new Candidate(candidates[i])
        };
        let status = "Active";

        interface TallyResults {
            [key: string]: any;

            elected: string;
            eliminated: string;

        }

        interface RoundResults {
            round: number;

            [key: string]: any;

            tallyResults: TallyResults[]
        }

        for (let j = 0; j < json.results.length; j++) {
            const roundResults: RoundResults = json.results[j];
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

interface Info {
    [key: string]: any;
}

function transformTableDataToSidecarJson() {
    const info: Info = {};
    const order: string[] = [];
    const sidecar = {version: "1.0", order: order, info: info};
    uploadDataTable.table.getData().map((row: any) => {
        info[row.candidate.candidateName] = {
            incumbent: row.candidate.incumbent,
            photo_url: row.candidate.photo_url,
            moreinfo_url: row.candidate.moreinfo_url,
            party: row.candidate.party,
        };
        sidecar.order.push(row.candidate.candidateName);
    });
    return sidecar;
}

export function sidecarFileSelected(files: any) {
    document.getElementById("select-sidecar-file-button").textContent = files[0].name;
    showManualOptionsHideTable();
    manualSidecarSelectedLast = false;
}

export function showDataTable(doShow: boolean) {
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
