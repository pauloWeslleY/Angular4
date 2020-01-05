"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(name, carPrefer) {
        this.name = name;
        this.carPrefer = carPrefer;
    }
    People.prototype.tellName = function () {
        return this.name;
    };
    People.prototype.tellCarPrefer = function () {
        return this.carPrefer;
    };
    People.prototype.buyCar = function (car) {
        this.car = car;
    };
    People.prototype.sayCarThatHas = function () {
        return this.car;
    };
    return People;
}());
exports.default = People;
