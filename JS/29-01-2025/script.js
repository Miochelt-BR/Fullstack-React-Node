function buscarCidades() {
  let uf = document.getElementById("ufInput").value.toUpperCase().trim();
  let lista = document.getElementById("listaCidades");

  if (uf.length !== 2) {
      alert("Digite uma UF válida com 2 letras.");
      return;
  }

  let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error("UF não encontrada");
          }
          return response.json();
      })
      .then(data => {
          lista.innerHTML = ""; 
          data.forEach(cidade => {
              let li = document.createElement("li");
              li.textContent = cidade.nome;
              lista.appendChild(li);
          });
      })
      .catch(error => {
          lista.innerHTML = "";
          alert("Erro ao buscar cidades. Verifique a UF digitada.");
          console.error(error);
      });
}
