//IMPORTANDO AS CONFIGURACOES DO BANCO
const db = require("../config/db")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    //LOGIN 
    login : (req, res) => {
        console.log("LOGIN USUARIO FUNCIONANDO")
        res.send(usuarioModels.login())
    },
    //CRUD
    //CREATE
    criarUsuario : (req, res) =>{
        console.log("CRIEI UM USUARIO")
        res.send(usuarioModels.criarUsuario())
    },
    //READ
    listarUsuarios : (req, res) => {
        console.log("TOMA AI OS USUARIOS")
        res.send(rusuarioModels.listarUsuarios())
    },
    //UPDATE
    atualizarUsuario: (req, res) =>{
        console.log("ATUALIZEI UM USUARIO")
        res.send(usuarioModels.atualizarUsuario())
    },
    //DELETE
    deletarUsuario: (req, res) =>{
        usuarioModels.deletarUsuario()
        res.send(console.log("APAGUEI UM USUARIO"))
    }
}