const { rastrearEncomendas } = require("correios-brasil");

let codRastreio = ["NA573913926BR"]; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then((response) => {
  console.log(response[0].eventos.reverse());
  // O reverse é apenas para organizarmos os dados do rastreio do mais antigo para o mais recente !
});
