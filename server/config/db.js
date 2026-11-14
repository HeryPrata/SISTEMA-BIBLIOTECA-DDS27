//IMPORTANDO O MODULO DO MYSQL PARA CONECTAR AO BANCO
const mysql = require("mysql2/promise")
//CRIA UMA POOL DE CONEXÃO, PARA EVITAR ERROS NO BANCO POR SUPERLOTAÇÃO
const pool = mysql.createPool(
    {
        host: process.env.DB_HOST, //ONDE O BANCO ESTÁ HOSPEDADO
        user: process.env.DB_USER, //USARIO QUE FARA A CONEXÃO
        password: process.env.DB_PASSWORD, // SENHA DO USUARIO
        database: process.env.DB_NAME, //BANCO AO QUAL SE DESEJA CONECTAR
        // SE TODOS ESTIVERAM OCUPADOS, DEIXA UM ESPERANDO, SEM DAR ERRO
        waitForConnections: true,
        // QUANTIDADE MAXIMA DE CONEXOES AO MESMO TEMPO
        connectionLimit: 10,
        // MAXIMO DE LISTA DE ESPERA
        queueLimit: 0 // 0 = ILIMITADO

        

    }
)

//EXPORTACAO DA POOL
module.exports = pool