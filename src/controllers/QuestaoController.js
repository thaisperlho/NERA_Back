const express = require('express');
const app = express();
const router = express.Router();

const Questao = require('../models/QuestaoModel');

router.get('/', async (req, res) => {
    const questao = await Questao.findAll();
    res.status(200).json(questao);
});

module.exports = router;