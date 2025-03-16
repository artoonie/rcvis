class Candidate {
  constructor(candidateName, incumbent = false, photo_url = "",
      moreinfo_url = "", party = "") {
    this._candidateName = candidateName;
    this._incumbent = incumbent;
    this._photo_url = photo_url;
    this._moreinfo_url = moreinfo_url;
    this._party = party;
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

  static customCandidateSorter(aCandidate, bCandidate, aRow, bRow, column, dir,
      params) {
    const a = aCandidate.candidateName;
    const b = bCandidate.candidateName;
    var alignEmptyValues = params.alignEmptyValues;
    var emptyAlign = 0;
    var locale;

    //handle empty values
    if (!a) {
      emptyAlign = !b ? 0 : -1;
    } else if (!b) {
      emptyAlign = 1;
    } else {
      //compare valid values
      switch (typeof params.locale) {
        case "boolean":
          if (params.locale) {
            locale = this.langLocale();
          }
          break;
        case "string":
          locale = params.locale;
          break;
      }

      return String(a).toLowerCase().localeCompare(String(b).toLowerCase(),
          locale);
    }

    //fix empty values in position
    if ((alignEmptyValues === "top" && dir === "desc") || (alignEmptyValues
        === "bottom" && dir === "asc")) {
      emptyAlign *= -1;
    }

    return emptyAlign;
  }

  static customCandidateFormatter(cell, formatterParams, onRendered) {
    const candidate = cell.getData().candidate;
    const editor = document.createElement("div");
    editor.classList.add("form-group")
    const elem = Candidate.createInputElement(editor, "", candidate.candidateName, true)
    // elem.textContent = candidate.candidateName;
    // elem.classList.add("candidate-name");
    const regex = /Candididate [\d]+/;
    if (!cell.isEdited() && cell.getValue().candidateName.match(regex)) {
      elem.classList.add("candidate-name-default");
    }
    onRendered(function() {
      cell.getRow().normalizeHeight();
      cell.getTable().rowManager.adjustTableSize();
    })
    editor.appendChild(elem);
    return editor;
  }

  static createInputElement(editor, labelText, value, readOnly = false) {
    const elem = readOnly ?
        document.createElement("span")
        : document.createElement("input");
    elem.id = Candidate.randstr("candidate-input-")
    return Candidate.createElement(editor, elem, labelText, value)
  }

  static createElement(editor, elem, labelText, value) {
    if(labelText) {
      const label = document.createElement("LABEL");
      label.className = "upload-candidate-label";
      label.htmlFor = elem.id;
      label.textContent = labelText;
      label.style.marginRight = "5px";
      label.appendChild(document.createElement("br"))
      label.appendChild(elem);

      editor.appendChild(label);
      editor.appendChild(document.createElement("br"));
    }
    elem.value = value;
    elem.textContent = value;
    return elem;
  }

  static customCandidateEditor(cell, onRendered, success, cancel,
      editorParams) {
    const candidate = cell.getData().candidate;
    const editor = document.createElement("div");
    editor.id = Candidate.randstr("candidate-editor-")
    editor.tabIndex = 1;

    const candidateName = Candidate.createInputElement(editor,
        "Candidate Name:", candidate.candidateName, editorParams.sidecarOnly);
    const regex = /Candididate [\d]+/;
    if (!cell.isEdited() && cell.getValue().candidateName.match(regex)) {
      candidateName.placeholder = candidate.candidateName;
    }
    const moreInfoButton = document.createElement("button");
    const modalWrapper = document.getElementById("datatable-modal-content");
    const modalTitleWrapper = document.getElementById("datatable-modal-title");
    const candidateInfoId = Candidate.randstr("candidate-info-")
    const candidateTitleId = Candidate.randstr("candidate-title-")

    const handleClickOutside = (e) => {
      if (!editor.contains(e.target) &&
          !document.getElementById("datatable-modal").contains(e.target)) {
        cancel();
      }
    };

    moreInfoButton.classList.add("btn", "btn-primary");
    moreInfoButton.dataset.candidateName = candidate.candidateName;
    moreInfoButton.textContent = "Manage Candidate"
    moreInfoButton.onclick = function(e) {
      e.preventDefault();
      MicroModal.show('datatable-modal', {
        awaitCloseAnimation: true,
        onShow: function(modal) {
          const candidateInfo = document.createElement("div");
          candidateInfo.id = candidateInfoId;
          candidateInfo.classList.add("candidate-info", "input-group", "mb-3");
          const candidateTitle = document.createElement("h3");
          candidateTitle.id = candidateTitleId;
          candidateTitle.textContent = candidate.candidateName;
          modalTitleWrapper.appendChild(candidateTitle)
          modalWrapper.appendChild(candidateInfo);
          Candidate.attachModalElements(candidateInfo, candidate, editor,
              cell, candidateName, success, handleClickOutside);
        },
        onClose: function(modal) {
          document.getElementById(candidateInfoId).remove();
          document.getElementById(candidateTitleId).remove();
        }
      })
    }

    editor.appendChild(moreInfoButton);
    candidateName.tabIndex = 1;
    if (editorParams.sidecarOnly) {
      candidateName.readOnly = true;
    }
    onRendered(function() {
      cell.getRow().normalizeHeight();
      cell.getTable().rowManager.adjustTableSize();
      editor.style.css = "100%";
      editor.focus()
      MicroModal.init();
    });

    const cancelFunc = () => {
      console.log("cancelled")
      cancel();
    }
    editor.onblur = cancelFunc;
    editor.onchange = cancelFunc;
    editor.onfocus = () => {
      console.log("focused")
      document.addEventListener("click", handleClickOutside);
    };
    return editor;
  };

  static attachModalElements(candidateInfo, candidate, editor, cell,
      candidateName, success, handleClickOutside) {
    const continueButton = document.getElementById("datatable-modal-submit");
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

    //when the value has been set, trigger the cell to update
    function successFunc() {
      console.log("successFunc")
      const candidateClone = cell.getData().candidate.clone();
      candidateClone.candidateName = candidateName.value
          || candidate.candidateName;
      candidateClone.incumbent = (!incumbent || incumbent.selected
          === undefined)
          ? candidate.incumbent : incumbent.selected;
      candidateClone.photo_url = photoUrl.value || candidate.photo_url;
      candidateClone.moreinfo_url = moreInfoUrl.value
          || candidate.moreinfo_url;
      candidateClone.party = party.value || candidate.party;
      document.removeEventListener("click", handleClickOutside);
      console.log(JSON.stringify(candidateClone));
      success(candidateClone);
    }
    continueButton.onclick = e => {
      successFunc();
      MicroModal.close('datatable-modal');
    };
  }

  static randstr(prefix) {
    return Math.random().toString(36).replace('0.', prefix || '');
  }

}