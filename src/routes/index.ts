import express from 'express';
import funcionarioRouter from './funcionario.routes'
import cargoRouter from './cargo.routes'

const routes = express.Router();

routes.use('/funcionarios',funcionarioRouter)
routes.use('/cargos', cargoRouter )

routes.get('/', (req, res)=> {
    res.json({message: 'Testando'})
})


export default routes;
