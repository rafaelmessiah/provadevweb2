const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://rafaelmessiah:cluster123@cluster0.roeri.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Conexão estabelecida com o banco de dados...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Algum erro aconteceu com a conexão do banco. \n${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectamos com o banco de dados...");
});

module.exports = db;