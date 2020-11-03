import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cargos', table => {
        table.increments('id').primary();
        table.string('descricao').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cargos');
}

