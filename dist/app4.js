"use strict";
// import { ConcessionaireDAO } from './concessionaireDAO'
// import { PersonDAO } from './personDAO'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
var dealership_1 = __importDefault(require("./dealership"));
var people_1 = __importDefault(require("./people"));
// let dao: ConcessionaireDAO = new ConcessionaireDAO()
// let dao2: PersonDAO = new PersonDAO()
var dealership = new dealership_1.default('', []);
var people = new people_1.default('', '');
var dao3 = new DAO_1.Dao();
var dao4 = new DAO_1.Dao();
dao3.inserir(dealership);
dao4.remover(5);
