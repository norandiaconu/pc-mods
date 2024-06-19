// ==UserScript==
// @name         Stack Overflow
// @version      1.0.2
// @description  Clean page
// @author       Noran Diaconu
// @match        https://stackoverflow.com/questions/*
// @icon         https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('left-sidebar').remove();
    var content = document.getElementById('content').style;
    content.margin = '0';
    content.border = '0';
    document.getElementById('signup-dialog-container').remove();
})();