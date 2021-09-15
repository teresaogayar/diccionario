import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EspanolService } from "../espanol.service";
import { catchError, delay } from 'rxjs/operators';

@Injectable({   
    providedIn: 'root'
})
export class EspanolResolver implements Resolve<Observable<any>>{

    constructor(private espanolService: EspanolService){}
    
    resolve(route: ActivatedRouteSnapshot){
        return this.espanolService.getPalabras().pipe(
            delay(1500),
            catchError(e => {
                alert("Se ha producido un fallado inesperado")
                console.log(e)
                return of()
            })
        );
    }
}
