exports.up = function (knex) {
  let createQuery = `CREATE TABLE custom(
          id SERIAL PRIMARY KEY NOT NULL,
          message TEXT,
          created_at TIMESTAMP
        )`;
  return knex.raw(createQuery);
};

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE custom`;
  return knex.raw(dropQuery);
};
