window.onload = function () {
  // Coloque sua função aqui
  carregaDadosAPI();
};

function carregaDadosAPI() {
  const apiUrl = "https://a53519cf-fa35-4095-9481-605ffffc4df8-00-l64a5vmzpxa6.worf.replit.dev/contatos";

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
      console.log("Imprimindo pessoas");
      let str = "";
      for (let i = 0; i < data.length; i++) 
      {
  
        let pessoa = data[i];
        str += `<div class="card" style="width: 20rem; margin:5px;">
        <img src="${pessoa.imagem}" class="card-img-top" alt="..." style="padding:15px">
        <div class="card-body">
          <h3 class="card-title">${pessoa.nome}</h3>
          <p class="card-text"><h6>${pessoa.idade}</h6></p>
          <p class="card-text"><h6>${pessoa.altura}</h6></p>
          <p class="card-text"><h6>${pessoa.cidade}</h6></p>
          <a href="${pessoa.website}" target="_blank" class="btn btn-primary">Mais informações do modelo</a>
        </div>
        </div>`;
      }
      document.getElementById("tela").innerHTML = str;
    });

  console.log("Terminou");
}
