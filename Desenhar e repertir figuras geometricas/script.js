// Carregar a pagina e depois o Js nesse comando window onload = function(){}
window.onload = function(){
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

// Criar quadrado 
//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 50, 50);


// Criar uma função
function geraQuadrado(x, y, largura, cor){
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, largura);
}
//
//let cor = "#934399";
//let x = 100;
//let y = 200;
//let largura = 50;
//geraQuadrado(x, y, largura, cor)

//função para criar e reproduzir quadrados
function desenharQuadrados() {
    const tamanhoQuadrado = 50;
    const distancia = 5;
    const larguraCanvas = canvas.width;
    let x = 0;
    while (x + tamanhoQuadrado <= larguraCanvas){
        geraQuadrado(x, 0, tamanhoQuadrado, '#000') ;
        x += tamanhoQuadrado + distancia;
    }
    }
desenharQuadrados();



//---------------------------------

function geraCirculos(){
ctx.beginPath();
ctx.arc(250,100,50,0,2 * Math.PI);
ctx.fillStyle = "#00FF00";
ctx.fill();
ctx.closePath();
}

function desenharCirculos() {
    const tamanhoCirculo = 50;
    const distancia = 5;
    const larguraCanvas = canvas.width;
    let x = 0;
    while (x + tamanhoCirculo <= larguraCanvas){
        geraQuadrado(x, 0, tamanhoCirculo, '#000') ;
        x += tamanhoCirculo + distancia;
    }
    
desenharCirculos();

}

}
