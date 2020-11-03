import { Router } from 'express';
import CargoController from '../controllers/CargoController';

const cargoController = new CargoController();

const cargoRouter = Router();

cargoRouter.get('/', cargoController.show);
cargoRouter.post('/', cargoController.create);
cargoRouter.put('/:id', cargoController.update);
cargoRouter.delete('/:id', cargoController.delete);



export default cargoRouter;
