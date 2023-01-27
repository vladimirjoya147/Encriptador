
function encrypt(text) {
    text = text.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
}

function decrypt(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}

const mensaje=document.querySelector(".mensaje");
const txtingreso=document.querySelector(".ingresotexto");


function onEncrypt() {
    var text = txtingreso.value;
    var encrypted = encrypt(text);
    mensaje.value = encrypted;
    mensaje.style.backgroundImage = "none";
    txtingreso.value="";
    document.querySelector(".copiar").style.display ="initial";
    
}

function onDecrypt() {
    var text = txtingreso.value;
    var decrypted = decrypt(text);
    mensaje.value = decrypted;
    mensaje.style.backgroundImage = "none";
    txtingreso.value="";
}

function copyToClipboard() {
    var text = mensaje.value;
    navigator.clipboard.writeText(text);
    mensaje.value="";
    document.querySelector(".copiar").style.display ="none";
    mensaje.style = "initial";
    
}

