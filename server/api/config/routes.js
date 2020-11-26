const express = require("express");
const router = express.Router();

const carro = require('../controllers/CarroController');

router.post('/carro/cadastrar', carro.cadastrar);
router.get('/carro/buscar/:placa', carro.buscar);
router.get('/carro/listar', carro.listar);
router.put('/carro/alterar', carro.alterar);
router.delete('/carro/remover/:placa', carro.deletar);

module.exports = router;