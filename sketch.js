// variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//variaveis Atacante
let xAtacante = 90;
let yAtacante = 150;

//variaveis Zaqueiro
let xZagueiroOponente = 190;
let yZagueiroOponente = 150;

//variaveis Gol
let xGol = 13;
let yGol = 150;

//variaveis raquete Oponente
let xAtacanteOponente = 500;
let yAtacanteOponente = 150;
let velocidadeyAtacanteOponente;

//variaveis Gol Oponente
let xGolOponente = 583;
let yGolOponente = 150;

//variaveis Zaqueiro
let xZagueiro = 400;
let yZagueiro = 150;


let larguraAtacante = 10;
let alturaAtacante = 90;
let larguraZagueiro = 10;
let alturaZagueiro = 90;
let larguraGol = 4;
let alturaGol = 90;


let velocidadexBolinha = 3;
let velocidadeyBolinha = 3;
let colidiu = false;

// placar pontos
let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo
let trilha;
let ponto;
let raquetada;

//imagens do jogo
let imagemCampo;


function preload() {
    trilha = loadSound("sons/trilha.mp3");
    ponto = loadSound("sons/ponto.mp3");
    raquetada = loadSound("sons/raquetada.mp3");
    imagemCampo = loadImage("imagens/futebol.jpg");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

function draw() {
    background(0, 128, 0);
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(0, 128, 0)
    rect(10, 10, 580, 380);

    stroke(255);
    strokeWeight(2);
    line(300, 10, 300, 390);

    stroke(255);
    strokeWeight(2);
    circle(300, 200, 120)

    stroke(255);
    strokeWeight(2);
    line(300, 50, 300, 300);

    line(10, 70, 120, 70);
    stroke(255);
    line(120, 70, 120, 330);
    stroke(255);
    line(10, 330, 120, 330);

    line(590, 70, 480, 70);
    stroke(255);
    line(480, 70, 480, 330);
    stroke(255);
    line(590, 330, 480, 330);

    line(10, 125, 50, 125);
    stroke(255);
    line(50, 125, 50, 265);
    stroke(255);
    line(10, 265, 50, 265);

    line(590, 125, 550, 125);
    stroke(255);
    line(550, 125, 550, 265);
    stroke(255);
    line(590, 265, 550, 265);

    fill(255);
    circle(85, 200, 3);

    fill(255);
    circle(515, 200, 3);

    fill(255);
    circle(300, 200, 3);

    noFill();
    arc(10, 10, 20, 20, 0, HALF_PI);

    noFill();
    arc(10, 390, -20, -20, 3 * PI / 2, 0);


    noFill();
    arc(590, 390, -20, -20, PI, 3 * PI / 2);

    noFill();
    arc(590, 10, -20, -20, PI / 2, PI);

    mostraBolinha();
    movimentaBolinha();
    colisaoBolinha();
    stroke(color(255, 0, 0));
    fill(color(255, 0, 0));
    mostrarAtacante(xAtacante, yAtacante);
    mostrarZagueiro(xZagueiro, yZagueiro);
    stroke(255);
    fill(255);
    mostrarGol(xGol, yGol);
    mostrarGol(xGolOponente, yGolOponente);
    movimentaJogadores();
    verificaColisaoAtacante(xAtacante, yAtacante);
    verificaColisaoAtacante(xAtacanteOponente, yAtacanteOponente);
    verificaColisaoAtacante(xZagueiro, yZagueiro);
    verificaColisaoAtacante(xZagueiroOponente, yZagueiroOponente);
    incluiPlacar();
    verificaColisaoGol(xGol, yGol);
    verificaColisaoGol(xGolOponente, yGolOponente);
    stroke(color(0, 255, 0));
    fill(color(0, 255, 0));
    mostrarZagueiro(xZagueiroOponente, yZagueiroOponente);
    mostrarAtacante(xAtacanteOponente, yAtacanteOponente);


}

function mostraBolinha() {

    circle(xBolinha, yBolinha, diametro);
}


function movimentaBolinha() {
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
}


function colisaoBolinha() {

    if (xBolinha + raio > 589 || xBolinha - raio < 10) {
        velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > 388 || yBolinha - raio < 10) {
        velocidadeyBolinha *= -1;
    }

}

function mostrarAtacante(x, y) {
    rect(x, y, larguraAtacante, alturaAtacante);
}
function mostrarZagueiro(x, y) {
    rect(x, y, larguraZagueiro, alturaZagueiro);
}



function mostrarGol(x, y) {
    rect(x, y, larguraGol, alturaGol);
}


function movimentaJogadores() {

    if (keyIsDown(UP_ARROW)) {
        yAtacante -= 10;
        yZagueiro -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yAtacante += 10;
        yZagueiro += 10;
    }

    if (keyIsDown(87)) {
        yAtacanteOponente -= 10;
        yZagueiroOponente -= 10;
    }

    if (keyIsDown(83)) {
        yAtacanteOponente += 10;
        yZagueiroOponente += 10;
    }

}

function verificaColisaoAtacante(x, y) {
    colidiu = collideRectCircle(x, y, larguraAtacante, alturaAtacante, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1;
        raquetada.play();
    }
}

function incluiPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(18);
    fill(color(255, 10, 0));
    rect(150, 14, 40, 20);
    fill(255)
    text(meusPontos, 170, 30);
    fill(color(255, 10, 0));
    rect(450, 14, 40, 20);
    fill(255)
    text(pontosOponente, 470, 30);
}


function verificaColisaoGol(x, y) {
    colidiu = collideRectCircle(x, y, larguraGol, alturaGol, xBolinha, yBolinha, raio);
        if (colidiu) {
        if (xGol == x) {
            pontosOponente++;
            print("Gooool, mas que lindo");
        }
        if (xGolOponente == x) {
            meusPontos++;
            print("Mas que bomba, Goooool");
        }
        velocidadexBolinha *= -1;
        xBolinha = 300;
        yBolinha = 200;
        ponto.play();
          
    }
}

