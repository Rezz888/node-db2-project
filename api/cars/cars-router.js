// DO YOUR MAGIC

const cars = require("./cars-model")
const router = require('express').Router()

router.get('/api/cars', async (req, res, next) => {
    try {
        const allCars = await cars.getAll()
        res.json(allCars)

    } catch(err){
        next(err)
    }
})



router.get('/api/cars/:id', async (req, res, next)=> {
    try {
          const car = await cars.getById(req.params.id)
          res.json(car)
    } catch(err){
        next(err)
    }
})



router.post('/api/cars', async(req, res, next)=> {
    try{
      const car = await cars.create({
          vin: req.body.vin,
          make: req.body.make,
          model: req.body.model,
          mileage: req.body.mileage,
          title: req.body.title,
          transmission: req.body.transmission
      })
      res.status(401).json(car)

    } catch(err){
        next(err)
    }
})

module.exports = router