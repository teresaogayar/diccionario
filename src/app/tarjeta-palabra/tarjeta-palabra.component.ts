import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { empezar, Espanol } from '../espanol';
import { EspanolService } from '../espanol.service';

@Component({
  selector: 'app-tarjeta-palabra',
  templateUrl: './tarjeta-palabra.component.html',
  styleUrls: ['./tarjeta-palabra.component.scss']
})
export class TarjetaPalabraComponent implements OnInit {
  @Input() objetopalabra: Espanol = empezar();
  @Output() enviarBorrado: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private espanolService: EspanolService, 
    private route: Router,
    private snackbar: MatSnackBar
   ) { }
 
 
   ngOnInit(): void {
   }
 
   
 
   borrarPalabra(){
     this.route.navigate(['/espanol'])
     this.espanolService.deletePalabra(this.objetopalabra.palabra).subscribe();
     this.enviarBorrado.emit(this.objetopalabra.palabra);
     this.mostrarNotificacionBorrado("Palabra eliminada");
 
   }
   mostrarNotificacionBorrado(mensaje: string){
     this.snackbar.open(mensaje, '🗑️',{
       duration:2500
     })
   }
 
 }
 