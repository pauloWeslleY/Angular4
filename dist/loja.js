"use strict";
var Loja = /** @class */ (function () {
    function Loja(produtos) {
        this.produtos = produtos;
    }
    Loja.prototype.fornecerProduto = function () {
        return this.produtos;
    };
    Loja.prototype.mostraListaProdutos = function () {
        return this.listaDeProdutos;
    };
    return Loja;
}());
var lojaA = new Loja('Carro');
console.log(lojaA);
