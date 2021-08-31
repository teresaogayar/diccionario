import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolComponent } from './espanol/espanol.component';
import { FormularioEsComponent } from './formulario-es/formulario-es.component';
import { InglesComponent } from './ingles/ingles.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
