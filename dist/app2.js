"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = __importDefault(require("./car"));
var people_1 = __importDefault(require("./people"));
var dealership_1 = __importDefault(require("./dealership"));
/* --- created cars --- */
// criando a variável carA que vai receber uma instância da classe carro, formando com isso um objeto.
var carA = new car_1.default('BMW328i', 2);
var carB = new car_1.default('Dodge Journey', 4);
var carC = new car_1.default('Civic', 2);
/* --- assemble dealership car list --- */
// variável lista de carros que recebe um "Array" com os elementos do tipo carro
var listTheCars = [carA, carB, carC];
var concessionaire = new dealership_1.default('Av. Francisco Matarazzo', listTheCars);
/* --- display car list --- */
// console.log(concessionaire.showListTheCars())
/* --- buy the car --- */
var client = new people_1.default('Joe West', 'Civic');
concessionaire.showListTheCars().map(function (car) {
    // nessa condição vamos recupera o objeto carro no indice modelo comparando essa informação contida na variável "client".
    if (car['model'] == client.tellCarPrefer()) {
        // buy car
        client.buyCar(car);
    }
});
console.log(client.sayCarThatHas());
