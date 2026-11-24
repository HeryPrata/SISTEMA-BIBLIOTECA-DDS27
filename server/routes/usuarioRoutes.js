// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUÁRIO
const usuarioControllers = require("../controllers/usuarioControllers.js")

// ROTAS DO USUÁRIOS
// LOGIN
router.get("/login", usuarioControllers.login)

// CRUD
// MOSTRA A PÁGINA DE CRIAR USUÁRIO
router.get("/cadastrar", (req,res) => {
    res.render("usuarios/cadastrar");
})

// MANDAR AS INFORMACOES DE CADASTRO PARA O CONTROLLER
router.post("/cadastrar", usuarioControllers.criar)

// MOSTRA A PÁGINA DE EDITAR USUÁRIO
router.get("/editar/:id", usuarioControllers.renderizarEditar)

router.post("/editar/:id", usuarioControllers.editar)

// MOSTRA A PÁGINA DE LISTAR USUÁRIOS
router.get("/listar", usuarioControllers.listar)

router.get("/", usuarioControllers.listar)

//ROTA DE DELETAR UM USUARIO
router.post("/deletar/:id", usuarioControllers.deletar)
// EXPORTAR O ROUTER
module.exports = router