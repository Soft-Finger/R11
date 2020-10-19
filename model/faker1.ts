import { Employee } from "./employee";

const faker = require('faker');
const fs = require('fs');

function generateRandomData() {

    let tab = new Array();
    //let emp; = new Employee();

    for (let index = 1; index <= 10; index++) {
        
        let emp = new Employee();

        emp.setId(index);
        emp.setFirst_name(faker.name.firstName());
        emp.setLast_name(faker.name.lastName());
        emp.setEmail(faker.internet.email());
        
        //tab.push({"employee" : emp});
        tab.push(emp);
    }
    //return {"restEmp" : tab, par1: "toto", par2: "tata"};
    return {"restEmp" : tab};
}

let webservice = generateRandomData();
fs.writeFileSync("emp.json", JSON.stringify(webservice, null, '\t'));