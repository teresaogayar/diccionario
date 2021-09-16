import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InglesService } from "../ingles.service";
import { catchError, delay } from 'rxjs/operators';

@Injectable({   
    providedIn: 'root'
})
export class InglesResolver implements Resolve<Observable<any>>{

    constructor(private inglesService: InglesService){}
    
    resolve(route: ActivatedRouteSnapshot){
        return this.inglesService.getWords().pipe(
            delay(500),
            catchError(e => {
                alert("Se ha producido un fallado inesperado")
                console.log(e)
                return of()
            })
        );
    }
}