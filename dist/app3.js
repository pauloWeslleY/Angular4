"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = __importDefault(require("./car"));
var motocycle_1 = __importDefault(require("./motocycle"));
var Dealership_1 = __importDefault(require("./Dealership"));
var cars = new car_1.default('New Civic', 4);
cars.speedUp();
cars.speedUp();
var motto = new motocycle_1.default();
motto.speedUp();
motto.speedUp();
var concessionaire = new Dealership_1.default('', []);
console.log(motto);
console.log(cars);
console.log(concessionaire.provideOpeningHours());
