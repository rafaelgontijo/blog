// Ghost Configuration for Heroku

var path = require('path'),
    config,
    fileStorage,
    storage;

config = {

  // Production (Heroku)
  production: {
    url: 'http://blog.rafaelgontijo.com',
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  // Development
  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }

};

// Export config
module.exports = config;
