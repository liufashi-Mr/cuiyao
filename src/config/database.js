/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER_NAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'api_manager',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      underscored: true,
    },
    timezone: '+00:00',
    logging: console.log,
    pool: {
      max: process.env.MYSQL_MAX_CONNECTIONS || 50,
      min: 0,
      acquire: 30000,
      idle: 30000,
    },
  },
  test: {
    username: process.env.MYSQL_USER_NAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'api_manager',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      underscored: true,
    },
    timezone: '+00:00',
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER_NAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'api_manager',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      underscored: true,
    },
    timezone: '+00:00',
    logging: false,
    pool: {
      max: process.env.MYSQL_MAX_CONNECTIONS || 50,
      min: 0,
      acquire: 30000,
      idle: 30000,
    },
  },
};
