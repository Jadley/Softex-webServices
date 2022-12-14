const { response } = require("express");
const express = require("express");

const server = express();

server.use(express.json());

const clubes = ["Sport", "Santa cruz", "Nautico", "Retrô"];

//GET de apenas um item.
server.get("/clubes/:index", (req, res) => {
  const { index } = req.params;
  if (clubes[index] == undefined) {
    res.status(400).json({ error: "requisição inválida" });
  } else {
    res.status(200).json(clubes);
    return res.json(clubes[index]);
  }
});

//GET de todos os itens,
server.get("/clubes", (req, res) => {
  return res.json(clubes);
});

//POST criando um novo curso.
server.post("/clubes", (req, res) => {
  const { name } = req.body;
  clubes.push(name);

  return res.json(clubes);
});

//PUT atualizando dados.
server.put("/clubes/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  clubes[index] = name;
  return res.json(clubes);
});

//DELETE deletando um item.
server.delete("/clubes/:index", (req, res) => {
  const { index } = req.params;
  if (clubes[index] == undefined) {
    res.status(400).json({ error: "O clube selecionado não existe." });
  } else {
    clubes.splice(index, 1);
    return res.json({ message: "o clube foi removido" });
  }
});

server.listen(3000);
