
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deleteAt')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('deleteAt')
    })
};
