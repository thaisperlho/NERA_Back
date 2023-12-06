const express = require('express');
const app = express();
const router = express.Router();

const Questao = require('../models/QuestaoModel');


//retorna a questao atraves do id 
router.get('/alternativa/:id', async (req, res) => {
    const questao = await Questao.findByPk(req.params.id);
    res.status(200).json(questao);
});


//verifica a alternativa correta atraves do id,
//alternativa precisa ser um str, por exeplo "1/8"
router.post('/verificar', async (req, res) => {
    const {id, alternativa} = req.body;
    const questao = await Questao.findByPk(id);
    
    if (alternativa == questao.alternativa_correta) {
        res.status(200).json({message:'Correta'});
    }else{
        res.status(200).json({message:'errada'});
    }

});

module.exports = router;