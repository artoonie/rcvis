import MicroModal from 'micromodal';
import {CellComponent, ColumnComponent, RowComponent} from "tabulator-tables";

export default class Candidate {
    _candidateName: string;
    _incumbent: boolean;
    _photo_url: string;
    _moreinfo_url: string;
    _party: string;
    _isDefault: boolean;
    _index: number;

    constructor(candidateName: string, incumbent = false, photo_url = "",
                moreinfo_url = "", party = "", index = 0) {
        this._candidateName = candidateName;
        this._incumbent = incumbent;
        this._photo_url = photo_url;
        this._moreinfo_url = moreinfo_url;
        this._party = party;
        const regex = /Candidate \d+/;
        this._isDefault = candidateName.match(regex) !== null && !incumbent
            && !photo_url && !moreinfo_url && !party;
        this._index = index;
    }

    get candidateName() {
        return this._candidateName;
    }

    set candidateName(value) {
        if (value !== this._candidateName) {
            this._isDefault = false;
        }
        this._candidateName = value;
    }

    get incumbent() {
        return this._incumbent;
    }

    set incumbent(value) {
        if (value !== this._incumbent) {
            this._isDefault = false;
        }
        this._incumbent = value;
    }

    get photo_url() {
        return this._photo_url;
    }

    set photo_url(value) {
        if (value !== this._photo_url) {
            this._isDefault = false;
        }
        this._photo_url = value;
    }

    get moreinfo_url() {
        return this._moreinfo_url;
    }

    set moreinfo_url(value) {
        if (value !== this._moreinfo_url) {
            this._isDefault = false;
        }
        this._moreinfo_url = value;
    }

    get party() {
        return this._party;
    }

    set party(value) {
        if (value !== this._party) {
            this._isDefault = false;
        }
        this._party = value;
    }

    get default() {
        return this._isDefault;
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
    }

    clone() {
        return new Candidate(
            this._candidateName,
            this._incumbent,
            this._photo_url,
            this._moreinfo_url,
            this._party
        );
    }

    static customCandidateSorter(aCandidate: Candidate, bCandidate: Candidate, aRow: RowComponent, bRow: RowComponent,
                                 column: ColumnComponent, dir: string, params: any) {

        const a = aCandidate.candidateName;
        const b = bCandidate.candidateName;
        const alignEmptyValues = params.alignEmptyValues;
        let emptyAlign = 0;
        let locale;

        //handle empty values
        if (!a) {
            emptyAlign = !b ? 0 : -1;
        } else if (!b) {
            emptyAlign = 1;
        } else {
            //compare valid values
            switch (typeof params.locale) {
                case "string":
                    locale = params.locale;
                    break;
            }

            return String(a).toLowerCase().localeCompare(
                String(b).toLowerCase(), locale);
        }

        //fix empty values in position
        if ((alignEmptyValues === "top" && dir === "desc") || (alignEmptyValues
            === "bottom" && dir === "asc")) {
            emptyAlign *= -1;
        }

        return emptyAlign;
    }

    static customCandidateFormatter(cell: CellComponent, formatterParams: any, onRendered: Function) {
        const candidate = cell.getData().candidate;
        const editor = document.createElement("div");
        const elem = Candidate.createInputElement(editor, null,
            candidate.candidateName, true);
        const regex = /Candidate \d+/;
        const match = candidate.candidateName.match(regex);
        if (!cell.isEdited() && match && match.length > 0) {
            elem.classList.add("candidate-name-default");
        }
        onRendered(function () {
            cell.getRow().normalizeHeight();
            cell.getTable().rowManager.adjustTableSize();
        });
        return editor;
    }

    static customCandidateEditor(cell: CellComponent, onRendered: Function, success: Function, cancel: Function,
                                 editorParams: any) {
        const candidate = cell.getData().candidate || cell.getData();
        const editor = document.createElement("div");
        editor.id = Candidate.randstr("candidate-editor-");
        editor.tabIndex = 1;

        const regex = /Candidate [\d]+/;
        const match = candidate.candidateName.match(regex);
        const placeholder = !cell.isEdited() && match && match.length > 0;
        const candidateName = Candidate.createInputElement(editor,
            null, candidate.candidateName, editorParams.sidecarOnly,
            placeholder);
        const moreInfoButton = Candidate.getMoreInfoButton(editor, candidate,
            cell, candidateName, success, cancel,
            onRendered, editorParams);
        editor.appendChild(document.createElement("br"));
        editor.appendChild(moreInfoButton);

        setTimeout(() => {
            // Once it's loaded, focus on the input
            // TODO -- waiting 50ms is hacky.
            candidateName.focus();
        }, 50);
        return editor;
    };

    static getMoreInfoButton(editor: HTMLElement, candidate: Candidate, cell: CellComponent, candidateName: HTMLElement,
                             success: Function,
                             cancel: Function, onRendered: Function, editorParams: any, showModalNow = false) {
        const moreInfoButton = document.createElement("button");
        const successFunc = Candidate.createModal(editor,
            candidate, cell, candidateName, success, cancel, onRendered);

        moreInfoButton.classList.add("btn", "btn-link", "manage-candidate");
        moreInfoButton.dataset.candidateName = candidate.candidateName;
        moreInfoButton.textContent = "Enter Metadata";
        moreInfoButton.onclick = function (e) {
            e.preventDefault();
            MicroModal.show('datatable-modal', {
                onShow: (modal) => {
                    modal.addEventListener("keypress", (e: KeyboardEvent) => {
                        if (e.key === 'Enter') {
                            MicroModal.close('datatable-modal');
                        }
                    });
                },
                onClose: () => {
                    successFunc();
                }
            });
        };

        // Add an image to the moreInfoButton text content
        const popoutImg = document.createElement("img");
        popoutImg.src = "static/visualizer/icon_popout.png";
        popoutImg.width = 8;
        popoutImg.height = 8;
        popoutImg.style.marginLeft = "4px";
        popoutImg.style.marginRight = "4px";
        popoutImg.style.verticalAlign = "top";
        popoutImg.style.filter = "invert(100%)";
        moreInfoButton.appendChild(popoutImg);

        // editor.appendChild(document.createElement("br"));
        candidateName.tabIndex = -1;
        if (editorParams.sidecarOnly && candidateName instanceof HTMLInputElement) {
            candidateName.readOnly = true;
        }

        editor.onblur = successFunc;
        editor.onchange = successFunc;
        candidateName.onblur = successFunc;
        candidateName.onchange = successFunc;
        if (showModalNow) {
            MicroModal.show('datatable-modal', {
                onShow: (modal) => {
                    modal.addEventListener("keypress", (e: KeyboardEvent) => {
                        if (e.key === 'Enter') {
                            MicroModal.close('datatable-modal');
                        }
                    });
                },
                onClose: () => {
                    successFunc();
                }
            });
        }
        return moreInfoButton;
    }

    static createModal(editor: HTMLElement, candidate: Candidate, cell: CellComponent, candidateName: HTMLElement,
                       success: Function, cancel: Function,
                       onRendered: Function) {
        const modalWrapper = document.getElementById("datatable-modal-content");
        for (let i = 0; i < modalWrapper.children.length; i++) {
            modalWrapper.children[i].remove();
        }
        const modalTitleWrapper = document.getElementById(
            "datatable-modal-title");
        for (let i = 0; i < modalTitleWrapper.children.length; i++) {
            modalTitleWrapper.children[i].remove();
        }
        const candidateInfoId = Candidate.randstr("candidate-info-");
        const candidateTitleId = Candidate.randstr("candidate-title-");

        const candidateInfo = document.createElement("div");
        candidateInfo.id = candidateInfoId;
        candidateInfo.classList.add("candidate-info", "input-group", "mb-3");
        const candidateTitle = document.createElement("h3");
        candidateTitle.id = candidateTitleId;
        candidateTitle.textContent = candidate.candidateName;
        modalTitleWrapper.appendChild(candidateTitle);
        modalWrapper.appendChild(candidateInfo);
        const successFunc = Candidate.attachModalElements(candidateInfo,
            candidateTitle, candidate,
            cell, candidateName, success, cancel);
        const handleClickOutside = (e: MouseEvent) => {
            if (!editor.contains(e.target as Node) &&
                !document.getElementById("datatable-modal").contains(
                    e.target as Node)) {
                successFunc();
            }
        };
        onRendered(function () {
            cell.getRow().normalizeHeight();
            cell.getTable().rowManager.adjustTableSize();
            MicroModal.init();
        });
        editor.onfocus = () => {
            document.addEventListener("click", handleClickOutside);
        };
        return successFunc;
    }

    static createInputElement(editor: HTMLElement, labelText: string, value: any, readOnly = false,
                              placeholder = false) {
        const elem = readOnly ?
            document.createElement("span")
            : document.createElement("input");
        elem.id = Candidate.randstr("candidate-input-");
        elem.classList.add("candidate-input");
        return Candidate.createElement(editor, elem, labelText, value,
            placeholder);
    }

    static createElement(editor: HTMLElement, elem: HTMLElement, labelText: string, value: any, placeholder = false) {
        const span = document.createElement("span");
        span.className = "candidate-input-wrapper";
        if (labelText) {
            const label: HTMLLabelElement = <HTMLLabelElement>document.createElement("LABEL");
            label.className = "upload-candidate-label";
            label.htmlFor = elem.id;
            label.textContent = labelText;
            label.style.marginRight = "5px";
            span.appendChild(label);
        }
        span.appendChild(elem);
        if (elem instanceof HTMLInputElement) {
            if (!placeholder) {
                if (value) {
                    elem.value = value;
                    elem.textContent = value;
                }
            } else {
                elem.placeholder = value;
            }
            if (elem.type === "checkbox" && elem instanceof HTMLSelectElement) {
                elem.classList.add("form-check-input");
                elem.checked = value;
            } else {
                elem.classList.add("form-control");
            }
        } else {
            elem.textContent = value;
        }
        editor.appendChild(span);
        return elem;
    }

    static attachModalElements(candidateInfo: HTMLElement, candidateTitle:
                               HTMLElement, candidate: Candidate, cell: CellComponent,
                               candidateName: HTMLElement, success: Function, cancel: Function) {
        const continueButton = document.getElementById(
            "datatable-modal-submit");
        const elem = document.createElement("input");
        elem.type = "checkbox";
        elem.classList.add("candidate-input");
        const incumbent = Candidate.createElement(candidateInfo, elem,
            "Incumbent:",
            candidate.incumbent);
        const photoUrl = Candidate.createInputElement(candidateInfo,
            "Photo URL:",
            candidate.photo_url);
        const moreInfoUrl = Candidate.createInputElement(candidateInfo,
            "More Info URL:",
            candidate.moreinfo_url);
        const party = Candidate.createInputElement(candidateInfo, "Party:",
            candidate.party);

        //when the value has been set, trigger the cell to update
        function successFunc() {
            const originalCandidate = cell.getData().candidate
                || cell.getValue();
            const candidateClone = Candidate.fromJSON(originalCandidate);
            candidateClone.candidateName = ((candidateName instanceof HTMLInputElement && candidateName.value)
                    || candidateName.textContent.trim())
                || originalCandidate.candidateName;
            candidateClone.incumbent = ((incumbent instanceof HTMLInputElement)
                && incumbent.checked) || originalCandidate.incumbent;
            candidateClone.photo_url = (photoUrl instanceof HTMLInputElement && photoUrl.value)
                || originalCandidate.photo_url;
            candidateClone.moreinfo_url = (moreInfoUrl instanceof HTMLInputElement && moreInfoUrl.value)
                || candidate.moreinfo_url;
            candidateClone.party = (party instanceof HTMLInputElement && party.value) || originalCandidate.party;
            const candidateInfoElem =  candidateInfo.id ? document.getElementById(candidateInfo.id) : null;
            if (candidateInfoElem) {
                candidateInfoElem.remove();
            }
            const candidateTitleElem = candidateTitle.id ? document.getElementById(candidateTitle.id) : null;
            if (candidateTitleElem) {
                candidateTitleElem.remove();
            }
            if (candidateClone.default) {
                cancel();
                return;
            }
            if (cell.getData().candidate) {
                cell.getRow().update(candidateClone);
            } else {
                interface NameToCandidate {
                    [key: string]: Candidate;
                }

                const obj: NameToCandidate = {};
                obj[cell.getField()] = candidateClone;
                cell.getRow().update(obj);
            }
            success(candidateClone);
        }

        continueButton.onclick = () => {
            const modalWrapper = document.getElementById(
                "datatable-modal-content");
            const modalTitle = document.getElementById("datatable-modal-title");
            while (modalWrapper.firstChild) {
                modalWrapper.removeChild(modalWrapper.firstChild);
            }
            while (modalTitle.firstChild) {
                modalTitle.removeChild(modalTitle.firstChild);
            }
            MicroModal.close('datatable-modal');
        };
        return successFunc;
    }

    static randstr(prefix: string) {
        return Math.random().toString(36).replace('0.', prefix || '');
    }

    static fromJSON(json: any) {
        return new Candidate(json.candidateName,
            json.incumbent, json.photo_url, json.moreinfo_url, json.party, json.index);
    }

}
