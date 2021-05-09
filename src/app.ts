import 'reflect-metadata';
import express from 'express';

//imports locais
import createConnection from "./database";
import { router } from './routes';

createConnection();
const app = express();

//serviços utilizados
app.use(express.json());
app.use(router);

export { app };