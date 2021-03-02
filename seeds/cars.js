
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: "1SLKFVSLKJV43W552", make: 2010, model: "CX7", mileage: 177345, title: "clean", transmission: "automatic"}
  ])
};
