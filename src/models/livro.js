const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    anoPublicacao: {
        type: Number,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },
    satus: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('livro', LivroSchema )