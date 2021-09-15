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
    username: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
  }

  login(){
    //var usernames = [];
    //var passwords = [];
    var username = this.registerForm.get("username")?.value;
    var password = this.registerForm.get("password")?.value;
    
    this.serviceLogin.getUsername(username).subscribe(u => {
      if(u.length != 0){
        alert("Existe")
        if(u[0].username == username){
          console.log(u[0].password )
          console.log(password )
          if(u[0].password == password){
            console.log("entra")
            this.serviceLogin.Registrar();
            this.logService.enviaUsername(username);
            this.logService.inicia();
            this.route.navigate(['/']);
          }else{
             alert("Usuario y/o contraseña incorrecto");
          }
        }
      }
     
    })

    //for(let i in RegisterComponent.users){
    //  console.log(RegisterComponent.users[i].username)
    //  usernames.push(RegisterComponent.users[i].username);
    //  passwords.push(RegisterComponent.users[i].password);
    //}

    //for(let i in usernames){
    //  if(usernames[i] == username && passwords[i] == password){
    //    console.log("Entra")
    //    this.serviceLogin.Registrar();
    //    this.logService.inicia();
    //     this.route.navigate(['/']);
    //  }else{
    //     alert("Usuario y/o contraseña incorrecto");
    //  }
    //}
  }
    
    
  

}



@Injectable({
  providedIn: 'root'
})
export class LogService{
  registrado = false;
  @Output() muestra: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() usernameUser: EventEmitter<string> = new EventEmitter();
  constructor(){}

  inicia(){
    console.log(this.registrado);
    this.registrado = true;
    this.muestra.emit(this.registrado);
  }

  enviaUsername(username: string){
    this.usernameUser.emit(username);
  }


}