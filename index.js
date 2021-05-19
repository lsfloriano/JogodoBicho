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
    "jacaré",
    "leão",
    "macaco",
    "porco",
    "pavão",
    "peru",
    "touro",
    "tigre",
    "urso",
    "veado",
    "vaca",
  ];

  let dezenas = [
    "01 02 03 04",
    "05 06 07 08",
    "09 10 11 12",
    "13 14 15 16",
    "17 18 19 20",
    "21 22 23 24",
    "25 26 27 28",
    "29 30 31 32",
    "33 34 35 36",
    "37 38 39 40",
    "41 42 43 44",
    "45 46 47 48",
    "49 50 51 52",
    "53 54 55 56",
    "57 58 59 60",
    "61 62 63 64",
    "65 66 67 68",
    "69 70 71 72",
    "73 74 75 76",
    "77 78 79 80",
    "81 82 83 84",
    "85 86 87 88",
    "89 90 91 92",
    "93 94 95 96",
    "97 98 99 00",
  ];

  let i = 0;

  while (i < bichos.length) {
    let xenix = document.createElement("div");
    xenix.className = "bicho-container";
    xenix.id = bichos[i];

    let nome = document.createElement("p");
    nome.className = "nome_bicho";
    nome.innerHTML = bichos[i].charAt(0).toUpperCase() + bichos[i].slice(1);
    xenix.appendChild(nome);

    let numero_grupo = document.createElement("p");
    numero_grupo.className = "numero_grupo_bicho";
    numero_grupo.innerHTML = i + 1;
    xenix.appendChild(numero_grupo);

    let dezenas_grupos_bichos = document.createElement("p");
    dezenas_grupos_bichos.className = "dezenas_bichos";
    dezenas_grupos_bichos.innerHTML = dezenas[i];
    xenix.appendChild(dezenas_grupos_bichos);

    let imagem = document.createElement("img");
    imagem.src = "img/" + bichos[i] + ".jpg";
    imagem.className = "bichos";
    xenix.appendChild(imagem);

    document.getElementById("tabela-bicho").appendChild(xenix);

    i++;
  }

  document.getElementsByClassName("btn-tipo-aposta").onclick = function() {insertNumeros()};

  // function insertNumeros() {
  //   let carlos =  document.getElementById('tipos-aposta');
  //   let criar_input = document.createElement('input');
  //   criar_input.type = 'number';
  //   carlos.appendChild(criar_input); 
  // }
};

window.onload = () => bichos_exec();
