const express = require('express');
const app = express();
const router = express.Router();
const session = require("express-session");

const Usuario = require('../models/UsuarioModel');



//Configs da sessão
app.use(session({
    name: 'teste',
    secret: 'adsadsadsdasaadadss',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));



router.get('/login', async (req, res) => {
   
    const {email, senha} = req.body;
    const login = await Usuario.findOne({
        where: {
            email: email,
            senha: senha
        }
    }).then(function (result) {
        if (result) {
            req.session = result
            console.log(req.session.email);
            res.status(200).json({message: req.session.email});
        } else {
            res.status(401).json({message:'Verifique email ou senha de usuario'});
        }

    });

});


router.post('/cadastrar', async (req, res) => {

    const {email, senha} = req.body;
    const login = await Usuario.findOne({
        where: {
            email: email
        }
    }).then(function (result) {
        if (result) {
            res.status(401).json({message:'Este usuario ja existe'});
        } else {
            const newUser =  Usuario.create({email, senha})
            res.status(200).json({ message: 'Cadastrado com sucesso' });
        }

    });

});


module.exports = router;