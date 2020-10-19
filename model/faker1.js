"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var faker = require('faker');
var fs = require('fs');
function generateRandomData() {
    var tab = new Array();
    //let emp; = new Employee();
    for (var index = 1; index <= 10; index++) {
        var emp = new employee_1.Employee();
        emp.setId(index);
        emp.setFirst_name(faker.name.firstName());
        emp.setLast_name(faker.name.lastName());
        emp.setEmail(faker.internet.email());
        //tab.push({"employee" : emp});
        tab.push(emp);
    }
    //return {"restEmp" : tab, par1: "toto", par2: "tata"};
    return { "restEmp": tab };
}
var webservice = generateRandomData();
fs.writeFileSync("emp.json", JSON.stringify(webservice, null, '\t'));
