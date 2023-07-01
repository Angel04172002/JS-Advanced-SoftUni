function encodeAndDecodeMessages() {
    
    let [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('#main button'));
    let textAreaElements = Array.from(document.querySelectorAll('#main textarea'));

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);


    function addOneToAscii(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function subtractOneFromAscii(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }


    function convert(message, cb) {
        return message.split('').map(cb).join('');
    }


    function encodeMessage(e) {
        textAreaElements[1].value = convert(textAreaElements[0].value, addOneToAscii);
        textAreaElements[0].value = '';
    }


    function decodeMessage(e) {
        textAreaElements[1].value = convert(textAreaElements[1].value, subtractOneFromAscii);
    }
}
