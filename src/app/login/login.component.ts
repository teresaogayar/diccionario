import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private serviceLogin: LoginService, 
              private auth:AuthGuard,
              private logService: LogService) {}
  
  registerForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
  }

  login(){
    var username = this.registerForm.get("username")?.value;
    var password = this.registerForm.get("password")?.value;
    this.serviceLogin.Registrar(username, password);
    this.logService.inicia();
  }
  

  

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