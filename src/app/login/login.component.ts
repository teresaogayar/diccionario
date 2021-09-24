import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
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

  public user: SocialUser = new SocialUser;
  loggedIn: boolean = true;

  constructor(private serviceLogin: LoginService, 
              private auth:AuthGuard,
              private logService: LogService,
              private route: Router,
              private authService: SocialAuthService) {}
  
  registerForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngOnInit(): void {

    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });

  }
  

  public signInWithGoogle(): void {
    try {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   } catch (err) {
      console.log(err)
   }
  }
  public signOut(): void {
    this.authService.signOut();
  }


  login(){
    //var usernames = [];
    //var passwords = [];
    var username = this.registerForm.get("username")?.value;
    var password = this.registerForm.get("password")?.value;
    
    this.serviceLogin.getUsername(username).subscribe(u => {
      if(u.length != 0){
        alert("Accediendo a la gestión del Diccionario")

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

  }
    

  

}



@Injectable({
  providedIn: 'root'
})
export class LogService{
  registrado = false;
  @Output() muestra: EventEmitter<any> = new EventEmitter<any>();
  @Output() usernameUser: EventEmitter<any> = new EventEmitter();
  constructor(){}

  inicia(){
    console.log(this.registrado)
    this.registrado = true;
    this.muestra.emit(this.registrado)
    localStorage.setItem('esta',"true")
    var v = localStorage.getItem('esta')
    this.muestra.emit(v)
  }

  enviaUsername(username: string){
    this.usernameUser.emit(username)
    localStorage.setItem('usernameU',username)
    var usernameU = localStorage.getItem('usernameU')
    this.usernameUser.emit('username')
  }
  

}