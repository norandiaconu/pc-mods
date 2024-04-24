# userscripts

### Usage
Tampermonkey -> Utilities -> Import from file -> Choose File -> import.txt

### Sample
(function() {  
&nbsp;&nbsp;'use strict';  
&nbsp;&nbsp;setTimeout(function() {  
&nbsp;&nbsp;&nbsp;&nbsp;document.getElementsByClassName('class-name')[0].remove();  
&nbsp;&nbsp;}, 900);  
&nbsp;&nbsp;setInterval(function() {  
&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('id-name').remove();  
&nbsp;&nbsp;}, 900);  
})();
