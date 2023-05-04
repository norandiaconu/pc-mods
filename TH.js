// ==UserScript==
// @name         TH
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.tomshardware.com/*
// @icon         https://vanilla.futurecdn.net/tomshardware/677373/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    $('.vertical-header').remove();
})();
