var express = require('express');
import bodyParser from 'body-parser';
import fightsController from '../controllers/fights';

const fightsRouter = express.Router();

fightsRouter.get('/', fightsController.findAll);
fightsRouter.get('/:id', fightsController.findOne);

module.exports = fightsRouter;
