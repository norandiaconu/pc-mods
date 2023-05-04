// ==UserScript==
// @name         SO
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://stackoverflow.com/questions/*
// @icon         https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    $('#left-sidebar').remove();
    $('#content').css({'margin-left': '0', 'border-left': '0'});
})();
