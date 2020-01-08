/*!
 * ccopy.js v1.0.1 (2020-01-08)
 *
 * @link https://plugin.caohongyuan.cn/copy
 * @auther https://caohongyuan.cn/
 */
(function (window, document) {
    "use strict";
    var copyContent = '';
    var contentType;
    var copyDom;
    var button;

    function template() {
        button = document.createElement("span");
        button.setAttribute("id", "copyButton");
        button.setAttribute("onclick", "cCopy('ccopy')");
        button.setAttribute("style", 'cursor: pointer; margin: 10px; display: none; border: 1px solid; border-radius: 4px;');
        button.innerText = '复制';
        return button;
    }

    function createHtml() {
        copyDom = document.getElementById('ccopy');

        try {
            contentType = copyDom.dataset.ccopy;
        } catch (err) {
            contentType = '';
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
        button.innerText = '已复制';
        setTimeout(function(){button.innerText = '复制';}, 1000);
    }


    createHtml();
    window.cCopy = function () {
        copy(copyContent);
    };

    var copyButton = document.getElementById('copyButton');
    copyDom.onmouseover = function () {
        copyButton.style.display = '';
    };
    copyDom.onmouseout = function () {
        copyButton.style.display = 'none';
    };
})(window, document);
