module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'localhost',
        port: process.env.PORT,
        database: process.env.DATABASE,
        username: process.env.USER,
        password: process.env.PASSWORD,
      },
      options: {
        ssl: false,
      },
    },
  },
});
