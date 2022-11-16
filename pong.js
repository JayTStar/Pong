// Definindo as variáveis

//----Posição da Bolinha nos eixos X e Y----
let xBola = 600;
let yBola = 400;
//----Diâmetro e Raio da Bolinha----
let diametro = 10;
let raio = diametro / 2;
//----Altura e Largura do Fundo----
let width = 1200;
let heigth = 800;
//----Velocidade da Bolinha----
let velocidadeXBola = 5;
let velocidadeYBola = 5;
//----Posição do jogador e do oponente----
let xJogador = 15;
let yJogador = 350;
let xOponente = 1175;
let yOponente = 350;
let velocidadeOponente = 5;
//----Dimenções das raquetes----
let widthRaquete = 10;
let heightRaquete = 100;

let pontoJogador = 0;
let pontoOponente = 0;

//----Função para Criar o Fundo----
function setup() {
    createCanvas(width, heigth);
}

//----Função para Mostrar na Tela----
function draw() {
    background(0); // Cor do Fundo
    bolinha();
    jogador();
    oponente();
    placar();
}

//----Função para Determinbar as Características e o Comportamento da Bolinha----
function bolinha(){
    fill(255,255,255);
    circle(xBola, yBola, diametro);
    xBola += velocidadeXBola;
    yBola += velocidadeYBola;

    if(xBola + raio > width  || xBola - raio < 0){
        velocidadeXBola *= -1;
    }

    if(yBola + raio > heigth || yBola - raio < 0){
        velocidadeYBola *= -1;
    }
}

//----Função para Determinbar as Características e o Comportamento do Jogador----
function jogador(){
    fill(255,255,255);
    rect(xJogador, yJogador, widthRaquete, heightRaquete);

    if(yJogador > 0 ){
        if(keyIsDown(UP_ARROW)){
            yJogador -= 10;
        }
    }

    if(yJogador < heigth - heightRaquete){
        if(keyIsDown(DOWN_ARROW)){
            yJogador += 10;
        }
    }

    if( xBola - raio < xJogador + widthRaquete && yBola + raio > yJogador && yBola - raio < yJogador + heightRaquete){
        velocidadeXBola *= -1;
    }
}

//----Determina as Caracteristicas e Comportamentos do oponente----
function oponente(){
    fill(255,255,255);
    rect(xOponente, yOponente, widthRaquete, heightRaquete);

//---- Limitação do Movimento do Oponente---- 
    if(yOponente >= 0 && yOponente <= (heigth - heightRaquete)){
        yOponente += velocidadeOponente
    }
//----Regra de Atualização da Velocidade----
    if(yOponente == 0 || yOponente == (heigth - heightRaquete)){
        velocidadeOponente *= -1;
    }
    
    if( yOponente + heightRaquete > yBola + 100){
        velocidadeOponente *= -1
    }

    if( xBola + raio > xOponente && yBola + raio && yBola + raio > yOponente && yBola - raio < yOponente + heightRaquete){
        velocidadeXBola *= -1;
    }
}

//----Define as Caracteristicas e o Funcionamento do Placar----
function placar(){
    fill(255,255,255);
    textSize(100);
    text(pontoJogador, 300, 100);

    fill(255,255,255);
    textSize(100);
    text(pontoOponente, 800, 100);

    if((xBola + raio) > 1200){
        pontoJogador += 1;
    }
    if((xBola - raio) < 0){
        pontoOponente += 1;
    }
    
}