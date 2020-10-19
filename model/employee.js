"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.setId = function (id) {
        this.id = id;
    };
    Employee.prototype.getFirst_name = function () {
        return this.first_name;
    };
    Employee.prototype.setFirst_name = function (first_name) {
        this.first_name = first_name;
    };
    Employee.prototype.getLast_name = function () {
        return this.last_name;
    };
    Employee.prototype.setLast_name = function (last_name) {
        this.last_name = last_name;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.afficheToi = function () {
        console.log(this.getId() + "\n" + this.getFirst_name() + "\n" + this.getLast_name() + "\n" + this.getEmail());
    };
    return Employee;
}());
exports.Employee = Employee;
