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
  document.getElementById("selectResultsFileButton").innerHTML = files[0].name
  enableDataOptionsAndSubmitButton();
}

function sidecarFileSelected(files)
{
  document.getElementById("selectSidecarFileButton").innerHTML = files[0].name
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
