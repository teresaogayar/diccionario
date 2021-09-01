import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Espanol } from '../espanol';
import { EspanolService } from '../espanol.service';



@Component({
  selector: 'app-espanol',
  templateUrl: './espanol.component.html',
  styleUrls: ['./espanol.component.scss']
})

export class EspanolComponent implements OnInit {

  public palabraes: Espanol[] = [];
  valor = '';
 
  
  constructor(public espanolService: EspanolService,
              public router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    this.espanolService.getPalabras().subscribe((resp: Espanol[])=>{
      console.log(resp);
      this.palabraes = resp;
    })
  }
  
  MensajeBorrarPalabra(palabra: string){
    this.palabraes = this.palabraes.filter(pal => pal.palabra!=palabra);
  }
  
  filtro(event: Event) {
    this.valor = (event.target as HTMLInputElement).value;
  } 

}
