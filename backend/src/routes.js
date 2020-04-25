const express  =require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
//routes.use(express.json()); //dizendo o formato do corpo da requisição


routes.post('/session',SessionController.create)
routes.get('/ongs', OngController.index)
routes.post('/ongs',OngController.create)
routes.post('/incidents',IncidentsController.create)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)
routes.get('/profile',ProfileController.index)
module.exports = routes;