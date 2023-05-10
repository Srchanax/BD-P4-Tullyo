const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('Taveirinha.test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados.');
});

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS TB_PESSOA(nome TEXT NOT NULL PRIMARY KEY, idade INTEGER, altura TEXT, peso TEXT, aniversario TEXT)");
  db.run("INSERT INTO TB_PESSOA(nome, idade, altura, peso, aniversario) VALUES('Tulio', 18, '1,76', '47 KG', '20/09'), ('Mario', 17, '1,68', '45 KG', '12/07'), ('Ana', 15, '1,65', '46 KG', '20/10'), ('Raquel', 19, '1,79', '52 KG', 15/12), ('Marcos', 18, '1,66', '49 KG', '12/05')");
  db.each("SELECT nome, idade, altura, peso, aniversario FROM TB_PESSOA", (err, row) => {
    console.log();
    console.log(row.nome + " | " + row.idade + " | " + row.altura + " | " + row.peso + " | " + row.aniversario + " | ");
  });
});
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log();
  console.log('Conexão com o banco de dados encerrada.');
});