import { Router } from 'express';
import FuncionarioController from '../controllers/FuncionarioController';

const funcionarioController = new FuncionarioController();

const funcionarioRouter = Router();

funcionarioRouter.get('/all', funcionarioController.show);
funcionarioRouter.get('/', funcionarioController.index);

funcionarioRouter.post('/', funcionarioController.create);
funcionarioRouter.put('/:id', funcionarioController.update);
funcionarioRouter.delete('/:id', funcionarioController.delete);



export default funcionarioRouter;
