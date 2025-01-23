// 1. Retorna o número de caracteres de uma string
function contarCaracteres(str) {
  return str.length;
}

// 2. Converte a string para maiúsculas
function paraMaiusculas(str) {
  return str.toUpperCase();
}

// 3. Converte a string para minúsculas
function paraMinusculas(str) {
  return str.toLowerCase();
}

// 4. Compara duas strings e retorna true se forem iguais
function compararStrings(str1, str2) {
  return str1 === str2;
}

// 5. Retorna os primeiros caracteres da string de acordo com o número informado
function primeirosCaracteres(str, num) {
  return str.substring(0, num);
}

// 6. Censura uma palavra em uma frase
function censurarPalavra(frase, palavra) {
  const regex = new RegExp(palavra, 'gi');
  return frase.replace(regex, '****');
}

// 7. Conta as ocorrências de um caractere em uma string
function contarOcorrencias(str, char) {
  return str.split(char).length - 1;
}

// 8. Retorna o dobro de um número (Arrow Function)
const dobro = num => num * 2;

// 9. Retorna o quadrado de um número (Arrow Function)
const quadrado = num => num ** 2;

// Executa os testes e exibe no console futurista
function executarTestes() {
  let resultado = "";

  resultado += "Número de caracteres: " + contarCaracteres("Futurista") + "\n";
  resultado += "Maiúsculas: " + paraMaiusculas("futurista") + "\n";
  resultado += "Minúsculas: " + paraMinusculas("FUTURISTA") + "\n";
  resultado += "Comparação (true): " + compararStrings("Teste", "Teste") + "\n";
  resultado += "Comparação (false): " + compararStrings("Teste", "teste") + "\n";
  resultado += "Primeiros caracteres: " + primeirosCaracteres("JavaScript", 4) + "\n";
  resultado += "Censura: " + censurarPalavra("Aprender JavaScript é legal", "JavaScript") + "\n";
  resultado += "Ocorrências: " + contarOcorrencias("banana", "a") + "\n";
  resultado += "Dobro de 5: " + dobro(5) + "\n";
  resultado += "Quadrado de 4: " + quadrado(4) + "\n";

  document.getElementById("output").value = resultado;
}
