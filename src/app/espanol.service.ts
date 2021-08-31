import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Espanol } from './espanol';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  constructor( private httpClient: HttpClient) { }

  headers(){
    return{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Autorization': 'Bearer'
    }
}


  private url1: string = environment.apiUrl;
  private url2: string = environment.apiUrl2;

  getPalabras(){
    return this.httpClient.get<Espanol[]>(this.url1);
  }

  getPalabra(palabra: string): Observable<Espanol>{
    return this.httpClient.get<Espanol>(this.url2 + '/' + palabra, {
        headers: this.headers() 
    });
}

  addPalabra(palabraes: Espanol): Observable<Espanol>{
    console.log(palabraes)
    return this.httpClient.post<Espanol>(this.url2, palabraes);
  }

  updatePalabra(palabraes: Espanol): Observable<Espanol>{
    return this.httpClient.put<Espanol>(this.url2 + '/' + palabraes.palabra, palabraes);
  }

  deletePalabra(palabra: string): Observable<Espanol>{
    return this.httpClient.delete<Espanol>(this.url1)
  }
}