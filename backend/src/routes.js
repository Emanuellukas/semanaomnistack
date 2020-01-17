const { Router } = require('express');//Importando apenas o módulo de roteamento do Express

const routes = Router();

//Tipos de Parâmetros: Query Params, Route Params, Body
//Query Params: request.query (filtros, ordenação, paginação, busca em geral)
//Route Params: request.params (routa de identificação, geralmente usado no delete)
//Body: request.body (Dados para criação ou alteração de um registro)

routes.get('/', (request, response) => {//Tipo get
    return response.json({ message: 'Olá, asdasw'});
})

routes.delete('/usuario/:id', (request, response) => {//Tipo delete, route params
    console.log(request.params)
    return response.json({ message: 'Olá, asdasw'});
})

routes.post('/usuario', (request, response) => {//Tipo POST ou PUT, route params
    console.log(request.body)
    return response.json({ message: 'Olá, asdasw'});
})

module.exports = routes;


