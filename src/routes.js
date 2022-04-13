const express = require("express");
const livrosController = require("./controller/livrosController");


const routes = express.Router()

routes.get('/livros/:id', livrosController.indexId)
routes.get('/livros', livrosController.index)
routes.post('/livros', livrosController.store)
routes.delete('/livros/:id', livrosController.delete)
routes.put('/livros/:id', livrosController.update)

module.exports = routes;