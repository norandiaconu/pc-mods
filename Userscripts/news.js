// ==UserScript==
// @name         Kotaku
// @version      1.0.1
// @description  Clean page
// @author       Noran Diaconu
// @match        https://kotaku.com/*
// @icon         https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/v4sckews2f3bzf0ztbkf.png
// ==/UserScript==

(function () {
    'use strict';
    document.getElementsByClassName('video-html5-playlist')[0].remove();
})();

// ==UserScript==
// @name         Polygon
// @version      1.0.2
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.polygon.com/*
// @icon         https://www.polygon.com/static-assets/icons/favicon-32x32.png
// ==/UserScript==

(function () {
    'use strict';
    document.getElementsByClassName('duet--app')[0].getElementsByTagName('div')[0].remove();
    document.getElementById('content').getElementsByTagName('div')[0].remove();
})();

// ==UserScript==
// @name         Eurogamer
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.eurogamer.net/*
// @icon         https://www.eurogamer.net/static/7f6a48e84e6940c9461dfe87782f0fbe/icon/favicon-48x48.png
// ==/UserScript==

(function () {
    'use strict';
    document.getElementsByClassName('poll_wrapper')[0].remove();
    document.getElementsByTagName('footer')[0].remove();
    document.getElementById('content_below').remove();
    document.getElementsByTagName('footer')[0].remove();
})();

// ==UserScript==
// @name         PCGamer / Tom's Hardware
// @version      1.0.3
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.pcgamer.com/*
// @match        https://www.tomshardware.com/*
// @icon         https://vanilla.futurecdn.net/pcgamer/677373/favicon.ico
// ==/UserScript==

(function () {
    'use strict';
    document.getElementById('affiliate-disclaimer').remove();
    document.getElementById('hero-title---h1-tag-').remove();
    document.getElementById('article--landing-page--body-copy').remove();
    document.getElementsByClassName('flexi-pagination')[0].style.fontSize = 'xx-large';
    document.getElementById('newsletter').remove();
    document.getElementById('document-footer').remove();
})();
