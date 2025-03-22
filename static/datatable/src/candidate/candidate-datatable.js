import DataTable from '../datatable.js';
import {TabulatorFull as Tabulator} from "tabulator-tables";
import Candidate from "../model/candidate";

export default class CandidateDatatable extends DataTable {

    initTable() {
        console.log("Initializing table")

    }

    static candidateTableEditor(cell, onRendered, success, cancel, editorParams) {
        const editor = document.createElement("div");
        const {element, nameDiv} = CandidateDatatable.getCustomFormatElement(
            cell, editorParams, onRendered);
        Candidate.getMoreInfoButton(editor,
            cell.getValue(), cell, nameDiv, success, cancel, onRendered,
            editorParams, true);
        editor.appendChild(element);
        onRendered(function() {
            cell.getRow().normalizeHeight();
        });
        return editor;
    }

    createDataTable(id, data = null) {
        let candidateData = [];

        data.forEach(((c, idx) => {
            const candidate = new Candidate(c);
            const slot = idx % 3;
            candidate.index = idx + 1;
            if (slot === 0) {
                candidateData.push(
                    {candidate1: candidate, candidate2: null, candidate3: null});
            } else {
                candidateData[candidateData.length - 1][`candidate${slot
                + 1}`] = candidate;
            }
        }));
        const columnDef = {
            title: "Candidate1",
            headerSort: false,
            field: "candidate1",
            resizableColumnFit: true,
            resizable: 'header',
            editor: CandidateDatatable.candidateTableEditor,
            formatter: (c, p, r) => CandidateDatatable.getCustomFormatElement(c,
                p, r).element,
            editable: true
        }
        const columnDef2 = {
            title: "Candidate",
            headerSort: false,
            // minWidth: 200,
            field: "candidate2",
            resizable: 'header',
            editor: CandidateDatatable.candidateTableEditor,
            formatter: (c, p, r) => CandidateDatatable.getCustomFormatElement(c, p, r).element,
            editable: true
        }
        const columnDef3 = {
            title: "Candidate",
            headerSort: false,
            field: "candidate3",
            resizable: 'header',
            editor: CandidateDatatable.candidateTableEditor,
            formatter: (c, p, r) => CandidateDatatable.getCustomFormatElement(c,
                p, r).element,
            editable: true
        }
        return new Tabulator("#" + id, {
            data: candidateData,
            headerVisible: false,
            layout: "fitColumns",
            debugInvalidOptions: false,
            layoutColumnsOnNewData: true,
            columns: [columnDef, columnDef2, columnDef3],
        });
    }

    static getCustomFormatElement(cell, formatterParams, onRendered) {
        let element = document.createElement("div"),
            cellElement = cell.getElement(),
            data = cell.getValue(),
            rowTable;
        //clear current row data
        while (cellElement.firstChild) {
            cellElement.removeChild(
                cellElement.firstChild);
        }

        rowTable = document.createElement("table")
        const rowTabletr = document.createElement("tr");

        const content = document.createElement("td");
        const img = document.createElement("img");
        content.style.width = "50%";
        content.style.height = "100%";
        //add image on left of row
        if (data && data.photo_url) {
            img.src = data.photo_url;
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";
            content.appendChild(img);
        } else {
            content.innerHTML = "Add Candidate Image";
        }

        content.style.border = "1px solid #ddd";

        //add row data on right hand side
        const mainTd = document.createElement("td");
        const nameDiv = document.createElement("div");
        nameDiv.innerHTML = `<strong>${(data && data.candidateName) ? data.candidateName : ""}</strong>`

        const incumbentDiv = document.createElement("div");
        const incumbentSpan = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = "Incumbent: ";
        incumbentSpan.appendChild(strong);
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = data && data.incumbent;
        incumbentSpan.appendChild(check);
        incumbentDiv.appendChild(incumbentSpan);

        const moreInfoDiv = document.createElement("div");
        if (data) {
            moreInfoDiv.innerHTML = `<strong><a class="badge ${data.moreinfo_url
                ? 'badge-primary' : 'link-disabled'}" 
             href=${data.moreinfo_url}>More Info</a></strong>`
        }
        const partyDiv = document.createElement("div");
        partyDiv.innerHTML = "<strong>Party:</strong> " + (data && data.party ? data.party : CandidateDatatable.getUnderlinedSpace());
        mainTd.appendChild(nameDiv);
        mainTd.appendChild(incumbentDiv);
        mainTd.appendChild(moreInfoDiv);
        mainTd.appendChild(partyDiv);

        rowTabletr.appendChild(content);
        rowTabletr.appendChild(mainTd);

        rowTable.appendChild(rowTabletr);

        onRendered(function() {
            cell.getRow().normalizeHeight();
            img.onload = function() {
                cell.getRow().normalizeHeight();
            }
        });

        if (!data) {
            element.style.visibility = "hidden";
        }

        //append newly formatted contents to the row
        element.append(rowTable);
        return {element, nameDiv};
    };

    static getUnderlinedSpace() {
        // return "<span style=\"text-decoration: underline; white-space: pre;\">     </span>"
        return "";
    }
}
