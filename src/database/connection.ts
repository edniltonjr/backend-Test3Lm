 
import knex from 'knex';
require('dotenv').config();

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: 3306,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        connectTimeout: 90000, 
        pool: {
            min: 0,
            max: 100,
         },
         
    },

    useNullAsDefault: true,
})

export default connection;

