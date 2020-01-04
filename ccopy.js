/*!
 * ccopy.js v1.0.0 (2019-12-20)
 *
 * @link https://plugin.caohongyuan.cn/copy
 * @auther https://caohongyuan.cn/
 */
(function (window, document) {
    "use strict";
    var copyContent = '';
    function template() {
    	var button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("onclick", "cCopy('ccopy')");
		button.setAttribute("value", "复制");
		button.setAttribute("style", 'cursor: pointer; margin: 10px;');
		return button;
    }

    function createHtml() {
    	var copyDom = document.getElementById('ccopy');
    	try {
            var contentType = copyDom.dataset.ccopy;
        } catch (err) {
            var contentType = '';
        }
        if (contentType === undefined || contentType === '' || contentType === 'text') {
            copyContent = copyDom.innerText;
        }
        if (contentType === 'html') {
        	copyContent = copyDom.innerHTML;
        }
        copyDom.appendChild(template());
    }

    function copy(content) {
        var aux = document.createElement("input"); 
        aux.setAttribute("value", content); 
        document.body.appendChild(aux); 
        aux.select();
        document.execCommand("copy"); 
        document.body.removeChild(aux);
        alert('已复制');
    }
    createHtml();
    window.cCopy = function () {
    	copy(copyContent);
    }
})(window, document);
