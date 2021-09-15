import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  static users: User[] = [];

  constructor(private route: Router,
              private loginService: LoginService) { }

  registerForm = new FormGroup({
    username: new FormControl("", Validators.required),
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
      
      var username=this.registerForm.get("username")?.value;
      var password=this.registerForm.get("password")?.value;
      
      var Usuario = new User(username, password);
      RegisterComponent.users.push(Usuario);

      this.loginService.getUsername(username).subscribe(usu =>{
        if(usu.length != 0){
          alert("Ese usuario ya existe")
        }else{
          this.loginService.addUsuario(Usuario).subscribe(u =>{
            console.log("Usuario añadido");
            this.route.navigate(['/login']);
          
          })
        }
      })
      
    }
  }

}
