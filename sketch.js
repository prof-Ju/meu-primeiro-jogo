// area das variaveis
var caixa;

function setup() {
  //função de configuração
  createCanvas(400, 400);

  //criando o sprite
  caixa = createSprite(200, 200, 50, 50);
  caixa.shapeColor = "red";
}

function draw() {
  background(0);
  drawSprites();
}