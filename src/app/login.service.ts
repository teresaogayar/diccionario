import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  registrado = false;
  public user: SocialUser = new SocialUser;

  @Output() muestratoken: EventEmitter<any> = new EventEmitter();
  @Output() username: EventEmitter<any> = new EventEmitter();
  
  constructor(private router:Router,
              private httpClient: HttpClient,
              private authService: SocialAuthService) { 

  }
  private url : string = environment.apiUrlJSON;

  Registrar(){
      localStorage.setItem('hay',"true")
      this.registrado = true;
      this.router.navigate(["/"]);

  }

  RegistrarGoogle(){
    this.authService.authState.subscribe(user => {
      this.user = user;
      localStorage.setItem('token', this.user.idToken)
      console.log(localStorage.getItem('token'))

      this.muestratoken.emit(this.user.idToken)

    });

    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user.name);
      localStorage.setItem('', user.name)
      this.username.emit(this.user.name)
    });

    this.router.navigate(["/"]);


  }

  //Obtener lista de usuarios
  getUsuarios(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
  
  //Obtener un usuario
  getUsuario(id:number): Observable<User>{
    return this.httpClient.get<User>(this.url + '/' + id);
  }
  
  //Añadir usuario
  addUsuario(user: User): Observable<User>{
    console.log(user)
    console.log(this.url)
    return this.httpClient.post<User>(this.url, user);
  }

  //Obtener un nombre de usuario
  getUsername(username: string): Observable<User[]>{
    console.log("nombre: "+username)
    return this.httpClient.get<User[]>('http://localhost:3000/usuarios?username='+username)
  }
}