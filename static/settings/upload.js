const uploadWrapperDivId = "dataTableWrapperUpload";
function enableDataOptionsAndSubmitButton()
{
  document.getElementById("options").style.opacity = '100%'
  document.getElementById("uploadButton").disabled = false;
}

function disableDataOptionsAndSubmitButton()
{
  document.getElementById("options").style.opacity = '10%'
  document.getElementById("uploadButton").disabled = true;
}

function summaryFileSelected(files)
{
  $("#selectResultsFileButton").text(files[0].name)
  $("#manuallyEditUpload").removeAttr("hidden");
  enableDataOptionsAndSubmitButton();
}

function manuallyEditUpload(e)
{
  e.preventDefault();
  document.getElementById('form')
  const formData = new FormData(form);
  const file = formData.getAll("jsonFile")[0];
  console.log("Got files: ", file.name);
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      // Process fileContent (e.g., display it, parse it, etc.)
      console.log(fileContent)
      createDataTable(uploadWrapperDivId,
          transformJson(JSON.parse(fileContent)), false);
    };
    reader.readAsText(file);
  }
}

function transformJson(json) {
  const data = []
  for (let i = 0; i < json.candidates.length; i++) {
    const candidate = {id: i+1, candidate:
          new Candidate(json.candidates[i])};
    let status = "Active"
    for (let j = 0; j < json.rounds.length; j++) {
      const roundNr = j + 1
      candidate["votes-" + roundNr] = json.rounds[j].count[i];
      const won = json.rounds[j].winners.map(n => json.candidates[n]).includes(candidate.candidate.candidateName)
      const lost = json.rounds[j].losers.map(n => json.candidates[n]).includes(candidate.candidate.candidateName)
      if(won) {
        status = "Elected";
      } else if(lost) {
        status = "Eliminated"
      }
      candidate["status-" + roundNr] = status;
    }
    data.push(candidate);
  }
  return data;
}

function sidecarFileSelected(files)
{
  $("#selectSidecarFileButton").text(files[0].name)
}

function showDataTable(doShow)
{
  document.getElementById("file-upload-box").style.display = doShow ? "none" : "block";
  document.getElementById("datatable-upload-box").style.display = doShow ? "block" : "none";
  if (doShow) {
    document.getElementById('form').action = 'uploadByDataTable.html';
  } else {
    document.getElementById('form').action = 'upload.html';
  }
}
