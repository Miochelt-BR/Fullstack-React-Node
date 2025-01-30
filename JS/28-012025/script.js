// 1. Alterar o texto da <div>
function alterarTexto() {
  document.getElementById("textoDiv").innerText = "Texto alterado com sucesso!";
}

// 2. Alterar a cor e estilo do parágrafo
function alterarParagrafo() {
  let p = document.getElementById("paragrafo");
  p.style.backgroundColor = "yellow";
  p.style.fontWeight = "bold";
}

// 3. Adicionar item à lista
function adicionarItem() {
  let ul = document.getElementById("minhaLista");
  let novoItem = document.createElement("li");
  novoItem.textContent = "Novo Item";
  ul.appendChild(novoItem);
}

// 4. Remover última linha da tabela
function removerLinha() {
  let tabela = document.getElementById("minhaTabela");
  let linhas = tabela.getElementsByTagName("tr");
  if (linhas.length > 0) {
      tabela.deleteRow(linhas.length - 1);
  }
}

// 5. Mostrar/Ocultar imagem
function mostrarImagem() {
  let img = document.getElementById("minhaImagem");
  img.style.display = "block";
}

function ocultarImagem() {
  let img = document.getElementById("minhaImagem");
  img.style.display = "none";
}
