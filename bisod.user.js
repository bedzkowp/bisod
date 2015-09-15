// ==UserScript==
// @name        wydzial
// @namespace   iSod
// @include     *://isod.ee.pw.edu.pl/*
// @version     1
// @grant       none
// ==/UserScript==

function main()
{
  var newSpan = document.createElement("span");
  var newCont = document.createTextNode( atob("V3lkemlhbCBHaWVyIGkgWmFiYXc=") );
  newSpan.appendChild(newCont);
  
  var node = document.getElementById("ee");
  node.removeChild(node.firstChild);
  
  node.appendChild(newSpan);
  
}

main();