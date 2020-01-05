"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var people_1 = __importDefault(require("./people"));
var PersonDAO = /** @class */ (function () {
    function PersonDAO() {
        this.nameTable = 'person';
    }
    PersonDAO.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    PersonDAO.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    PersonDAO.prototype.remover = function (id) {
        console.log('logica delete');
        return new people_1.default('', '');
    };
    PersonDAO.prototype.selecionar = function (id) {
        console.log('logica select');
        return new people_1.default('', '');
    };
    PersonDAO.prototype.selecionarTodos = function () {
        console.log('logica getAll');
        return [new people_1.default('', '')];
    };
    return PersonDAO;
}());
exports.PersonDAO = PersonDAO;
