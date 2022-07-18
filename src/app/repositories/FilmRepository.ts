// import { Error } from 'sequelize/types';
import model, { FilmInput, FilmOutput } from '../models/FilmModel'; // importando o export default do arquivo FilmModel.ts, lembrando que model é o apilido para essa importação.

export const getAll = async (): Promise<FilmOutput[]> => {
    return await model.findAll();
};
// Estou exportando uma constante chamada getAll que leva uma arrow function que retorna o model com o método findAll() que faz a busca para todas as instâncias da tabela film através da class Film no FilmModel.ts

// export const getById = (id: number) => {
//     return model.findByPk(id);
// }; // o método findByPk que deve receber um id que será o parâmetro da nossa arrow function que está dentro da const getById Aula 10 Parte 1 instante 00:51:00

export const getById = async (id: number): Promise<FilmOutput> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new Error('Registro não encontrado');
    }
    return film;
};

// função create, para add um novo filme:

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await model.create(payload);
};

// update alteração:

/*
export const updateById = (id: number, payload: FilmInput) => {
    return model.update(payload, {
        where: {film_id: id}
    });
};
*/

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    const film = await model.findByPk(id);
    
    if (!film) {
        throw new Error('Registro não encontrado');
    }

    return await film.update(payload);
};

/* return await film.update(payload); // O update está retornando um Model não mais o array com os objetos modificados:
(method) Model<FilmAttributes, FilmInput>.update(keys: {
    film_id?: number | Fn | Col | Literal | undefined;
    title?: string | Fn | Col | Literal | undefined;
    description?: string | Fn | Col | Literal | undefined;
    ... 9 more ...;
    fulltext?: string | ... 3 more ... | undefined;
}, options?: InstanceUpdateOptions<...> | undefined): Promise<...> (+1 overload)
*/


// delete

export const deleteById = async (id: number): Promise<void> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new Error('Registro não encontrado');
    }

    await film.destroy();
}