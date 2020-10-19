import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(): Promise<Employee[]> {

    return Promise.resolve([

      {
        "id": 1,
        "first_name": "Filomena",
        "last_name": "Douglas",
        "email": "Stefan_McClure@gmail.com"
      },
      {
        "id": 2,
        "first_name": "Fletcher",
        "last_name": "Stanton",
        "email": "Leonard_Waelchi@hotmail.com"
      },
      {
        "id": 3,
        "first_name": "Quinton",
        "last_name": "Huels",
        "email": "Austyn_OHara@gmail.com"
      },
      {
        "id": 4,
        "first_name": "Kaleb",
        "last_name": "Gislason",
        "email": "Arne_Brown86@gmail.com"
      },
      {
        "id": 5,
        "first_name": "Geo",
        "last_name": "Baumbach",
        "email": "Adolph.Torphy@gmail.com"
      },
      {
        "id": 6,
        "first_name": "Foster",
        "last_name": "O'Kon",
        "email": "Sylvester_Bechtelar56@hotmail.com"
      },
      {
        "id": 7,
        "first_name": "Yvonne",
        "last_name": "Kilback",
        "email": "Vesta.Klocko60@yahoo.com"
      },
      {
        "id": 8,
        "first_name": "Eden",
        "last_name": "Upton",
        "email": "Camren.Walker@yahoo.com"
      },
      {
        "id": 9,
        "first_name": "Shanon",
        "last_name": "Mosciski",
        "email": "Uriel_Gaylord13@yahoo.com"
      },
      {
        "id": 10,
        "first_name": "Leonora",
        "last_name": "Denesik",
        "email": "Alexys99@yahoo.com"
      }

    ]);

  }
    
}
