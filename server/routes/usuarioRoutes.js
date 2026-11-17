const express = require("express")
const router = express.Router() // LISTA DE ROTAS

//IMPORTAR O CONTROLLER DO USUARIO
const usuarioControllers = require("../controllers/usuarioControllers")

//ROTAS DO USUARIOS
//LOGIN
router.get("/login", usuarioControllers.login)
//CRUD

//MOSTRA A PAGINA DE CRIAR USUARIO
router.get("/cadastro", (req,res) => {
    res.render("usuarios/cadastrar")

})

router.get("/", (req, res) =>{
    res.send("Mostrando a lista de usuários")
})



//EXPORTAR O ROUTER
module.exports = router
