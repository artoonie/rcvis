var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      this.innerText = this.innerText.replace('▼', '▶');
      content.style.maxHeight = null;
    } else {
      this.innerText = this.innerText.replace('▶', '▼');
      content.style.maxHeight = content.scrollHeight + "px";
    } 

    // Update fullpage.js
    fullpage_api.reBuild();
  });
}
