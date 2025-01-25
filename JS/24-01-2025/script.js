const container = document.getElementById("container");

function criarCard(titulo, descricao, codigo, resultado) {
    const card = document.createElement("div");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = titulo;

    const button = document.createElement("button");
    button.textContent = "Ver Exercício";

    const content = document.createElement("div");
    content.classList.add("card-content");

    const desc = document.createElement("p");
    desc.textContent = descricao;

    const pre = document.createElement("pre");
    pre.textContent = codigo;

    const pResultado = document.createElement("p");
    pResultado.textContent = "Resultado: " + resultado;

    content.appendChild(desc);
    content.appendChild(pre);
    content.appendChild(pResultado);

    button.addEventListener("click", () => {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });

    card.appendChild(h2);
    card.appendChild(button);
    card.appendChild(content);
    container.appendChild(card);
}

// 1. Array de 10 a 20
const numeros = Array.from({ length: 11 }, (_, i) => i + 10);
criarCard("Números de 10 a 20", "Cria um array de números de 10 a 20.", "const numeros = Array.from({ length: 11 }, (_, i) => i + 10);", numeros.join(", "));

// 2. Strings > 5 letras
const palavras = ["maçã", "banana", "uva", "abacaxi"];
criarCard("Strings > 5 caracteres", "Filtra palavras com mais de 5 letras.", 'const palavras = ["maçã", "banana", "uva", "abacaxi"].filter(str => str.length > 5);', palavras.filter(str => str.length > 5).join(", "));

// 3. Números acima da média
const listaNumeros = [10, 20, 30, 40, 50];
const media = listaNumeros.reduce((soma, num) => soma + num, 0) / listaNumeros.length;
const acimaMedia = listaNumeros.filter(num => num > media);
criarCard("Números acima da média", "Filtra números maiores que a média.", "const acimaMedia = listaNumeros.filter(num => num > media);", acimaMedia.join(", "));

// 4. Arquivos por extensão
const arquivos = ["documento.pdf", "foto.png", "planilha.xls", "relatorio.pdf"];
const pdfs = arquivos.filter(arquivo => arquivo.endsWith(".pdf"));
criarCard("Filtrar Arquivos .pdf", "Filtra arquivos que terminam em .pdf.", 'const pdfs = arquivos.filter(arquivo => arquivo.endsWith(".pdf"));', pdfs.join(", "));

// 5. Três primeiras letras
const nomes = ["Carlos", "Amanda", "Bruno"].map(nome => nome.slice(0, 3));
criarCard("Três primeiras letras", "Retorna as 3 primeiras letras de cada nome.", 'const nomes = ["Carlos", "Amanda", "Bruno"].map(nome => nome.slice(0, 3));', nomes.join(", "));

// 6. Elevar ao quadrado
const quadrados = [2, 4, 6, 8].map(num => num ** 2);
criarCard("Números ao quadrado", "Eleva cada número ao quadrado.", 'const quadrados = [2, 4, 6, 8].map(num => num ** 2);', quadrados.join(", "));

// 7. Pessoa - IMC
const pessoa = { nome: "João", idade: 30, peso: 75, altura: 1.75 };
criarCard("Pessoa - IMC", "Calcula o IMC de uma pessoa.", "IMC = peso / (altura * altura);", (pessoa.peso / (pessoa.altura ** 2)).toFixed(2));

// 8. Partida de Futebol
const partida = { mandante: "Flamengo", visitante: "Palmeiras", placar: "3x1" };
criarCard("Partida de Futebol", "Representa uma partida.", JSON.stringify(partida), partida.placar);

// 9. Pets
const pets = [{ nome: "Rex", idade: 3, peso: 12 }, { nome: "Mia", idade: 2, peso: 5 }];
criarCard("Lista de Pets", "Lista de pets com nome, idade e peso.", JSON.stringify(pets), pets.map(p => p.nome).join(", "));
