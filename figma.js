// ==UserScript==
// @name         Figma
// @version      1.0.0
// @description  Clean page
// @author       Noran Diaconu
// @match        https://www.figma.com/file/*
// @icon         https://static.figma.com/app/icon/1/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('body').addEventListener('keydown', (e) => {
        if (['Enter', '*'].includes(e.key)) {
            var event;
            if (e.key === 'Enter') {
                event = new KeyboardEvent('keydown', {
                    key: 'Backslash',
                    keyCode: 220,
                    shiftKey: false,
                    ctrlKey: true
                });
            }
            if (e.key === '*') {
                event = new KeyboardEvent('keydown', {
                    key: 'Backslash',
                    keyCode: 220,
                    shiftKey: true,
                    ctrlKey: true
                });
            }
            if (document.activeElement) {
                document.activeElement.dispatchEvent(event);
            }
        }
    });
})();
