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

$('.codeExport').on('click', copyToClipboard);
$('.codeExport').tooltip('show')
                .attr('data-original-title', 'Click to Copy')
                .on('hidden.bs.tooltip', function () {
                    // Restore text after tooltip "Copy" is hidden
                    $(this).attr('data-original-title', 'Click to Copy')
                });
