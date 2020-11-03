import path from 'path';
require('dotenv').config();


module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectTimeout: 90000, 
    pool: { min: 0, max: 100 }
},

  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },

  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },


  useNullAsDefault: true,
};