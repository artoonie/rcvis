const visTypeTextToGetArg = {
    "Barchart (Interactive)": "barchart-interactive",
    "Barchart (Static)": "barchart-fixed",
    "Sankey": "sankey",
    "Single Table Summary": "tabular-candidate-by-round",
    "Table: By Round (Interactive)": "tabular-by-round-interactive",
    "Table: By Round (Static)": "tabular-by-round",
    "Table: By Candidate": "tabular-by-candidate"
};
function copyToClipboard() {
    let textField = $(this)[0]
    textField.select();
    textField.setSelectionRange(0, 99999); /*For mobile devices*/
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
    
    $(this).tooltip({animation: true})
           .attr('data-original-title', 'Copied!')
           .tooltip('show');
}

function initializeOptions()
{
    for (const visTypeText in visTypeTextToGetArg)
    {
      const option = document.createElement("option");
      option.innerHTML = visTypeText;
      document.getElementById("exportVistypeSelector").appendChild(option);
    }
}

function switchVisType(initialExportCode, label)
{
    const getArg = visTypeTextToGetArg[label];
    const newText = initialExportCode.replace("?vistype=barchart-interactive", "?vistype=" + getArg);
    document.getElementById("htmlembedexport").value = newText;
}

initializeOptions();
$('.codeExport').on('click', copyToClipboard);
$('.codeExport').tooltip('show')
                .attr('data-original-title', 'Click to Copy')
                .on('hidden.bs.tooltip', function () {
                    // Restore text after tooltip "Copy" is hidden
                    $(this).attr('data-original-title', 'Click to Copy')
                });
