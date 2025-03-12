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
    const visTypeTextAndValue = [
        ["Barchart (Interactive)", "bar"],
        ["Barchart (Static)", "bar-static"],
        ["Sankey", "sankey"],
        ["Single Table Summary", "table"],
        ["Table, By Round (Interactive)", "table-by-round"],
        ["Table, By Round (Static)", "table-by-round-static"],
        ["Table, By Candidate", "table-by-candidate"],
        ["Pie Chart", "pie-chart"]
    ];

    for (const selector of ["exportVistypeSelector", "embedlyVistypeSelector"])
    {
      for (const visType of visTypeTextAndValue)
      {
        const option = document.createElement("option");
        option.innerHTML = visType[0];
        option.value = visType[1];
        document.getElementById(selector).appendChild(option);
      }

      // Trigger the onchange to fill out the contents
      document.getElementById(selector).onchange();
    }
}

function switchVisTypeHTML(iframeUrl, value)
{
    document.getElementById("htmlembedexport").value = makeEmbeddedIframeTag(iframeUrl + "/" + value);
}

function switchVisTypeEmbedly(iframeUrl, value)
{
    const text = `${iframeUrl}/${value}`
    document.getElementById("embedlyexport").value = text;
}

initializeOptions();

$('.codeExport').on('click', copyToClipboard);
$('.codeExport').tooltip('show')
                .attr('data-original-title', 'Click to Copy')
                .on('hidden.bs.tooltip', function () {
                    // Restore text after tooltip "Copy" is hidden
                    $(this).attr('data-original-title', 'Click to Copy')
                });
