import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('funcionarios', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').nullable();
        table.integer('cargo_id').unsigned().nullable();
        table.date('nascimento').nullable();
        table.integer('salario').nullable();
        table.foreign('cargo_id')
        .references('cargos.id');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('funcionarios');
}

