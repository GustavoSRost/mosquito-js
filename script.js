let altura = 1;
let largura = 1;
let vida = 1;
let tempo = 120;
let criaMosquitoTempo = 1500
let nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else if (nivel === 'impossivel'){
  criaMosquitoTempo = 750
}
function tamanhoTelaJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}
let cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

tamanhoTelaJogo();
function randomPosition() {
  //remover anterior (caso exista)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vida > 3) {
      window.location.href = "fim-de-jogo.html";
    } else {
      document.getElementById("v" + vida).src = "img/coracao_vazio.png";
      vida++;
    }
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  //criar elemento HTML
  let mosquito = document.createElement("img");
  mosquito.src = "img/mosca.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function randomSize() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito-1";
    case 1:
      return "mosquito-2";
    case 2:
      return "mosquito-3";
  }
}
function randomSide() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
