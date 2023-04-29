// No es necesario que coincida con los id
var mivideo, play, bar, progress, maximo;

maximo=600; // ancho de la barra declarado en css

function comenzar(){
    mivideo=document.getElementById("mivideo");
    play=document.getElementById("play");
    bar=document.getElementById("bar");
    progress=document.getElementById("progress");

    play.addEventListener("click", clickando, false);
    bar.addEventListener("click", adelantando, false);
}

function clickando(){
    if((mivideo.paused==false) && (mivideo.ended==false)){
        mivideo.pause();
        play.innerHTML="Play";

    } else {
        mivideo.play();
        play.innerHTML="Pause";

        bucle=setInterval(estado, 10); // nº en ms
    }
}

function adelantando(posicion){
    if ((mivideo.paused==false) && (mivideo.ended)==false) {
        var ratonX=posicion.pageX-bar.offsetLeft;
        var nuevoTiempo=ratonX*mivideo.duration/maximo;
        mivideo.currentTime=nuevoTiempo;
        progress.style.width=ratonX+"px";
    }
}

function estado(){
    if (mivideo.ended==false) {
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration); // regla de 3
        progress.style.width=total+"px";
    }
}




window.addEventListener("load", comenzar, false);