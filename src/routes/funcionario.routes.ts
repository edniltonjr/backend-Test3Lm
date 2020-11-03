import { Router } from 'express';
import FuncionarioController from '../controllers/FuncionarioController';

const funcionarioController = new FuncionarioController();

const funcionarioRouter = Router();

funcionarioRouter.get('/', funcionarioController.show);
funcionarioRouter.post('/', funcionarioController.create);
funcionarioRouter.put('/:id', funcionarioController.update);
funcionarioRouter.delete('/:id', funcionarioController.delete);



export default funcionarioRouter;
