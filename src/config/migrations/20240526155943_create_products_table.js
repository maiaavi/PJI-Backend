/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.integer("price").notNullable();
    table.string("category", 255).notNullable();
    table.integer("quantity").notNullable();
    table.string("status", 50).notNullable();
    table.integer("rating").notNullable();
    table.timestamps(true, true); // Adds created_at and updated_at columns with default values
  });
}
export { up };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
  return knex.schema.dropTable("products");
}
export { down };
