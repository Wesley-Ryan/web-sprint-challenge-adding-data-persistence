exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.text("name", 128).notNullable();
      table.text("description");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.text("name", 128).unique().notNullable();
      table.text("description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.text("description").notNullable();
      table.text("notes");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      table.boolean("completed").notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
