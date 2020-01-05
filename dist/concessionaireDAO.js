"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dealership_1 = __importDefault(require("./dealership"));
var ConcessionaireDAO = /** @class */ (function () {
    function ConcessionaireDAO() {
        this.nameTable = 'tb_concessionaire';
    }
    ConcessionaireDAO.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    ConcessionaireDAO.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    ConcessionaireDAO.prototype.remover = function (id) {
        console.log('logica delete');
        return new dealership_1.default('', []);
    };
    ConcessionaireDAO.prototype.selecionar = function (id) {
        console.log('logica select');
        return new dealership_1.default('', []);
    };
    ConcessionaireDAO.prototype.selecionarTodos = function () {
        console.log('logica getAll');
        return [new dealership_1.default('', [])];
    };
    return ConcessionaireDAO;
}());
exports.ConcessionaireDAO = ConcessionaireDAO;
