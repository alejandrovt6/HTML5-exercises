var elem_origen;
var elem_destino;

function comenzar() {
    elem_origen=document.getElementById("imagen");
    elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false);

    elem_destino=document.getElementById("zonadestino");
    elem_destino.addEventListener("dragenter",function(e) {
        e.preventDefault();},false);
    
    elem_destino.addEventListener("dragover",function(e){
        e.preventDefault();},false);

    elem_destino.addEventListener("drop",soltado,false);

    elem_origen.addEventListener("dragend",terminado,false);

    elem_destino.addEventListener("dragenter",entrando, false);

    elem_destino.addEventListener("dragleave",saliendo,false);
}

function comenzamos_arrastrar(e){
    var codigo="<img src='" + elem_origen.getAttribute ("src") + "'>";
    e.dataTransfer.setData("Text",codigo);
}

function soltado(e){
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfer.getData("Text");
}

function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}

function entrando(e){
    e.preventDefault(); // Reseteamos el comportamiento del pc
    elem_destino.style.background="rgba(8,252,25,.8)";
}

function saliendo(e){
    e.preventDefault();
//    elem_destino.style.background="white";
    elem_destino.style.visibility="hidden";
}


// AL CARGAR
window.addEventListener("load",comenzar,false);

// SET DATA: establecer info que compartimos
// GET DATA: decimos que info tenemos que capturar
