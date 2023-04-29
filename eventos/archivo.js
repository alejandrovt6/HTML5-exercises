/*
function ejecuta () {
    for(var i=0;i<3;i++) {
        document.getElementsByTagName("p")[i].onclick=saludo;
    }
}
*/

/*
function ejecuta(){
    for(var i=0;i<2;i++){
        var z = document.getElementsByClassName("importante")[i].onclick=saludo;
    }
}
*/

//  document.getElementsByTagName("p")[0].onclick=saludo;
//  document.getElementById("importante").onclick=saludo;

function ejecuta(){
//    document.querySelector(".importante").onclick=saludo;
//    document.querySelector("#princpial p:last-child").onclick=saludo;
    var elementos=document.querySelectorAll("#principal p, span");
    for(var i=0;i<elementos.length;i++){
    elementos[i].onclick=saludo;
    }
}

function saludo () {
    alert("Que pasa mi gente");
}

window.onload=ejecuta;

