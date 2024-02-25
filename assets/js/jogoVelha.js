let jogador = '';
let contador = 0;

function startGame() {
  displayGerador();
  geraRodadaPlayer();
}

const defineJogador=(jogadorAtual)=>{return jogadorAtual=="jogador_1"?"jogador_2":"jogador_1";}

function gerenciaRodada() {
  const player = document.getElementById('jogador');
  player.innerText = defineJogador(player.innerText);
}

const geraRodadaPlayer = () => { 
  jogador = defineJogador();
  const jogadorAtual = document.getElementById('jogadorAtual');
  const h3 = document.createElement('h3');
  h3.id = "jogador";
  h3.innerText = jogador;
  jogadorAtual.appendChild(h3); 
}

function verificaClique(position) {
  const player = document.getElementById('jogador');
  const buttonTarget = document.getElementById(`displayJogoButton${position}`);

  disableButton(buttonTarget,player.innerText);
  gerenciaRodada();
  verificaVencedor();
}

function disableButton(button, player) {
  button.disabled = true;
  button.innerText = player == 'jogador_1' ? 'X' : 'O';
  button.style.color = player == 'jogador_1' ? '#1fbee1' : 'white';
  button.classList.add(player);
}

function displayGerador() {
    const displayJogoContainer = document.getElementById('displayJogoContainer');
    for (let position = 0; position < 9; position++) {
      const button = document.createElement('button');
      button.id = `displayJogoButton${position}`;
      button.classList.add('jogoButton');
      button.classList.add(position);
      
      button.onclick = () => verificaClique(position);
      displayJogoContainer.appendChild(button);
    }
}

function verificaVencedor() {
  contador++;
  if (contador >= 5) { // otimizando processamente, pois somente apartir da 5° rodada pode existir um vencedor
    let arrayValidador = [];
    for (let playernum = 1; playernum <= 2; playernum++) {
      for (let position = 0; position < 9; position++) {
        let buttonJogo = document.getElementById(`displayJogoButton${position}`);
        arrayValidador.push(buttonJogo.classList.contains(`jogador_${playernum}`));
      }
    }
    const lateral = vefirificaLateral(arrayValidador); 
    if (typeof lateral === "string") return endGame(lateral);

    const vertical = vefirificaVertical(arrayValidador);
    if (typeof vertical === "string" ) return endGame(vertical);
      
    const horizontal = verificaHorizontal(arrayValidador);
    if (typeof horizontal === "string") return endGame(horizontal);

    if(contador == 9)return endGame("o Jogo terminou num empate!");
  }
}

function vefirificaLateral(arrayValidador) {
  for (let lateral = 0; lateral < 4; lateral+=2) { 
    if (arrayValidador[4] && arrayValidador[lateral] && arrayValidador[8-lateral]) return "jogador 1 venceu";
    if (arrayValidador[lateral+9] && arrayValidador[13] && arrayValidador[17-lateral]) return "jogador 2 venceu";
  }
  return null;
}

function vefirificaVertical(arrayValidador) {
  for (let vertical = 0; vertical < 3; vertical++) { 
    if (arrayValidador[vertical] && arrayValidador[vertical+3] && arrayValidador[vertical+6]) return "jogador 1 venceu";
    if (arrayValidador[vertical+9] && arrayValidador[vertical+12] && arrayValidador[vertical+15]) return "jogador 2 venceu";
  }
  return null;
}
function verificaHorizontal(arrayValidador){ 
  for (let horizontal = 0; horizontal <= 9; horizontal+=3) { 
    if (arrayValidador[horizontal] && arrayValidador[horizontal+1] && arrayValidador[horizontal+2]) return "jogador 1 venceu";
    if (arrayValidador[horizontal+9] && arrayValidador[horizontal+10] && arrayValidador[horizontal+11]) return "jogador 2 venceu";
  }
  return null;
}

function endGame(resultado) {
  document.getElementById('popupMessage').innerText = resultado;
  openPopup();
  contador = 0;
}

function openPopup() {document.getElementById('overlay').style.display = 'block';}
function closePopup() {document.getElementById('overlay').style.display = 'none';}

startGame();