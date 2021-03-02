const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  const cars = db.select("*").from("cars")
  return cars

}

const getById = async (id) => {
  // DO YOUR MAGIC
  const [cars] = await db
  .select("*")
  .from("cars")
  .where("id", id)
  .limit(1)

  return cars
}

const create = async (car) => {
  // DO YOUR MAGIC
  const [carID] = await db
  .insert(car).into("cars")

  const newCar = await db("cars")
  .where("id", carID)
  .first()

  return newCar
}

module.exports = {
  getAll,
  getById,
  create
}