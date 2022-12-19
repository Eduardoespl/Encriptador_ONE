var copiar = document.getElementById("co");
var active = document.getElementById("active");
var activet = document.getElementById("active_t");
var activei = document.getElementById("active_i");

function mostrar(){
    copiar.style.display = "block";
    active.style.display = "none";
    activet.style.display = "none";
    activei.style.display = "none";
}

var button = document.querySelector("button");
button.onclick = mostrar;
