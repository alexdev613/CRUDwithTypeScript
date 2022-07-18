import { request, Request, Response, Router } from "express"; // importando Router, Request e Response do express
import * as service from '../services/FilmService';

const router = Router(); // constante que recebe o módulo Router()
// módulo Router do express com a propriedade get
router.get('/', async (req: Request, res: Response) => {
    res.send(await service.getAll());
});

/*
router.get('/', (req: Request, res: Response) => {
    service.getAll().then((films) => {
        res.send(films);
    });
});
*/

/*
router.get('/:id', (req: Request, res: Response) => {
    service.getById(parseInt(req.params.id)).then((film) => {
        res.send(film);
    });
});

//req.params.id retorna uma string sendo que o parÂmetro do meu getById é um number por isso precisamos colocar um parseInt
*/

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    res.send(await service.getById(parseInt(req.params.id)));
}); // A10P2I56:00



// POST/create:

router.post('/', async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
});

// update alterar:

router.put('/:id', async (req:Request, res: Response) => {
    res.send(await service.updateById(parseInt(req.params.id), req.body));
});


/*
router.put('/:id', (req:Request, res: Response) => {
    service.updateById(parseInt(req.params.id), req.body).then((film) => {
        res.send(film);
    });
});
*/

router.delete('/:id', async (req: Request, res: Response) => {
    await service.deleteById(parseInt(req.params.id));
    res.status(204).send();
});

export default router;
