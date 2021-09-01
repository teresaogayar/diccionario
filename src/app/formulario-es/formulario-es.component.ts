import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { empezar, Espanol } from '../espanol';
import { EspanolService } from '../espanol.service';

@Component({
  selector: 'app-formulario-es',
  templateUrl: './formulario-es.component.html',
  styleUrls: ['./formulario-es.component.scss']
})
export class FormularioEsComponent implements OnInit {
  palabraes: Espanol = empezar();
  palabra: string = '';

  @Input() pulsado: boolean = true;
  @Output() palabraAnadida: EventEmitter<Espanol> =  new EventEmitter();
  @Output() palabraEditada: Espanol = empezar();

  
  constructor(private espanolService: EspanolService, 
              private formBuilder: FormBuilder,
              private route: Router,
              private snackbar: MatSnackBar,
              private router: ActivatedRoute) { 
              }

  registerForm = this.formBuilder.group({
    palabra:['',[Validators.required, Validators.minLength(1), Validators.max(23)]],
    descripcion:['',Validators.required]
  });
 
  validacionCampos(campo: string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched
  }



  limpiar() {
    this.registerForm.patchValue({
      palabra:'',
      description:''
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        this.palabra = params['palabra']
        console.log(this.palabra)
      }
    )
    
    if(!this.palabra) return;
    this.espanolService.getPalabra(this.palabra).subscribe(es=>{
      console.log(es)
      this.palabraes = es;
      this.registerForm.patchValue(es)
    })

  }

  guardar(){
    if(this.registerForm.invalid){
      alert("Rellena todos los campos")
    } else {
      if(!this.palabra){
        console.log("creando")
        this.añadirPalabra();
        this.limpiar();
      } else{
        console.log("editando")
        this.actualizarPalabra();
        this.limpiar();
      }
      
    }
    
  }
  

  añadirPalabra():void{
    console.log(this.registerForm.value);
    this.palabraes = this.registerForm.value;
    this.espanolService.addPalabra(this.palabraes).subscribe(es =>{
      this.palabraes = es;
      this.palabraAnadida.emit(this.palabraes)
      this.route.navigate(['/espanol']);
      this.mostrarNotificacion('Palabra registrada');
    })
  }

  actualizarPalabra():void{
    this.palabraes = this.registerForm.value
    this.palabraes.palabra = this.palabra;
    this.espanolService.updatePalabra(this.registerForm.value).subscribe(es=>{
      this.palabraes = es;
      this.route.navigate(['/espanol']);
      this.mostrarNotificacion('Palabra modificada');
    })
  }

  mostrarNotificacion(mensaje: string){
    this.snackbar.open(mensaje, '✔️',{
      duration:2500
    })
  }
}
