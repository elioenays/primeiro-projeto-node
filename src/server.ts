import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';
import upload from './config/upload';

const app = express();

app.use(express.json());

app.use('/files', express.static(upload.directory));

app.use(routes);

app.post('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
	console.log('🚀 Server started on port 3333');
});