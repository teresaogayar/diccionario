import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  registrado = false;
  
  constructor(private router:Router) { 

  }

  Registrar(){

      this.registrado = true;
      this.router.navigate(["/"]);

  }

  

}