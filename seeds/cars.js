
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: "1SLKFVSLKJV43W552", make: "Mazda", model: "CX7", mileage: 177345, title: "clean", transmission: "automatic"},
    { vin: "REZZFVSLKJV43AIZA", make: "Tesla", model: "model3", mileage: 0, title: "clean", transmission: "n/a"}

  ])
};
