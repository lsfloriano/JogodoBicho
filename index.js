const bichos_exec = () => {
  let bichos = [
    "avestruz",
    "aguia",
    "burro",
    "borboleta",
    "cachorro",
    "cabra",
    "carneiro",
    "camelo",
    "cobra",
    "coelho",
    "cavalo",
    "elefante",
    "galo",
    "gato",
    "jacare",
    "leao",
    "macaco",
    "porco",
    "pavao",
    "peru",
    "touro",
    "tigre",
    "urso",
    "veado",
    "vaca",
  ];

  let i = 0;

  while (i < bichos.length) {
    let xenix = document.createElement("div");
    xenix.className = "bicho-container";
    xenix.id = bichos[i];

    let nome = document.createElement("p");
    nome.className = 'nome_bicho'
    nome.innerHTML = bichos[i].charAt(0).toUpperCase() + bichos[i].slice(1)
    xenix.appendChild(nome);

    let imagem = document.createElement("img");
    imagem.src = "img/" + bichos[i] + ".jpg";
    imagem.className = "bichos";
    xenix.appendChild(imagem);

    document.getElementById("tabela-bicho").appendChild(xenix);

    i++;
  }
};

window.onload = () => bichos_exec();
