import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';
import combatantsRouter from './api/combatants'
import fightsRouter from './api/fights'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/combatants', combatantsRouter);
app.use('/api/fights', fightsRouter);

export default app;
