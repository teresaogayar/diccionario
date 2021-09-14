import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../login/login.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  selected = '';
  registrado = false;
  constructor(private logService: LogService,
              private route: Router) { }

  ngOnInit(): void {
    this.logService.muestra.subscribe( e =>{
      console.log(e);
      this.registrado = e;
    })
  }

  cerrar(){
    if(this.logService.registrado){
      this.registrado = false;
      this.route.navigate(["/login"])
    }
  }

  

}