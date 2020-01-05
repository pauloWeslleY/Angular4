import Car from './car'
import Motocycle from './motocycle'
import Dealership from './Dealership'

let cars = new Car('New Civic', 4)
cars.speedUp()
cars.speedUp()

let motto = new Motocycle()
motto.speedUp()
motto.speedUp()

let concessionaire = new Dealership('', [])

console.log(motto)
console.log(cars)
console.log(concessionaire.provideOpeningHours())
