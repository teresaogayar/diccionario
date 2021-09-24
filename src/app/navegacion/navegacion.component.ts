import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from '../login.service';
import { LogService } from '../login/login.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  selected = '';
  registrado = false;
  esta: any = ''
  token: any = ''
  public user: SocialUser = new SocialUser;
  
  constructor(private serviceLogin: LoginService,
              private logService: LogService,
              private route: Router,
              private authService: SocialAuthService) { }

              

  ngOnInit(): void {
    this.logService.muestra.subscribe( e =>{
      console.log(e);
      localStorage.setItem('esta',e)
      this.esta = localStorage.getItem('esta');
    })
    this.esta = localStorage.getItem('esta')
    this.serviceLogin.muestratoken.subscribe(e=>{
      localStorage.setItem('token', e)
      this.token = localStorage.getItem('token')
    })

  }

  cerrar(){
    var v = localStorage.getItem('esta')
    if(this.esta){
      localStorage.setItem('esta',"false")
      this.esta = localStorage.getItem('esta')
      this.registrado = false;
      localStorage.removeItem('esta')
      localStorage.removeItem('hay')
      //subscribir e emitir un evento
      window.location.reload()
    } else 
        if (localStorage.getItem('token') != "") {
        this.authService.signOut();
        localStorage.setItem('token', "")
        this.token = localStorage.getItem('token')
        this.route.navigate(["/login"]);
      }

  

  }
}