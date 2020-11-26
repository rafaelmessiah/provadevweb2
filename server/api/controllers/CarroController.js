const carro = require('../models/CarroSchema');

class CarroController {

    async cadastrar(req, res){
        try {
            
            var result = await carro.findOne({
                "placa": req.body.placa
            });
            if(result){
                res.status(200).json({
                    'mensagem': 'Esta placa já está cadastrada'
                });
            }else{
                var result = await carro.create(req.body);
                res.status(201).json(result);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
 
    async buscar(req, res){
        var result = await carro.findOne({
            "placa": req.params.placa
        });
        if(result){
            res.status(200).json(result);
        }else{
            res.status(200).json({
                'mensagem': 'Não foi possível encontrar o veiculo'
            });
        }
    }

    async listar(req, res){
        var result = await carro.find({});
        res.status(200).json(result);
    }

    async alterar(req, res){
        try {
            var result = await carro.updateOne({
                "placa": req.body.placa,
            }, {
                "modelo": req.body.modelo,
                "ano": req.body.ano
            });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deletar(req, res){
        try {
            var result = await carro.deleteOne({
                "placa": req.params.placa
            });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new CarroController();