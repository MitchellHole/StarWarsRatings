var express = require('express');
import bodyParser from 'body-parser';
import combatantsController from '../controllers/combatants';

const combatantsRouter = express.Router();

combatantsRouter.get('/', combatantsController.findAll);
combatantsRouter.get('/:id', combatantsController.findOne);
combatantsRouter.post('/', bodyParser.json(), combatantsController.create);


module.exports = combatantsRouter;
