// ==UserScript==
// @name         P
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.polygon.com/*
// @icon         https://cdn.vox-cdn.com/community_logos/51927/38.png
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    setTimeout(function() {
        $('.m-ad').remove();
    }, 900);
})();
