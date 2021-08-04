exports.up = function(knex) {
    Promise.all([
        knex.schema.createTable('categories', (table) => {
            table.uuid('uuid_category').primary();
            table.string('name', 100).notNullable();
        }),
        knex.schema.createTable('logs', (table) => {
            table.uuid('uuid_log').primary();
            table.text('text');
            table.uuid('uuid_category_fk').references('uuid_category').inTable('categories').onDelete('CASCADE');
        })
    ]);
};

exports.down = function(knex) {
    Promise.all([
        knex.schema.dropTable('logs'),
        knex.schema.dropTable('categories')
    ])
};