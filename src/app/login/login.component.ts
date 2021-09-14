import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginService } from '../login.service';
import { RegisterComponent } from '../register/register.component';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private serviceLogin: LoginService, 
              private auth:AuthGuard,
              private logService: LogService,
              private route: Router) {}
  
  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
  }

  login(){
    var emails = [];
    var passwords = [];
    var email = this.registerForm.get("email")?.value;
    var password = this.registerForm.get("password")?.value;
    
    for(let i in RegisterComponent.users){
      console.log(RegisterComponent.users[i].email)
      emails.push(RegisterComponent.users[i].email);
      passwords.push(RegisterComponent.users[i].password);
    }

    for(let i in emails){
      if(emails[i] == email && passwords[i] == password){
        console.log("Entra")
        this.serviceLogin.Registrar();
        this.logService.inicia();
         this.route.navigate(['/']);
      }else{
         alert("Usuario y/o contraseña incorrecto");
      }
    }
  }
    
    // if(emails.includes(email) && passwords.includes(password)){
    //   console.log("Entra")
    //   this.serviceLogin.Registrar();
    //   this.logService.inicia();
    //   this.route.navigate(['/inicio']);
    // }else{
    //   alert("Usuario y/o contraseña incorrecto");
    // }

  

}



@Injectable({
  providedIn: 'root'
})
export class LogService{
  registrado = false;
  @Output() muestra: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(){}

  inicia(){
    console.log(this.registrado);
    this.registrado = true;
    this.muestra.emit(this.registrado);
  }



}