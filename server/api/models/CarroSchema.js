const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const carro = new mongoose.Schema({
    modelo: {
        type: String,
        equired: [true, "É necessário o Modelo do carro"],
    },
    placa: {
        type: String,
        unique : true,
        required: [true, "É necessário a Placa do carro"],
    },
    ano: {
        type: Number,
        required: [true, "É necessário o Ano do carro"],
    },
    criadoEm: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model("Carros", carro);
