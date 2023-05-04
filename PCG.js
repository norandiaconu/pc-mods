// ==UserScript==
// @name         PCG
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.pcgamer.com/*
// @icon         https://vanilla.futurecdn.net/pcgamer/677373/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    $('.van_vid_carousel__container').remove();
})();
