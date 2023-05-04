# userscripts

### Sample
(function() {  
&nbsp;&nbsp;'use strict';  
&nbsp;&nbsp;var $ = window.jQuery;  
&nbsp;&nbsp;setTimeout(function() {  
&nbsp;&nbsp;&nbsp;&nbsp;$('.class-name').remove();  
&nbsp;&nbsp;}, 900);  
&nbsp;&nbsp;setInterval(function() {  
&nbsp;&nbsp;&nbsp;&nbsp;$('#id-name').remove();  
&nbsp;&nbsp;}, 900);  
})();
