import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  registrado = false;
  
  constructor(private router:Router,
    private httpClient: HttpClient) { 

  }
  private url : string = environment.apiUrlJSON;

  Registrar(){

      this.registrado = true;
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