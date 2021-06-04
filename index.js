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

let grupo = [];
let duplo = [];
let terno = [];
let quadra = [];
let quina = [];
let pulo = [];

let dinheiro_quant = 100;
let dinheiro_max = 9999;

const bichos_exec = () => {
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
    let valor = i + 1;

    if (valor >= 1 && valor < 10) {
      valor = "0" + valor;
    }

    numero_grupo.innerHTML = valor;
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

  let dinheiro_display = document.createElement("p");
  let header = document.getElementById("cabecalho");
  dinheiro_display.id = "dinheiro";
  dinheiro_display.innerHTML = "R$ " + dinheiro_quant;
  header.appendChild(dinheiro_display);

  let botao_adicionar = document.createElement("button");
  botao_adicionar.id = "adicionar";
  botao_adicionar.innerHTML = "+";
  botao_adicionar.onclick = function () {
    adicionar_dinheiro();
  };
  header.appendChild(botao_adicionar);
};

const sistema_dinheiro = () => {
  let subtracao = document.getElementById("inserir_dinheiro_bicho").value;
  let subtracao_real = parseInt(subtracao);
  let tio_vera = document.getElementById("dinheiro");
  tio_vera.innerHTML = "R$ " + (dinheiro_quant - subtracao_real);
  dinheiro_quant = dinheiro_quant - subtracao_real;
};

const adicionar_dinheiro = () => {
  if (document.getElementById("div_adicionar")) {
    document.getElementById("div_adicionar").remove();
  }

  let divzona = document.createElement("div");
  divzona.id = "div_adicionar";
  let xis = document.createElement("button");
  xis.id = "botao_xis";
  xis.innerHTML = "x";
  xis.onclick = function () {
    limpar_div_adicionar();
  };
  let texto = document.createElement("label");
  texto.id = "texto_input_adicionar";
  texto.innerHTML = "Insira a quantidade:";
  let input = document.createElement("input");
  input.id = "claudinho";
  input.type = "number";
  if (input.which === 48) {
    return false;
  }
  input.onkeydown = function (e) {
    if (
      !(
        (e.keyCode > 95 && e.keyCode < 106) ||
        (e.keyCode > 47 && e.keyCode < 58) ||
        e.keyCode == 8
      )
    ) {
      return false;
    }
  };
  let pafuncio = document.createElement("button");
  pafuncio.id = "pafuncio";
  pafuncio.innerHTML = "Adicionar";
  pafuncio.onclick = function () {
    alcione();
  };
  divzona.style.position = "absolute";
  divzona.style.left = "55";
  divzona.style.right = "43";
  document.getElementById("master").appendChild(divzona);
  divzona.appendChild(texto);
  texto.appendChild(xis);
  texto.appendChild(input);
  divzona.appendChild(pafuncio);
};

const limpar_div_adicionar = () => {
  document.getElementById("div_adicionar").remove();
};

const alcione = () => {
  let input = document.getElementById("claudinho");
  let dinheiro_display = document.getElementById("dinheiro");

  if (document.getElementById("mensagem_erro_adicionar")) {
    document.getElementById("mensagem_erro_adicionar").remove();
  }
  if (input.value === "" || input.value == 0 || input.value > dinheiro_max) {
    let mensagem_erro = document.createElement("p");
    mensagem_erro.id = "mensagem_erro_adicionar";
    mensagem_erro.innerHTML = "Número inválido ou maior que o limite.";
    document.getElementById("div_adicionar").appendChild(mensagem_erro);
    return false;
  }
  valor_real = parseInt(input.value);
  dinheiro_display.innerHTML = "R$" + (dinheiro_quant + valor_real);
  dinheiro_quant += valor_real;
  if (dinheiro_quant > dinheiro_max) {
    console.log("O limite de dinheiro foi atingido. Cu");
    console.log("dinheiro antes da operação:" + dinheiro_quant);
    dinheiro_quant = dinheiro_max;
    console.log("dinheiro após a operação:" + dinheiro_quant);
    dinheiro_display.innerHTML = "R$" + dinheiro_quant;
  }
};

let modus_operandi = [];

const paulinho_gogo = (elem) => {
  try {
    document.getElementById(modus_operandi[0]).style.backgroundColor =
      "#f0f1f1";
  } catch {}
  modus_operandi.shift();
  modus_operandi.push(elem.id);
  document.getElementById(modus_operandi[0]).style.backgroundColor = "#bdbdbd";

  if (elem.id === "grupo") {
    let klevitz = 0;
    for (let xerecard = 0; xerecard < duplo.length; xerecard++) {
      document.getElementById(duplo[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < terno.length; xerecard++) {
      document.getElementById(terno[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quadra.length; xerecard++) {
      document.getElementById(quadra[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quina.length; xerecard++) {
      document.getElementById(quina[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < pulo.length; xerecard++) {
      document.getElementById(pulo[xerecard]).style = "grayscale(0)";
    }
    duplo = [];
    terno = [];
    quadra = [];
    quina = [];
    pulo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_grupo(this);
      };
      klevitz++;
    }
  }
  if (elem.id === "duplo") {
    let klevitz = 0;
    try {
      document.getElementById(grupo[klevitz]).style.filter = "grayscale(0)";
    } catch {}
    for (let xerecard = 0; xerecard < terno.length; xerecard++) {
      document.getElementById(terno[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quadra.length; xerecard++) {
      document.getElementById(quadra[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quina.length; xerecard++) {
      document.getElementById(quina[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < pulo.length; xerecard++) {
      document.getElementById(pulo[xerecard]).style = "grayscale(0)";
    }
    terno = [];
    quadra = [];
    quina = [];
    grupo = [];
    pulo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_duplo(this);
      };
      klevitz++;
    }
  }

  if (elem.id === "terno") {
    let klevitz = 0;
    try {
      document.getElementById(grupo[klevitz]).style.filter = "grayscale(0)";
    } catch {}
    for (let xerecard = 0; xerecard < duplo.length; xerecard++) {
      document.getElementById(duplo[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quadra.length; xerecard++) {
      document.getElementById(quadra[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quina.length; xerecard++) {
      document.getElementById(quina[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < pulo.length; xerecard++) {
      document.getElementById(pulo[xerecard]).style = "grayscale(0)";
    }
    duplo = [];
    quadra = [];
    quina = [];
    grupo = [];
    pulo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_terno(this);
      };
      klevitz++;
    }
  }

  if (elem.id === "quadra") {
    let klevitz = 0;
    try {
      document.getElementById(grupo[klevitz]).style.filter = "grayscale(0)";
    } catch {}
    for (let xerecard = 0; xerecard < duplo.length; xerecard++) {
      document.getElementById(duplo[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < terno.length; xerecard++) {
      document.getElementById(terno[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quina.length; xerecard++) {
      document.getElementById(quina[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < pulo.length; xerecard++) {
      document.getElementById(pulo[xerecard]).style = "grayscale(0)";
    }
    duplo = [];
    terno = [];
    quina = [];
    grupo = [];
    pulo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_quadra(this);
      };
      klevitz++;
    }
  }
  if (elem.id === "quina") {
    let klevitz = 0;
    try {
      document.getElementById(grupo[klevitz]).style.filter = "grayscale(0)";
    } catch {}
    for (let xerecard = 0; xerecard < duplo.length; xerecard++) {
      document.getElementById(duplo[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < terno.length; xerecard++) {
      document.getElementById(terno[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quadra.length; xerecard++) {
      document.getElementById(quadra[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < pulo.length; xerecard++) {
      document.getElementById(pulo[xerecard]).style = "grayscale(0)";
    }
    duplo = [];
    terno = [];
    quadra = [];
    grupo = [];
    pulo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_quina(this);
      };
      klevitz++;
    }
  }
  if (elem.id === "pulo") {
    let klevitz = 0;
    try {
      document.getElementById(grupo[klevitz]).style.filter = "grayscale(0)";
    } catch {}
    for (let xerecard = 0; xerecard < duplo.length; xerecard++) {
      document.getElementById(duplo[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < terno.length; xerecard++) {
      document.getElementById(terno[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quadra.length; xerecard++) {
      document.getElementById(quadra[xerecard]).style = "grayscale(0)";
    }
    for (let xerecard = 0; xerecard < quina.length; xerecard++) {
      document.getElementById(quina[xerecard]).style = "grayscale(0)";
    }
    duplo = [];
    terno = [];
    quadra = [];
    quina = [];
    grupo = [];
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        habilitar_pulo(this);
      };
      klevitz++;
    }
  }
};

const habilitar_grupo = (elem) => {
  if (grupo.length == 0) {
    grupo.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    let klevitz = 0;
    inserir_dinheiro(grupo);
    while (klevitz < 25) {
      document.getElementById(bichos[klevitz]).onclick = function () {
        desabilitar_grupo(this);
      };
      klevitz++;
    }
  }
};

const desabilitar_grupo = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0%) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < grupo.length; i++) {
      if (grupo[i] === elem.id) {
        grupo.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (grupo.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_grupo(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_grupo(elem);
  }
};

const habilitar_duplo = (elem) => {
  if (duplo.length < 2) {
    duplo.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    elem.vlrArray = duplo.length - 1;
    console.log(duplo.length);
  }

  let klevitz = 0;
  if (duplo.length === 2) {
    inserir_dinheiro(duplo);
  }
  while (klevitz < 25) {
    document.getElementById(bichos[klevitz]).onclick = function () {
      desabilitar_duplo(this);
    };
    klevitz++;
  }
};

const desabilitar_duplo = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0%) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < duplo.length; i++) {
      if (duplo[i] === elem.id) {
        duplo.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (duplo.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_duplo(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_duplo(elem);
  }
};

const habilitar_terno = (elem) => {
  if (terno.length < 3) {
    terno.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    elem.vlrArray = terno.length - 1;
    console.log(elem.vlrArray);
  }

  let klevitz = 0;
  if (terno.length === 3) {
    inserir_dinheiro(terno);
  }
  while (klevitz < 25) {
    document.getElementById(bichos[klevitz]).onclick = function () {
      desabilitar_terno(this);
    };
    klevitz++;
  }
};

const desabilitar_terno = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0%) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < terno.length; i++) {
      if (terno[i] === elem.id) {
        terno.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (terno.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_terno(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_terno(elem);
  }
};

const habilitar_quadra = (elem) => {
  if (quadra.length < 4) {
    quadra.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    elem.vlrArray = quadra.length - 1;
    console.log(elem.vlrArray);
  }

  let klevitz = 0;
  if (quadra.length === 4) {
    inserir_dinheiro(quadra);
  }
  while (klevitz < 25) {
    document.getElementById(bichos[klevitz]).onclick = function () {
      desabilitar_quadra(this);
    };
    klevitz++;
  }
};

const desabilitar_quadra = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0%) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < quadra.length; i++) {
      if (quadra[i] === elem.id) {
        quadra.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (quadra.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_quadra(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_quadra(elem);
  }
};

const habilitar_quina = (elem) => {
  if (quina.length < 5) {
    quina.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    elem.vlrArray = quina.length - 1;
  }

  let klevitz = 0;
  if (quina.length === 5) {
    inserir_dinheiro(quina);
  }
  while (klevitz < 25) {
    document.getElementById(bichos[klevitz]).onclick = function () {
      desabilitar_quina(this);
    };
    klevitz++;
  }
};

const desabilitar_quina = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < quina.length; i++) {
      if (quina[i] === elem.id) {
        quina.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (quina.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_quina(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_quina(elem);
  }
};

const habilitar_pulo = (elem) => {
  if (pulo.length < 2) {
    pulo.push(elem.id);
    elem.style.webkitFilter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.style.filter = "grayscale(100%) blur(0.7987220447284346vh)";
    elem.estado = 1;
    elem.vlrArray = pulo.length - 1;
  }

  let klevitz = 0;
  if (pulo.length === 2) {
    inserir_dinheiro(pulo);
  }
  while (klevitz < 25) {
    document.getElementById(bichos[klevitz]).onclick = function () {
      desabilitar_pulo(this);
    };
    klevitz++;
  }
};

const desabilitar_pulo = (elem) => {
  if (elem.estado == 1) {
    elem.style.webkitFilter = "grayscale(0) blur(0)";
    elem.style.filter = "grayscale(0) blur(0)";
    elem.estado = 0;

    for (let i = 0; i < pulo.length; i++) {
      if (pulo[i] === elem.id) {
        pulo.splice(i, 1);
      }
    }

    elem.vlrArray = 0;
    let klevitz = 0;

    if (pulo.length == 0) {
      while (klevitz < 25) {
        document.getElementById(bichos[klevitz]).onclick = function () {
          habilitar_pulo(this);
        };
        klevitz++;
      }
    }
  } else {
    elem.onclick = "";
    habilitar_pulo(elem);
  }
};

const jubileu = () => {
  if (document.getElementById("xerupita")) {
    document.getElementById("xerupita").remove();
  }
};

const inserir_dcm = (elem) => {
  if (document.getElementById("xerupita")) {
    document.getElementById("xerupita").remove();
  }

  paulinho_gogo(elem);

  let carlos = document.getElementById("tipos-aposta");
  let criar_input = document.createElement("input");
  criar_input.id = "xerupita";
  criar_input.maxlength = 3;
  criar_input.min = 0;
  criar_input.type = "number";
  criar_input.placeholder = `Insira a ${elem.value}`;
  carlos.appendChild(criar_input);
  limpar_inserir_dinheiro();
};

const enviar_aposta = (elem) => {
  let input = document.getElementById("inserir_dinheiro_bicho");

  if (document.getElementById("mensagem_erro_input")) {
    document.getElementById("mensagem_erro_input").remove();
  }

  if (input.value === "" || input.value == 0 || input.value > dinheiro_quant) {
    let mensagem_erro = document.createElement("p");
    mensagem_erro.id = "mensagem_erro_input";
    mensagem_erro.innerHTML = "Número inválido ou maior que o atual.";
    let menu = document.getElementById("tipos-aposta");
    menu.appendChild(mensagem_erro);
    return false;
  }

  if (grupo.length === 1) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${grupo}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    erase_all(grupo);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }

  if (duplo.length === 2) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${duplo}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    erase_all(duplo);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }

  if (terno.length === 3) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${terno}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    erase_all(terno);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }

  if (quadra.length === 4) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${quadra}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    erase_all(quadra);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }

  if (quina.length === 5) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${quina}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    erase_all(quina);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }

  if (pulo.length === 2) {
    let enviar_texto_historico = document.createElement("p");
    let espaco_historico = document.getElementById("historico_inner");
    enviar_texto_historico.className = "texto_inner_historico";
    enviar_texto_historico.innerHTML = `Você apostou x reais em: ${pulo}.`;
    espaco_historico.appendChild(enviar_texto_historico);
    if (document.getElementById("opcao_inverter").estado == 1) {
      let enviar_texto_invertida_historico = document.createElement("p");
      enviar_texto_invertida_historico.className = "texto_inner_historico";
      enviar_texto_invertida_historico.innerHTML = `Você apostou x reais no pulo invertido: ${pulo.slice().reverse()}.`;
      espaco_historico.appendChild(enviar_texto_invertida_historico);
      sistema_dinheiro();
    }
    erase_all(pulo);
    sistema_dinheiro();
    limpar_inserir_dinheiro();
  }
};

const erase_all = (elem) => {
  for (let xerecard = 0; xerecard < elem.length; xerecard++) {
    document.getElementById(elem[xerecard]).style = "grayscale(0) blur(0)";
    document.getElementById(elem[xerecard]).estado = 0;
  }
  grupo = [];
  duplo = [];
  terno = [];
  quadra = [];
  quina = [];
  pulo = [];
};

const inserir_dinheiro = (elem) => {
  tamanhoMaximo = elem.length + 1;
  if (tamanhoMaximo) {
    console.log("pirurpiruprripriuro");
    limpar_inserir_dinheiro();
  }
  let labelzona = document.createElement("label");
  labelzona.id = "texto_inserir_dinheiro_bicho";
  labelzona.innerHTML = "Aposta R$:";
  let menu = document.getElementById("tipos-aposta");
  let input = document.createElement("input");
  input.type = "number";
  input.id = "inserir_dinheiro_bicho";
  let mittagessen = document.createElement("input");
  mittagessen.type = "checkbox";
  mittagessen.id = "opcao_inverter";
  mittagessen.style.display = "none";
  mittagessen.onclick = function () {
    mozambique(pulo);
  };
  let label_mittagessen = document.createElement("label");
  label_mittagessen.id = "label_inverter";
  label_mittagessen.style.display = "none";
  label_mittagessen.innerHTML = "Inverter:";
  if (elem === pulo) {
    console.log("Pulo ativado");
    mittagessen.style.display = "flex";
    label_mittagessen.style.display = "flex";
  }
  if (input.which === 48) {
    return false;
  }
  input.onkeydown = function (e) {
    if (
      !(
        (e.keyCode > 95 && e.keyCode < 106) ||
        (e.keyCode > 47 && e.keyCode < 58) ||
        e.keyCode == 8
      )
    ) {
      return false;
    }
  };
  menu.appendChild(labelzona);
  menu.appendChild(input);
  label_mittagessen.appendChild(mittagessen);
  menu.appendChild(label_mittagessen);
};

const mozambique = (elem) => {
  document.getElementById("opcao_inverter").estado = 1;
  let invertida = elem.slice().reverse();
  console.log("Essa função funcionou e o valor da array é:" + invertida);
  return invertida;
};

const limpar_inserir_dinheiro = () => {
  if (
    document.getElementById("texto_inserir_dinheiro_bicho") &&
    document.getElementById("inserir_dinheiro_bicho") &&
    document.getElementById("label_inverter")
  ) {
    document.getElementById("texto_inserir_dinheiro_bicho").remove();
    document.getElementById("inserir_dinheiro_bicho").remove();
    document.getElementById("label_inverter").remove();
  }
};

window.onload = () => bichos_exec();
