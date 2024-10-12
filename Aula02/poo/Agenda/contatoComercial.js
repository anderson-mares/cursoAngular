"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatoComercial = void 0;
var contato_1 = require("./contato");
var ContatoComercial = /** @class */ (function (_super) {
    __extends(ContatoComercial, _super);
    function ContatoComercial(atividade, cargo, dataNascimento, nome, telefones) {
        var _this = _super.call(this, dataNascimento, nome, telefones) || this;
        _this.atividade = atividade;
        _this.cargo = cargo;
        return _this;
    }
    return ContatoComercial;
}(contato_1.Contato));
exports.ContatoComercial = ContatoComercial;
