// Update with your config settings.

module.exports = {

    development: {
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
    },

    production: {
        client: 'dev_5_werkstuk',
        connection: {
            database: 'dev_5',
            user: 'postgres',
            password: 'mayes'
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