module.exports = {
    config: {
        client: 'postgresql',
        connection: {
            database: 'dev_5_werkstuk',
            user: 'postgres',
            password: 'mayes',
            host:'db'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
  };