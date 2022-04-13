const exist = require('./existLivro')
const mongoose = require('mongoose')
const Livros = require('../models/livro')



var livros = []
var idIn = 0


module.exports = {
    index: async (req, res) => {
        const livros = await Livros.find()
        return res.status(200).json(livros)
    },

    indexId: async (req, res) => {
        try {
            const livro = await Livros.findById(req.params.id)
            if(livro == null) {
                return res.status(404).json({message: 'titulo nao encontrado'})
            }
            return res.status(200).json(livro)
        } catch (error) {
            res.status(500).json({ message: error.message })
    
        }
    },

    store: async (req, res) => {

        const { titulo, editora, anoPublicacao, tipo } = req.body

        const livro = new Livros({
            _id: new mongoose.Types.ObjectId(),
            titulo, editora, anoPublicacao, tipo
        })

        console.log(Livros.findOne({ titulo: titulo }))

        if (titulo && await Livros.findOne({ titulo: titulo })) {
            return res.status(201).json({ message: "Livro já existe" })

        }

        try {

            const newLivro = await livro.save()
            return res.status(201).json(newLivro)

        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    },

    delete: async (req, res) => {

        try {
            const titulo = await Livros.findById(req.params.id)
            if (titulo == null) {
                return res.status(404).json({ message: 'Livro não encontrado' })
            }

            await titulo.remove()
            return res.json({ message: 'Livro deletado com sucesso!' })

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    update: async (req, res) => {

        const{titulo,editora,anoPublicacao,tipo} = req.body

        try {
            const livro = await Livros.findById(req.params.id)
            if (livro == null) {
                return res.status(404).json({ message: 'livro nao encontrado para atualizar' })
            }

            livro.titulo = editora
            livro.editora = editora
            livro.anoPublicacao = anoPublicacao
            livro.tipo = tipo


            const tituloAtualizado = await livro.save()
            return res.json(tituloAtualizado)

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },



};


/*
        const { id } = req.params;

        index = exist(id, livros)

        if (index < 0 || !id) {
            return res.status(404).send({
                erro: true,
                message: `id ${id} not found or not exist`,
            })

        }


            try{    
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null) {
            return res.status(404).json({message: 'titulo nao encontrado'})
        }

        await titulo.remove()
        res.json({ message: 'titulo deletado com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

*/
