"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership = /** @class */ (function () {
    function Dealership(adress, listTheCars) {
        this.adress = adress;
        this.listTheCars = listTheCars;
    }
    Dealership.prototype.provideAddress = function () {
        return this.adress;
    };
    Dealership.prototype.showListTheCars = function () {
        return this.listTheCars;
    };
    Dealership.prototype.provideOpeningHours = function () {
        return 'Monday to Friday from 08:00 to 18:00 and Saturday from 08:00 to 12:00';
    };
    return Dealership;
}());
exports.default = Dealership;
