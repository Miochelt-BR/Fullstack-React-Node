
function maiorNumero() {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let c = Number(document.getElementById("numC").value);
  let maior = Math.max(a, b, c);
  document.getElementById("resultado1").innerText = `Maior número: ${maior}`;
}

function verificaTriangulo() {
  let a = Number(document.getElementById("lado1").value);
  let b = Number(document.getElementById("lado2").value);
  let c = Number(document.getElementById("lado3").value);
  let valido = a + b > c && a + c > b && b + c > a;
  document.getElementById("resultado2").innerText = valido ? "Forma um triângulo" : "Não forma um triângulo";
}


function verificaIdade() {
  let idade = Number(document.getElementById("idade").value);
  let mensagem = (idade >= 0 && idade <= 130) ? "Idade válida" : "Idade inválida";
  document.getElementById("resultado3").innerText = mensagem;
}


function verificaMes() {
  let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let mes = Number(document.getElementById("mes").value);
  let resultado = meses[mes - 1] || "Mês inválido";
  document.getElementById("resultado4").innerText = resultado;
}

function verificaLetra() {
  let letra = document.getElementById("letra").value.toLowerCase();
  let vogais = ["a", "e", "i", "o", "u"];
  let resultado = vogais.includes(letra) ? "Vogal" : "Consoante";
  document.getElementById("resultado5").innerText = resultado;
}

function calculaMedia() {
  let n1 = Number(document.getElementById("nota1").value);
  let n2 = Number(document.getElementById("nota2").value);
  let media = (n1 + n2) / 2;
  let resultado = media >= 7 ? (media === 10 ? "Aprovado com Distinção" : "Aprovado") : "Reprovado";
  document.getElementById("resultado6").innerText = resultado;
}


function verificaTurno() {
  let turno = document.getElementById("turno").value.toUpperCase();
  let mensagem = turno === "M" ? "Bom Dia!" : turno === "V" ? "Boa Tarde!" : turno === "N" ? "Boa Noite!" : "Valor Inválido!";
  document.getElementById("resultado7").innerText = mensagem;
}


function verificaEstacao() {
  let estacao = Number(document.getElementById("estacao").value);
  let resultado;
  switch (estacao) {
      case 1: resultado = "Verão"; break;
      case 2: resultado = "Outono"; break;
      case 3: resultado = "Inverno"; break;
      case 4: resultado = "Primavera"; break;
      default: resultado = "Número inválido";
  }
  document.getElementById("resultado8").innerText = resultado;
}


function verificaNota() {
  let nota = Number(document.getElementById("notaMen").value);
  let resultado;
  switch (true) {
      case (nota >= 0 && nota <= 4): resultado = "Insuficiente"; break;
      case (nota >= 5 && nota <= 6): resultado = "Regular"; break;
      case (nota >= 7 && nota <= 8): resultado = "Bom"; break;
      case (nota >= 9 && nota <= 10): resultado = "Excelente"; break;
      default: resultado = "Nota inválida";
  }
  document.getElementById("resultado9").innerText = resultado;
}


function calculaReajuste() {
  let salario = Number(document.getElementById("salario").value);
  let percentual, aumento, novoSalario;

  if (salario <= 280) {
      percentual = 20;
  } else if (salario > 280 && salario <= 700) {
      percentual = 15;
  } else if (salario > 700 && salario <= 1500) {
      percentual = 10;
  } else {
      percentual = 5;
  }

  aumento = salario * (percentual / 100);
  novoSalario = salario + aumento;

  document.getElementById("resultado10").innerText =
      `Salário antes do reajuste: R$ ${salario.toFixed(2)}
      Percentual de aumento aplicado: ${percentual}%
      Valor do aumento: R$ ${aumento.toFixed(2)}
      Novo salário: R$ ${novoSalario.toFixed(2)}`;
}
