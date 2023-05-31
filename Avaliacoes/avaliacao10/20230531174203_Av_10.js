exports.up = function(knex) {
  return knex.schema
    .createTable('TB_ALUNOS', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable().unique();
    })
    .createTable('TB_PROFESSORES', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable().unique();
    })
    .createTable('TB_DISCIPLINAS', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.integer('professor_id').unsigned().references('id').inTable('professores');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('TB_DISCIPLINAS')
    .dropTableIfExists('TB_ALUNOS')
    .dropTableIfExists('TB_PROFESSORES');
};
