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

    let imagem = document.createElement("img");
    imagem.src = "/img/" + bichos[i] + ".jpg";
    imagem.className = "bichos";
    xenix.appendChild(imagem);

    document.getElementById("tabela-bicho").appendChild(xenix);

    console.log(bichos[i]);
    i++;
  }
};

window.onload = () => bichos_exec();
