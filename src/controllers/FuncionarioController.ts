import { Request, Response } from 'express';
import knex from '../database/connection';

class FuncionarioController {
  async show(request: Request, response: Response) {
    const items = await knex('funcionarios').select('*');
    const serializedItems = items.map(funcionario => {
      return {
        id: funcionario.id,
        nome: funcionario.nome,
        sobrenome: funcionario.sobrenome,
        cargo: funcionario.cargo_id,
        nascimento: funcionario.nascimento,
        salario: funcionario.salario
      };
    });
    console.log(serializedItems);

    return response.json(serializedItems);
  }

  async create (request: Request, response: Response) {
    const { nome, sobrenome, cargo_id, nascimento, salario } = request.body;

    const items: any = await knex('cargos').select('*').where({id: cargo_id});
    if(items.length === 0) return response.status(400).json({message: 'Cargo não encontrado'})

    const trx = await knex.transaction();

    const funcionario = {
        nome,
        sobrenome,
        cargo_id,
        nascimento, 
        salario
    };

    const insertedIds = await trx('funcionarios').insert(funcionario);

    await trx.commit();

    response.json({message: 'Funcionario Cadastrado com Sucesso'});
    }

    async update (request: Request, response: Response) {
        const { nome, sobrenome, cargo_id, nascimento, salario } = request.body;
    
        const items: any = await knex('cargos').select('*').where({id: cargo_id});
        if(items.length === 0) return response.status(400).json({message: 'Cargo não encontrado'})
    
        const trx = await knex.transaction();
    
        const funcionario = {
            nome,
            sobrenome,
            cargo_id,
            nascimento, 
            salario
        };
    
        const insertedIds = await trx('funcionarios').update(funcionario).where({id: request.params.id})
    
        await trx.commit();
    
        response.json({message: 'Funcionario Atualizado com Sucesso'});
        }

        async delete (request: Request, response: Response) {
            const { id } = request.params;
        
            const items: any = await knex('funcionarios').select('*').where({id: id});
            if(items.length === 0) return response.status(400).json({message: 'Funcionario não encontrado'})
        
            const trx = await knex.transaction();
        
        
            const insertedIds = await trx('funcionarios').delete().where({id: request.params.id})
        
            await trx.commit();
        
            response.json({message: 'Funcionario Deletado com Sucesso'});
            }





}

export default FuncionarioController;
