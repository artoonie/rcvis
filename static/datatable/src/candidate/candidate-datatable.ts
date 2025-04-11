import DataTable from '../datatable';
import {CellComponent, ColumnDefinition, EditorParams, TabulatorFull as Tabulator} from 'tabulator-tables';
import Candidate from "../model/candidate";

export default class CandidateDatatable extends DataTable {

    initTable() {
        console.log("Initializing table");
    }

    static candidateTableEditor(cell: CellComponent, onRendered: Function, success: Function, cancel: Function,
                                editorParams: any) {
        const editor = document.createElement("div");
        const {element, nameDiv} = CandidateDatatable.getCustomFormatElement(
            cell, editorParams, onRendered);
        editor.appendChild(element);
        onRendered(function () {
            if (cell.getValue()) {
                Candidate.getMoreInfoButton(editor,
                    cell.getValue(), cell, nameDiv, success, cancel, onRendered,
                    editorParams, true);
            }
        });
        return editor;
    }

    createDataTable(id: string, data: any = null) {
        interface RowData {
            [index: string]: Candidate;
        }

        const candidateData: RowData[] = [];

        data.forEach(((c: string, idx: number) => {
            const candidate = new Candidate(c);
            const slot = idx % 3;
            candidate.index = idx + 1;
            if (slot === 0) {
                candidateData.push(
                    {candidate1: candidate, candidate2: null, candidate3: null});
            } else {
                candidateData[candidateData.length - 1][`candidate${slot + 1}`] = candidate;
            }
        }));
        const columnDef: ColumnDefinition = {
            title: "Candidate",
            headerSort: false,
            editable: true
        };

        function getColumnDefinition(field: string) {
            const clone = structuredClone(columnDef);
            clone.editor = CandidateDatatable.candidateTableEditor;
            clone.formatter = CandidateDatatable.getFormatter;
            clone.field = field;
            return clone;
        }

        return new Tabulator("#" + id, {
            data: candidateData,
            headerVisible: false,
            layout: "fitColumns",
            debugInvalidOptions: false,
            layoutColumnsOnNewData: true,
            columns: [getColumnDefinition("candidate1"),
                getColumnDefinition("candidate2"),
                getColumnDefinition("candidate3")],
        });
    }

    static getFormatter(c: CellComponent, p: EditorParams, r: Function) {
        return CandidateDatatable.getCustomFormatElement(c, p, r).element;
    }

    static getCustomFormatElement(cell: CellComponent, editorParams: EditorParams, onRendered: Function) {
        const element = document.createElement("div"),
            cellElement = cell.getElement(),
            data = cell.getValue();
        element.classList.add("container");
        element.style.height = "100%";
        //clear current row data
        while (cellElement.firstChild) {
            cellElement.removeChild(cellElement.firstChild);
        }

        const rowTable = document.createElement("div");
        rowTable.classList.add("row");
        rowTable.style.height = "inherit";

        const content = document.createElement("div");
        content.classList.add("col-sm");
        const img = document.createElement("img");
        img.classList.add("candidate-img-thumbnail");
        content.style.marginLeft = "15px";
        content.style.alignContent = "center";
        content.style.textAlign = "center";
        //add image on left of row
        if (data && data.photo_url) {
            img.src = data.photo_url;
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";
            content.appendChild(img);
        } else {
            content.innerHTML = "<span class='add-candidate-image'>Add Candidate Image</span>";
        }

        content.style.border = "1px solid #ddd";

        //add row data on right hand side
        const mainTd = document.createElement("div");
        mainTd.classList.add("col-sm");
        const nameDiv = document.createElement("div");
        nameDiv.innerHTML = `<strong style="white-space: normal; 
          overflow-wrap: break-word; color: cadetblue">
          ${(data && data.candidateName) ? data.candidateName : ""}</strong>`;
        nameDiv.classList.add("row");

        const incumbentDiv = document.createElement("div");
        incumbentDiv.classList.add("row");
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
        moreInfoDiv.classList.add("row");
        if (data) {
            const badgeLink = document.createElement("a");
            badgeLink.onclick = e => {
                e.stopPropagation();
            };
            badgeLink.href = data.moreinfo_url;
            badgeLink.classList.add('badge',
                `${data.moreinfo_url ? 'badge-primary' : 'link-disabled'}`);
            badgeLink.innerText = "More Info";
            const strongContainer = document.createElement("strong");
            strongContainer.appendChild(badgeLink);
            moreInfoDiv.appendChild(strongContainer);
        }
        const partyDiv = document.createElement("div");
        partyDiv.classList.add("row");
        partyDiv.style.whiteSpace = "normal";
        partyDiv.style.overflowWrap = "break-word";
        partyDiv.innerHTML = "<strong>Party:</strong>" + (data && data.party
            ? " " + data.party : CandidateDatatable.getUnderlinedSpace());
        mainTd.appendChild(nameDiv);
        mainTd.appendChild(document.createElement("br"));
        mainTd.appendChild(incumbentDiv);
        mainTd.appendChild(moreInfoDiv);
        mainTd.appendChild(partyDiv);

        rowTable.appendChild(content);
        rowTable.appendChild(mainTd);

        if (!data) {
            element.style.visibility = "hidden";
        }

        //append newly formatted contents to the row
        element.append(rowTable);

        onRendered(function () {
            setTimeout(() => {
                cell.getRow().normalizeHeight();
                cell.getTable().rowManager.adjustTableSize();
            }, 100);
        });

        return {element, nameDiv};
    };

    static getUnderlinedSpace() {
        // return "<span style=\"text-decoration: underline; white-space: pre;\">     </span>"
        return "";
    }
}
