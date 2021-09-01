import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingles, start } from '../ingles';
import { InglesService } from '../ingles.service';

@Component({
  selector: 'app-formulario-en',
  templateUrl: './formulario-en.component.html',
  styleUrls: ['./formulario-en.component.scss']
})
export class FormularioEnComponent implements OnInit {
  palabraen: Ingles = start();
  word: string = '';

  @Input() pulsado1: boolean = true;
  @Output() wordAnadida: EventEmitter<Ingles> =  new EventEmitter();
  @Output() wordEditada: Ingles = start();

  
  constructor(private inglesService: InglesService, 
              private formBuilder: FormBuilder,
              private route: Router,
              private snackbar: MatSnackBar,
              private router: ActivatedRoute) { 
              }

  registerForm1 = this.formBuilder.group({
    palabra:['',Validators.required],
    palabraEspanol:['',[Validators.required, Validators.minLength(1), Validators.max(23)]]
  });
 
  validacionCampos(campo: string){
    return this.registerForm1.controls[campo].errors && this.registerForm1.controls[campo].touched
  }

  clean() {
    this.registerForm1.patchValue({
      palabra:'',
      palabraEspanol:''
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        this.word = params['word']
        console.log(this.word)
      }
    )
    
    if(!this.word) return;
    this.inglesService.getWord(this.word).subscribe(en=>{
      console.log(en)
      this.palabraen = en;
      this.registerForm1.patchValue(en)
    })

  }

  guardar1(){
    if(this.registerForm1.invalid){
      console.log(this.registerForm1.value)
      alert("Rellena todos los campos")
    } else {
      if(!this.word){
        console.log("creando")
        this.añadirWord();
        this.clean();
      } else{
        console.log("editando")
        this.actualizarWord();
        this.clean();
      }
      
    }
    
  }

  añadirWord():void{
    console.log(this.registerForm1.value);
    this.palabraen = this.registerForm1.value;
    this.inglesService.addWord(this.palabraen).subscribe(en =>{
      this.palabraen = en;
      this.wordAnadida.emit(this.palabraen)
      this.route.navigate(['/ingles']);
      this.mostrarNotificacion('Palabra registrada');
    })
  }

  actualizarWord():void{
    this.palabraen = this.registerForm1.value
    this.palabraen.palabra = this.word;
    this.inglesService.updateWord(this.registerForm1.value).subscribe(en=>{
      this.palabraen = en;
      this.route.navigate(['/ingles']);
      this.mostrarNotificacion('Palabra modificada');
    })
  }

  mostrarNotificacion(mensaje: string){
    this.snackbar.open(mensaje, '✔️',{
      duration:2500
    })
  }
}