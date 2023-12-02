const express = require('express');
const router = express.Router();

//pegamos a entidade em si dessa forma usando .Editora
const Usuario = require('../models/UsuarioModel');

//Busca Editoras (GET)
router.get('/teste', async (req, res) => {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
});

router.get('/login', async (req, res) => {
   
    const {email, senha} = req.body;
    const login = await Usuario.findOne({
        where: {
            email: email,
            senha: senha
        }
    }).then(function (result) {
        if (result) {
            res.status(200).json({message:'login feito com sucesso'});
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