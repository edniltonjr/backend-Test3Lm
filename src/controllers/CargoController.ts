import { Request, Response } from 'express';
import knex from '../database/connection';

class CargoController {
  async show(request: Request, response: Response) {
    const items = await knex('cargos').select('*');
    const serializedItems = items.map(cargo => {
      return {
        id: cargo.id,
        cargo: cargo.descricao,
      };
    });
    console.log(serializedItems);

    return response.json(serializedItems);
  }



  async create (request: Request, response: Response) {
    const { descricao } = request.body;

    const trx = await knex.transaction();

    const cargo = {
        descricao
    };

    const insertedIds = await trx('cargos').insert(cargo);

    await trx.commit();

    response.json({id: insertedIds[0], descricao: request.body.descricao, message: 'Cadastro efetuado com Sucesso '})
  }
    async update (request: Request, response: Response) {
        const { descricao } = request.body;
    
    
        const trx = await knex.transaction();
    
        const cargo = {
            descricao
        };
    
        const insertedIds = await trx('cargos').update(cargo).where({id: request.params.id})
    
        await trx.commit();
    
        response.json({message: 'Cargo Atualizado com Sucesso'});
        }

        async delete (request: Request, response: Response) {
            const { id } = request.params;
        
            const items: any = await knex('cargos').select('*').where({id: id});
            if(items.length === 0) return response.status(400).json({message: 'Cargo não encontrado'})
        
            const trx = await knex.transaction();
        
        
            const insertedIds = await trx('cargos').delete().where({id: request.params.id})
        
            await trx.commit();
        
            response.json({message: 'Cargo Deletado com Sucesso'});
            }





}

export default CargoController;
