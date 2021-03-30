module.exports = {
  development: {
    username: 'mitchellhole',
    password: null,
    database: 'StarWarsRatings',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: null,
    database: 'database_production',
    host: 'starwarsratings.cbm3ambdxnuj.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
  },
};
