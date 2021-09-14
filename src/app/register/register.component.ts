import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  static users: User[] = [];

  constructor(private route: Router,
              ) { }

  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  addUser(){
    var p = this.registerForm.get("password")?.value;
    var rep = this.registerForm.get("repassword")?.value;
    //console.log(p)
    //console.log(rep)
    if(p != rep){
      alert("Las contraseñas no coinciden");
    }else{
      var email=this.registerForm.get("email")?.value;
      var password=this.registerForm.get("password")?.value;
      var Usuario = new User(email, password);

      RegisterComponent.users.push(Usuario);
      alert("Usuario creado");
      
    }
  }

}
