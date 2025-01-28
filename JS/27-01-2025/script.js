function exibirMensagem(mensagem) {
  document.getElementById("output").innerText = mensagem;
}

// 1. Exibir data e hora atual
function exibirDataHora() {
  const agora = new Date();
  exibirMensagem(agora.toLocaleString());
}

// 2. Formatar data
function formatarData() {
  const data = prompt("Digite uma data (yyyy-mm-dd):");
  if (data) {
      const partes = data.split("-");
      exibirMensagem(`${partes[2]}/${partes[1]}/${partes[0]}`);
  }
}

// 3. Data futura (+50 dias)
function dataFutura() {
  const agora = new Date();
  agora.setDate(agora.getDate() + 50);
  exibirMensagem(agora.toLocaleString());
}

// 4. Relógio atualizado a cada segundo
function iniciarRelogio() {
  setInterval(() => {
      const agora = new Date();
      exibirMensagem(agora.toLocaleTimeString());
  }, 1000);
}

// 5. Arredondamento de número
function arredondarNumero() {
  const numero = parseFloat(prompt("Digite um número:"));
  if (!isNaN(numero)) {
      exibirMensagem(`Arredondado: ${Math.round(numero)}
      | Para baixo: ${Math.floor(numero)}
      | Para cima: ${Math.ceil(numero)}`);
  }
}

// 6. Número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
  const numero = Math.floor(Math.random() * 100) + 1;
  exibirMensagem(`Número aleatório: ${numero}`);
}

// 7. Raiz quadrada
function calcularRaizQuadrada() {
  const numero = parseFloat(prompt("Digite um número:"));
  if (!isNaN(numero)) {
      exibirMensagem(`Raiz quadrada: ${Math.sqrt(numero).toFixed(2)}`);
  }
}

// 8. Maior e menor número do array
function maiorMenorArray() {
  const numeros = [12, 45, 67, 23, 89, 2, 77];
  exibirMensagem(`Maior: ${Math.max(...numeros)} | Menor: ${Math.min(...numeros)}`);
}

// 9. Desestruturação de objeto
function desestruturarObjeto() {
  const produto = { nome: "Celular", preco: 1999, estoque: 10 };
  const { nome, preco, estoque } = produto;
  exibirMensagem(`Nome: ${nome} | Preço: R$${preco} | Estoque: ${estoque}`);
}

// 10. Copiar array e adicionar número
function copiarArray() {
  const numeros = [1, 2, 3, 4, 5];
  const novoArray = [...numeros, 6];
  exibirMensagem(`Novo array: ${novoArray}`);
}
