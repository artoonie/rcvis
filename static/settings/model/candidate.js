class Candidate {
  constructor(candidateName, incumbent = false, photo_url = "",
      moreinfo_url = "", party = "",
      isDefault = true) {
    this._candidateName = candidateName;
    this._incumbent = incumbent;
    this._photo_url = photo_url;
    this._moreinfo_url = moreinfo_url;
    this._party = party;
    this._isDefault = isDefault;
  }

  get candidateName() {
    return this._candidateName;
  }

  set candidateName(value) {
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

  get isDefault() {
    return this._isDefault;
  }

  clone() {
    return new Candidate(
        this._candidateName,
        this._incumbent,
        this._photo_url,
        this._moreinfo_url,
        this._party,
        this._isDefault
    );
  }

  toJSON() {
    return {
      candidateName: this._candidateName,
      incumbent: this._incumbent,
      photo_url: this._photo_url,
      moreinfo_url: this._moreinfo_url,
      party: this._party,
    };
  }

  static fromJSON(data) {
    return new Candidate(
        data.candidateName,
        data.incumbent,
        data.photo_url,
        data.moreinfo_url,
        data.party
    );
  }

  static customCandidateFormatter(cell, formatterParams, onRendered) {
    const candidate = cell.getData().candidate;
    const editor = document.createElement("div");
    if (Candidate.isAdvancedSelected()) {
      Candidate.createSpanElement(editor, "Candidate Name:",
          candidate.candidateName);
      const incumbent = document.createElement("checkbox")
      incumbent.selected = candidate.incumbent;
      incumbent.onclick = function() {
        return false;
      }
      Candidate.createElement(editor, incumbent, "Incumbent:",
          candidate.incumbent);
      Candidate.createSpanElement(editor, "Photo URL:", candidate.photo_url);
      Candidate.createSpanElement(editor, "More Info URL:",
          candidate.moreinfo_url);
      Candidate.createSpanElement(editor, "Party:", candidate.party);
    } else {
      Candidate.createSpanElement(editor, "", candidate.candidateName);
    }
    onRendered(function() {
      cell.getRow().normalizeHeight();
      cell.getTable().rowManager.adjustTableSize();
    })
    return editor;
  }

  static createSpanElement(editor, labelText, value) {
    const elem = document.createElement("span");
    elem.id = Candidate.randstr("candidate-span-")
    elem.textContent = value;
    return Candidate.createElement(editor, elem, labelText, value)
  }

  static createInputElement(editor, labelText, value) {
    const elem = document.createElement("input");
    elem.id = Candidate.randstr("candidate-input-")
    return Candidate.createElement(editor, elem, labelText, value)
  }

  static createElement(editor, elem, labelText, value) {
    const label = document.createElement("LABEL");
    label.className = "upload-candidate-label";
    label.htmlFor = elem.id;
    label.textContent = labelText;
    label.style.marginRight = "5px";
    label.appendChild(document.createElement("br"))
    label.appendChild(elem);

    editor.appendChild(label);
    // editor.appendChild(elem);
    editor.appendChild(document.createElement("br"));
    elem.value = value;
    return elem;
  }

  static customCandidateEditor(cell, onRendered, success, cancel,
      editorParams) {
    const candidate = cell.getData().candidate;
    const editor = document.createElement("div");
    const candidateInfo = document.createElement("div");
    const candidateName = Candidate.createInputElement(editor,
        "Candidate Name:", candidate.candidateName);
    const elem = document.createElement("input");
    elem.type = "checkbox";
    const incumbent = Candidate.createElement(candidateInfo, elem, "Incumbent:",
        candidate.incumbent);
    const photoUrl = Candidate.createInputElement(candidateInfo, "Photo URL:",
        candidate.photo_url);
    const moreInfoUrl = Candidate.createInputElement(candidateInfo,
        "More Info URL:",
        candidate.moreinfo_url);
    const party = Candidate.createInputElement(candidateInfo, "Party:",
        candidate.party);
    editor.appendChild(candidateInfo);
    candidateInfo.hidden = !Candidate.isAdvancedSelected();

    onRendered(function() {
      cell.getRow().normalizeHeight();
      cell.getTable().rowManager.adjustTableSize();
      editor.style.css = "100%";
    });

    //when the value has been set, trigger the cell to update
    function successFunc() {
      const candidateClone = cell.getData().candidate.clone();
      candidateClone.candidateName = candidateName.value
          || candidate.candidateName;
      if (Candidate.isAdvancedSelected()) {
        candidateClone.incumbent = (!incumbent || incumbent.selected
            === undefined)
            ? candidate.incumbent : incumbent.selected;
        candidateClone.photo_url = photoUrl.value || candidate.photo_url;
        candidateClone.moreinfo_url = moreInfoUrl.value
            || candidate.moreinfo_url;
        candidateClone.party = party.value || candidate.party;
      }

      // const data = structuredClone(cell.getData());
      // data.candidate = candidateClone;
      // cell.getTable().updateData([{id: data.id, candidate: candidateClone}])
      success(candidateClone);
    }

    editor.addEventListener("change", successFunc);
    editor.addEventListener("blur", successFunc);

    //return the editor element
    return editor;
  };

  static isAdvancedSelected() {
    return document.getElementById("upload-show-advanced-options").checked;
  }
  static  randstr(prefix) {
    return Math.random().toString(36).replace('0.',prefix || '');
  }

}