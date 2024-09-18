import { SequelizeOptions } from 'sequelize-typescript';

export const database: SequelizeOptions = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: +process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USER_NAME || 'root',
  database: process.env.MYSQL_DATABASE || '',
  password: process.env.MYSQL_PASSWORD || '',
  define: { charset: 'utf8', underscored: true },
  timezone: '+00:00',
  logging: console.log,
  pool: {
    max: +process.env.MYSQL_MAX_CONNECTIONS || 50,
    min: 0,
    acquire: 30000,
    idle: 30000,
  },
};
