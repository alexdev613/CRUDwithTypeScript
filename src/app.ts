import express, { Express, Request, Response } from 'express';
import connection from './database/sequelize'; // connection está importando a função do export defalt do arquivo sequelize.ts // e ele vai importar a função que estou exportando com export default do arquivo sequelize.ts aqui estou chamando a função. E connection é um alias, um codinome para a importação que estou fazendo da função do export default do arquivo sequelize.ts
import bodyParser from 'body-parser';

import films from './app/controllers/FilmController'; // para importar o export default que está mandando o router, do arquivo FilmController.ts, onde films é apelido aqui

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/films', films); // na nossa rota '/films' vamos chaamr o nosso objeto films

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World com Express + TypeScript!!!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

connection();