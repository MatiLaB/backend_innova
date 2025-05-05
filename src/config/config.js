module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres'  // o 'mysql' o 'sqlite', según tu proyecto
    },
    test: {
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'nombre_de_la_db_test',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  };