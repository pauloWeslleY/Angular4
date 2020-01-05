"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    // o Método acelerar vai recuperar a velocidade do proprio objeto.
    Vehicle.prototype.speedUp = function () {
        // ou seja a cada instante que o método acelerar do objeto for chamado ela vai incrementar a velocidade em 10.
        this.speed = this.speed + 10;
    };
    // o método parar vai fazer com que a variável velocidade do objeto "seja lá qual for" passe a vale zero no instante que o método PARA for chamado.
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    // nesse método queremos retorna o valor atribuido a variável velocidade do objeto carro.
    Vehicle.prototype.speedCurrent = function () {
        return this.speed;
    };
    return Vehicle;
}());
exports.default = Vehicle;
