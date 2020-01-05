import Car from './car'
import People from './people'
import Dealership  from './dealership'

/* --- created cars --- */
// criando a variável carA que vai receber uma instância da classe carro, formando com isso um objeto.
let carA = new Car('BMW328i', 2)
let carB = new Car('Dodge Journey', 4)
let carC = new Car('Civic', 2)

/* --- assemble dealership car list --- */
// variável lista de carros que recebe um "Array" com os elementos do tipo carro
let listTheCars: Car[] = [carA, carB, carC]

const concessionaire = new Dealership('Av. Francisco Matarazzo', listTheCars)

/* --- display car list --- */
// console.log(concessionaire.showListTheCars())

/* --- buy the car --- */
let client = new People('Joe West', 'Civic')

concessionaire.showListTheCars().map((car: Car) => {

   // nessa condição vamos recupera o objeto carro no indice modelo comparando essa informação contida na variável "client".
   if (car['model'] == client.tellCarPrefer()) {
      // buy car
      client.buyCar(car)
   }

})

console.log(client.sayCarThatHas())