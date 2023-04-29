// No es necesario que coincida con los id
var miaudio, play, bar, progress, maximo;

maximo=600; // ancho de la barra declarado en css

function comenzar(){
    miaudio=document.getElementById("miaudio");
    play=document.getElementById("play");
    bar=document.getElementById("bar");
    progress=document.getElementById("progress");

    play.addEventListener("click", clickando, false);
    bar.addEventListener("click", adelantando, false);
}

function clickando(){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
        play.innerHTML="Play";

    } else {
        miaudio.play();
        play.innerHTML="Pause";

        bucle=setInterval(estado, 10); // nº en ms
    }
}

function adelantando(posicion){
    if ((miaudio.paused==false) && (miaudio.ended)==false) {
        var ratonX=posicion.pageX-bar.offsetLeft;
        var nuevoTiempo=ratonX*miaudio.duration/maximo;
        miaudio.currentTime=nuevoTiempo;
        progress.style.width=ratonX+"px";
    }
}

function estado(){
    if (miaudio.ended==false) {
        var total = parseInt(miaudio.currentTime*maximo/miaudio.duration); // regla de 3
        progress.style.width=total+"px";
    }
}




window.addEventListener("load", comenzar, false);