import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EspanolComponent } from './espanol/espanol.component';
import { FormularioEnComponent } from './formulario-en/formulario-en.component';
import { FormularioEsComponent } from './formulario-es/formulario-es.component';
import { InglesComponent } from './ingles/ingles.component';
import { LoginComponent } from './login/login.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { RegisterComponent } from './register/register.component';
import { EspanolResolver } from './resolvers/espanol.resolver';
import { InglesResolver } from './resolvers/ingles.resolver';

const routes: Routes = [
  {
    path:'espanol', component: EspanolComponent, resolve:{ espanol: EspanolResolver}, canActivate:[AuthGuard]
  },
  {
    path:'ingles', component: InglesComponent, resolve:{ ingles: InglesResolver}, canActivate:[AuthGuard]
  },
  {
    path:'espanol/formulario/:palabra', component: FormularioEsComponent, canActivate:[AuthGuard]
  },
  {
    path:'espanol/formulario', component: FormularioEsComponent, canActivate:[AuthGuard]
  },
  {
    path:'', component: PagInicioComponent
  },
  {
    path:'ingles/formulario/:word', component: FormularioEnComponent, canActivate:[AuthGuard]
  },
  {
    path:'ingles/formulario', component: FormularioEnComponent, canActivate:[AuthGuard]
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
