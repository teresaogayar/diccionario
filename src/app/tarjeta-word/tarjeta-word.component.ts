import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ingles, start } from '../ingles';
import { InglesService } from '../ingles.service';

@Component({
  selector: 'app-tarjeta-word',
  templateUrl: './tarjeta-word.component.html',
  styleUrls: ['./tarjeta-word.component.scss']
})
export class TarjetaWordComponent implements OnInit {
  @Input() objetoword: Ingles = start();
  @Output() sendBorrado: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private inglesService: InglesService, 
    private route: Router,
    private snackbar: MatSnackBar
   ) { }
 
 
   ngOnInit(): void {
   }
 
   
 
   borrarWord(){
     this.route.navigate(['/ingles'])
     this.inglesService.deleteWord(this.objetoword.palabra).subscribe();
     this.sendBorrado.emit(this.objetoword.palabra);
     this.mostrarNotificacionBorrado("Palabra eliminada");
 
   }
   mostrarNotificacionBorrado(mensaje: string){
     this.snackbar.open(mensaje, '🗑️',{
       duration:2500
     })
   }
 
 }