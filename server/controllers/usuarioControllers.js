// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js")

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
    // LOGIN    
    login : async (req,res) => {
        try{
            //COLEA AS INFORMACOES DO BODY DA REQUISICAO
            const {email, senha} = req.body

            //PASS AS INFORMACOES PRO MODEL
            const usuarioLogado = await usuarioModels.login(email, senha)

            //SE NAO TIVER USUARIO, JA RETORNA A PAGINA DE ERRO.
            if(!usuarioLogado){
                return res.render("erro", {erro, mensagem: "Credenciais invalidas"})
            }

            //GUARDA O USUARIO NA SESSAO
            req.session.usuario = usuarioLogado

            // ATIVA A FUNÇÃO DE SALVER, E GARANTE QUE TERA UMA SESSION
            req.session.save((erro) => {
                if(erro){
                    return res.render("erro", {erro, mensagem: "Erro ao criar sessão"})

                }
                //SE DEU CERTO O REDIRECIONAMENTO
                res.redirect("/usuarios")
            })
        }

        catch (erro){
            //MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            //RENDERIZA A PAGINA DE ERRO, MOSTRANDO PRO USUARIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao logar"})
        }
    },
    // CRUD
    // CREATE
    criar: async (req, res) =>{
        try{
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { nome, email, senha, perfil } = req.body

            // PASSA AS INFORMAÇÕES PRO MODEL
            await usuarioModels.criarUsuario(nome, email, senha, perfil)

            // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
            res.redirect("/usuarios")
        }
        catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao criar o usuário"} )
        }
    },
    // READ
    listar: async (req,res) => {
        try{
            // executa o model
            const listaUsuarios = await usuarioModels.listarUsuarios()
            // renderiza a tela de lista, passando o que o model te mandou
            res.render('usuarios/listar', { listaUsuarios })
        }
        catch(erro){
            console.log(erro);
            res.render("erro", { erro, mensagem: "Erro ao listar os usuários"})
        }
    },
    // UPDATE
    atualizar: (req, res) =>{
        usuarioModels.atualizarUsuario()
        res.send("ATUALIZEI UM USUÁRIO")          
    },
    // DELETE
    deletar: async (req, res) => {
        try {
            // PEGAR O ID, VINDO DA URL, ATRAVES DOS PARAMETROS
            const idDaUrl = req.params.id

            // MANDA PRO MODEL O ID PRA ELE FAZER O SERVICO
            await usuarioModels.deletarUsuario(idDaUrl)

            // REDIRECIONA PARA LISTA DE USUARIOS
            res.redirect("/usuarios")
        }

        catch (erro) {
            console.log(erro);
            res.render("erro", {erro, mensagem: "Erro ao deletar o usuario"})
        }
    },

    //EDITAR
    renderizarEditar: async(req,res) => {
        try{

            const idDaUrl = req.params.id

            //CHAMA O MODEL, PARA COLETAR AS INFORMACOES DO USUARIO
            const usuarioEditado = await usuarioModels.buscarPorId(idDaUrl)

            //RENDERIZA A PAGINA DE EDITAR, PASSANDO AS INFORMACOES DO USUARIO
            res.render("usuarios/editar", {usuarioEditado})
        
        }

        catch(erro){
            console.log(erro);
            res.render("erro", {erro, mensagem: "Erro ao deletar o usuario"})
        }
    },

    editar: async (req, res) =>{
       try{
            const idDaUrl = req.params.id
        
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { nome, email, senha, perfil } = req.body

            // PASSA AS INFORMAÇÕES PRO MODEL
            await usuarioModels.criarUsuario(nome, email, senha, perfil)

            // REDIRECIONA PARA LISTA DE USUARIOS
            res.redirect("/usuarios")
       }
       
       catch(erro){
            console.log(erro)
            res.render("erro", {erro, mensagem: "erro ao editar o usuario"})        
       }
    }
}