import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listUser = [];
  constructor() { 
    this.listUser.push(
      {
        name: "Joaquim",
        function: "Development"
      },
      {
        name: "José",
        function: "Analista"
      },
      {
        name: "Manoel",
        function: "DBA"
      }
    );
  }
}
