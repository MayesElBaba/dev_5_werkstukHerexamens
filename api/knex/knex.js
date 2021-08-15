const knex = require('knex');
const knexfile = require('./knexfile');
const db = knex(knexfile.config);
module.exports = knex(knexfile.development);


async function initialiseTables() {
    await db.schema.hasTable('categories').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('categories', (table) => {
            table.uuid('uuid_category').primary();
            table.string('name', 100).notNullable();
          })
          .then(async () => {
            console.log('created table categories');
          });
  
      }
    });

    await db.schema.hasTable('logs').then(async (exists) => {
        if (!exists) {
          await db.schema
            .createTable('logs', (table) => {
                table.uuid('uuid_log').primary();
                table.text('text');
                table.uuid('uuid_category_fk').references('uuid_category').inTable('categories').onDelete('CASCADE');
            })
            .then(async () => {
              console.log('created table logs');
            });
    
        }
      });
  }
  
  initialiseTables()
  module.exports = db