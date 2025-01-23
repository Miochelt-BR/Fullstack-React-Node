function mostrarResultados() {
  let output = document.getElementById("output");
  output.innerHTML = "";  

  let pares = "";
  let i = 2;
  while (i <= 10) {
      pares += i + " ";
      i += 2;
  }
  output.innerHTML += "1. Números pares de 2 a 10: " + pares + "\n\n";

  let tabuada = "";
  for (let j = 1; j <= 10; j++) {
      tabuada += `7 x ${j} = ${7 * j}\n`;
  }
  output.innerHTML += "2. Tabuada do 7:\n" + tabuada + "\n";

  let fibonacci = [0, 1];
  for (let k = 2; k < 10; k++) {
      fibonacci.push(fibonacci[k - 1] + fibonacci[k - 2]);
  }
  output.innerHTML += "3. Sequência de Fibonacci: " + fibonacci.join(", ") + "\n\n";

  let triangulo = "";
  for (let l = 1; l <= 5; l++) {
      triangulo += "*".repeat(l) + "\n";
  }
  output.innerHTML += "4. Triângulo de asteriscos:\n" + triangulo + "\n";

  function dobro(n) {
      return n * 2;
  }
  output.innerHTML += "5. Dobro de 5: " + dobro(5) + "\n\n";

  function quadrado(n) {
      return n * n;
  }
  output.innerHTML += "6. Quadrado de 4: " + quadrado(4) + "\n\n";

  function apresentar(nome, idade, endereco) {
      return `Olá, eu sou ${nome}, tenho ${idade} ano(s) e moro em ${endereco}.`;
  }
  output.innerHTML += "7. " + apresentar("Carlos", 25, "Rua das Flores, 123") + "\n\n";

  function formatarData(dia, mes, ano) {
      return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
  }
  output.innerHTML += "8. Data formatada: " + formatarData(5, 3, 2024) + "\n\n";

  function calcularDesconto(preco, percentual) {
      return preco - (preco * (percentual / 100));
  }
  output.innerHTML += "9. Preço com desconto: " + calcularDesconto(100, 20) + "\n\n";

  function repetir(palavra, vezes) {
      return palavra.repeat(vezes);
  }
  output.innerHTML += "10. Repetição da palavra 'batata' 3 vezes: " + repetir("batata ", 3) + "\n";
}
