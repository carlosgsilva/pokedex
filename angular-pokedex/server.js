const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/NOME_DO_SEU_PROJETO"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/NOME_DO_SEU_PROJETO/index.html"));
});

app.listen(process.env.PORT || 8080);