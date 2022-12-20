//var copiar = document.getElementById("co");
//var active = document.getElementsByClassName("active");


function encriptar(){
    var text = document.getElementById("text").value;
    var encriptado = text
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    console.log(encriptado);
}

function desencriptar(){
    var textEncriptado = document.getElementById("text").value;
    var desencriptado = textEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    console.log(desencriptado);
}

var buttonEn = document.getElementById("en");
var buttonDes = document.getElementById("des");
buttonEn.onclick = encriptar;
buttonDes.onclick = desencriptar;
