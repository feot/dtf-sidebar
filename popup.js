'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.querySelector('.main > .layout__column--sticky').style.display='" + e.target.id + "'"});
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});