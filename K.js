// ==UserScript==
// @name         K
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://kotaku.com/*
// @icon         https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/v4sckews2f3bzf0ztbkf.png
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    $('.video-html5-playlist').remove();
})();
