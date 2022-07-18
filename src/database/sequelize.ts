import { Error, Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', '1987', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    }, // para não dar problema em relação a pluralidade do nome da tabela e colunas padrão
    logging: false // para não apresentar o código SQL da chamada do banco de dados que apresenta por default/padrão quando é feita a chamada do banco de dados
});

export default () => {
    sequelize.authenticate().then(() => {
        console.log('Conexão com o postgres realizada com sucesso');
    }).catch((error: Error) => {
        console.log(`Conexão com o postgres não foi bem sucedida. ${error}`);
    });
};

// lembrando que só posso ter uma função export default, justamente por ela ser defalt/padrão

// export default é capaz de exportar uma função
// função authenticate retorna se a função deu ou não certo Aula 9 Parte 2 instante 58:30
// authenticate é uma função assíncrona, com a notação '.' temos o then que é utilizado quando temos uma reposta positiva para a minha Promise (da minha função assíncrona), e o catch que é utilizado quando temos um erro dentro da minha Promise (função assíncrona).
