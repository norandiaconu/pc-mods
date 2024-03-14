// ==UserScript==
// @name         Kotaku
// @version      1.0.1
// @description  Clean page
// @author       Noran Diaconu
// @match        https://kotaku.com/*
// @icon         https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/v4sckews2f3bzf0ztbkf.png
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('video-html5-playlist')[0].remove();
})();

// ==UserScript==
// @name         PCGamer / Tom's Hardware
// @version      1.0.1
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.pcgamer.com/*
// @match        https://www.tomshardware.com/news*
// @icon         https://vanilla.futurecdn.net/pcgamer/677373/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('slice-container-affiliateDisclaimerBar').remove();
    document.getElementById('newsletter').remove();
    document.getElementById('document-footer').remove();
})();

// ==UserScript==
// @name         Polygon
// @version      1.0.1
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.polygon.com/*
// @icon         https://cdn.vox-cdn.com/community_logos/51927/38.png
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
        document.getElementsByClassName('m-ad')[0].remove();
    }, 900);
})();
