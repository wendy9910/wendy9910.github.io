function charToHTML(c, i){
  return `<span class="title" style="animation-delay: ${i*0.1}s">${c}</span>`;
}

var title = document.getElementById("title");
var charArray = title.innerHTML.split("")

title.innerHTML=charArray.map(charToHTML).join("")