'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
    {code:`for (let j = 0; j < 2; j++) {document.querySelectorAll('.main > .layout__sticky')[j].style.display='${e.target.id}'};`}
  );
}

document.addEventListener('DOMContentLoaded', function () {
  let divs = document.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});