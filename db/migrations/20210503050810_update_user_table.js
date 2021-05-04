exports.up = function (knex) {
  let createQuery = `UPDATE TABLE user
        SET name = "Peter"
        WHERE name = "Cui"
      `;
  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let createQuery = `UPDATE TABLE user
        SET name = "Cui"
        WHERE name = "Peter"
      `;
  return knex.raw(createQuery);
};
