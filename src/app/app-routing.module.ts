import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolComponent } from './espanol/espanol.component';
import { FormularioEnComponent } from './formulario-en/formulario-en.component';
import { FormularioEsComponent } from './formulario-es/formulario-es.component';
import { InglesComponent } from './ingles/ingles.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';

const routes: Routes = [
  {
    path:'espanol', component: EspanolComponent
  },
  {
    path:'ingles', component: InglesComponent
  },
  {
    path:'español/formulario', component: FormularioEsComponent
  },
  {
    path:'espanol/:palabra', component: FormularioEsComponent
  },
  {
    path:'', component: PagInicioComponent
  },
  {
    path:'ingles/formulario', component: FormularioEnComponent
  },
  {
    path:'ingles/:word', component: FormularioEnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
