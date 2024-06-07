let xbola = 500;
let ybola = 400;
let diametro = 40;
let raio = diametro/2;
let xr = 15;
let yr = 250;
let lr = 15;
let ar = 150;
let xvb = 10;
let yvb = 6;
let xri = 970;
let yri = 250;
let meuspontos = 0;
let pontosdoinimigo = 0;
let imagem;
let ponto;
let raquetada;
let fundo;

let colidiu = false;

function setup() {
  createCanvas(1000, 800);
  fundo.loop();
}

function draw() {
 image(imagem, 0, 0, 1000, 800)
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr, yr);
  mostraraquete(xri, yri);
  mexeraqueteinimigo();
  mexeraquete();
  quicaraquetebola(xri, yri);
  quicaraquetebola(xr, yr)
  pontos();
  placar();
  texto();
}

function preload(){
  imagem = loadImage("imagem.png");
  fundo = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function mostrabola(){
  circle(xbola, ybola, diametro);
}
function mexebola(){
  xbola +=xvb;
  ybola +=yvb;
}
function quicabola(){
  if (xbola + raio > width  || xbola - raio < 0){
    xvb *= -1
  }
  if (ybola + raio > height  || ybola - raio < 0){
    yvb *= -1
  }
}

function mostraraquete(x, y) {
  rect(x,y,lr,ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
    yr -= 10;
  
  if (keyIsDown(DOWN_ARROW))
    yr += 10;
}

function mexeraqueteinimigo(){
  if (keyIsDown(87)) //s
    yri -= 10;
  
  if (keyIsDown(83)) //w
    yri += 10;    
}

function quicaraquetebola(x, y) {
  colidiu = collideRectCircle(x, y, lr, ar, xbola, ybola, diametro);

  if (colidiu) {
    xvb *= -1;
    raquetada.play();
  }
}
  

function pontos(){
  if (xbola > 990){
  meuspontos += 1
    ponto.play();
  }
  if (xbola < 10){
    pontosdoinimigo += 1
    ponto.play();
  }
}

function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(20);
  fill("blue")
  rect(20, 30, 40, 20);
  fill("white");
  text (meuspontos, 40, 30);
  fill ("red");
  rect (930, 30, 40, 20);
  fill("white");
  text (pontosdoinimigo, 950, 30);
}

function texto(){
  let frase = "MEUS PONTOS"
  let xf = 20;
  let yf = 10;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("black");
  text(frase, xf, yf);
  
  let frase2 = "PONTOS DO INIMIGO"
  let xf2 = 765;
  let yf2 = 10;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("black");
  text(frase2, xf2, yf2);
}