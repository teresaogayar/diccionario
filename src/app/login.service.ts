import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usernameValido = "user";
  passwordValido = "0000";
  registrado = false;
  
  constructor(private router:Router) { 

  }

  Registrar(username:string, password:string){

    if(username == this.usernameValido && password == this.passwordValido){
      this.registrado = true;
      this.router.navigate(["/"]);
    }
    else{
      this.registrado = false;
      alert("Usuario y/o contraseña incorrectos");
    }

  }

}