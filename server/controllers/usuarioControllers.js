//IMPORTACAO DO MODEL
const usuarioModels = require("../models/usuarioModels")

// EXPORTAR AS FUNCOES DO CONTROLLER
module.exports = {
    login : (req, res) => {
        //EXECUTAR A FUNCAO MODEL
        usuarioModels.login()

        //DIZ A RESPOSTA
        res.send("VOU CHAMAR O MODEL PARA LOGAR")
    },
    //CRUD
    //CREATE
    criar: (req, res) =>{
        usuarioModels.criarUsuario()
        res.send("CRIE UM USUARIO")
    },
    //READ
    listar : (req, res) => {
        usuarioModels.listarUsuarios()
        res.send("MOSTREI A LISTA DE USUARIOS")
    },
    //UPDATE
    atualizar: (req, res) =>{
        usuarioModels.atualizarUsuario()
        res.send("ATUALIZEI UM USUARIO")
    },
    //DELETE
    deletar: (req, res) =>{
        usuarioModels.deletarUsuario()
        res.send("DELETEI UM USUARIO")
    }
}