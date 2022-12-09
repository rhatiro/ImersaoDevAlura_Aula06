var player01 = {
  nome: "Player 01",
  emoji: "🧙‍♂️",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player02 = {
  nome: "Player 02",
  emoji: "🚴‍",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player03 = {
  nome: "Player 03",
  emoji: "🐈",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

player01.pontos = calculaPontos(player01);
player02.pontos = calculaPontos(player02);
player03.pontos = calculaPontos(player03);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [player01, player02, player03];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + " " + jogadores[i].emoji + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  for (var index = 0; index < jogadores.length; index++) {
    if (index == i) {
      continue;
    }
    jogadores[index].derrotas++;
  }
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  for (var index = 0; index < jogadores.length; index++) {
    jogadores[index].empates++;
    jogadores[index].pontos = calculaPontos(jogadores[index]);
  }

  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos() {
  for (var index = 0; index < jogadores.length; index++) {
    jogadores[index].vitorias = 0;
    jogadores[index].empates = 0;
    jogadores[index].derrotas = 0;
    jogadores[index].pontos = calculaPontos(jogadores[index]);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionar() {
  var nome = document.getElementById("novoNome").value;
  jogadores.push({
    nome: nome,
    emoji: "",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(jogadores);
  document.getElementById("novoNome").value = "";
  // console.log(jogadores);
  event.preventDefault();
}