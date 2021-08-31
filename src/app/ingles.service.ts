import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingles } from './ingles';

@Injectable({
  providedIn: 'root'
})
export class InglesService {

  constructor(private httpClient: HttpClient) { }

  headers(){
    return{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Autorization': 'Bearer'
    }
  }

  private urlEn1: string = environment.apiUrl1En;
  private urlEn2: string = environment.apiUrl2En;

  getWords(){
    return this.httpClient.get<Ingles[]>(this.urlEn1);
  }

  getWord(word: string): Observable<Ingles>{
    return this.httpClient.get<Ingles>(this.urlEn2 + '/' + word, {
      headers: this.headers() 
    });
  }

  addWord(palabraen: Ingles): Observable<Ingles>{
    console.log(palabraen)
    return this.httpClient.post<Ingles>(this.urlEn1, palabraen);
  }

  updateWord(palabraen: Ingles): Observable<Ingles>{
    return this.httpClient.put<Ingles>(this.urlEn2 + '/' + palabraen.palabra, palabraen);
  }

  deleteWord(word: string): Observable<Ingles>{
    return this.httpClient.delete<Ingles>(this.urlEn2)
  }

}
