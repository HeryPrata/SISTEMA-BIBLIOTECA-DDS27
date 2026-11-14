//IMPORTACAO DO MODO DO EXPRESS
const express = require('express');
const app = express();
// MÓDULO DO NODE PARA LIDAR COM CAMINHO DE ARQUIVOS
const path = require("path")
// IMPORTAR O MODULO DO DOTENV, LE O ARQUIVO .ENV, E JA CONFIGURA O BANCO
require("dotenv").config();

//DEFINE A PORTA DO SERVIDOR
const port = process.env.PORT || 5000

//CONFIGURAR O EJS COMO TEMPLATE ENGINE
//DEFINE O EJS COMO ENGINE DO FRONT - INTERPRETA AS PÁGINAS
app.set("view engine", "ejs")
//APONTAR PARA O EJS ONDE ESTÃO AS PAGINAS
app.set("views", path.join(__dirname, "../client/views") )

//CRIACAO DAS ROTAS
//ROTAS PÚBLICAS
app.get('/', (req, res) => {
  res.render("index")
})
app.get('/login', (req, res) => {
  res.render("login")
})


//TRAZ AS CONFIGURAÇÕES DO BANCO
const pool = require("./config/db.js");

//FORÇA A CONEXÃO COM O BANCO. 
(
  async () => { // async = disparo pro banco quando não se sabe quando vai ter uma resposta
    try{
      // SE O BANCO ESTIVER ATIVO, INICIA O SERVIDOR DO BANCO
      await pool.getConnection() // await = o que voce espera de pool, nesse contexto que ele se conecte ao banco
      // SE O BANCO SUBIU, SOBE O BACKEND
      //FUNCÃO PARA SUBIR O SERVIDOR
      app.listen(port, () => {
        console.log(`Servidor na porta: ${port}`)
        console.log(`Link: http://localhost:${port}`)
      })
    }
    catch(erro){
      //SE DEU ERRO, AVISA E ENCERRA A TENTATIVA
      console.log("Erro ao conectar com o banco: ", erro)
      process.exit(1)
    }
  }
)()

