import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';



import {​​​​​​​​A11yModule}​​​​​​​​ from'@angular/cdk/a11y';
import {​​​​​​​​ClipboardModule}​​​​​​​​ from'@angular/cdk/clipboard';
import {​​​​​​​​DragDropModule}​​​​​​​​ from'@angular/cdk/drag-drop';
import {​​​​​​​​PortalModule}​​​​​​​​ from'@angular/cdk/portal';
import {​​​​​​​​ScrollingModule}​​​​​​​​ from'@angular/cdk/scrolling';
import {​​​​​​​​CdkStepperModule}​​​​​​​​ from'@angular/cdk/stepper';
import {​​​​​​​​CdkTableModule}​​​​​​​​ from'@angular/cdk/table';
import {​​​​​​​​CdkTreeModule}​​​​​​​​ from'@angular/cdk/tree';
import {​​​​​​​​MatAutocompleteModule}​​​​​​​​ from'@angular/material/autocomplete';
import {​​​​​​​​MatBadgeModule}​​​​​​​​ from'@angular/material/badge';
import {​​​​​​​​MatBottomSheetModule}​​​​​​​​ from'@angular/material/bottom-sheet';
import {​​​​​​​​MatButtonModule}​​​​​​​​ from'@angular/material/button';
import {​​​​​​​​MatButtonToggleModule}​​​​​​​​ from'@angular/material/button-toggle';
import {​​​​​​​​MatCardModule}​​​​​​​​ from'@angular/material/card';
import {​​​​​​​​MatCheckboxModule}​​​​​​​​ from'@angular/material/checkbox';
import {​​​​​​​​MatChipsModule}​​​​​​​​ from'@angular/material/chips';
import {​​​​​​​​MatStepperModule}​​​​​​​​ from'@angular/material/stepper';
import {​​​​​​​​MatDatepickerModule}​​​​​​​​ from'@angular/material/datepicker';
import {​​​​​​​​MatDialogModule}​​​​​​​​ from'@angular/material/dialog';
import {​​​​​​​​MatDividerModule}​​​​​​​​ from'@angular/material/divider';
import {​​​​​​​​MatExpansionModule}​​​​​​​​ from'@angular/material/expansion';
import {​​​​​​​​MatGridListModule}​​​​​​​​ from'@angular/material/grid-list';
import {​​​​​​​​MatIconModule}​​​​​​​​ from'@angular/material/icon';
import {​​​​​​​​MatInputModule}​​​​​​​​ from'@angular/material/input';
import {​​​​​​​​MatListModule}​​​​​​​​ from'@angular/material/list';
import {​​​​​​​​MatMenuModule}​​​​​​​​ from'@angular/material/menu';
import {​​​​​​​​MatNativeDateModule, MatRippleModule}​​​​​​​​ from'@angular/material/core';
import {​​​​​​​​MatPaginatorModule}​​​​​​​​ from'@angular/material/paginator';
import {​​​​​​​​MatProgressBarModule}​​​​​​​​ from'@angular/material/progress-bar';
import {​​​​​​​​MatProgressSpinnerModule}​​​​​​​​ from'@angular/material/progress-spinner';
import {​​​​​​​​MatRadioModule}​​​​​​​​ from'@angular/material/radio';
import {​​​​​​​​MatSelectModule}​​​​​​​​ from'@angular/material/select';
import {​​​​​​​​MatSidenavModule}​​​​​​​​ from'@angular/material/sidenav';
import {​​​​​​​​MatSliderModule}​​​​​​​​ from'@angular/material/slider';
import {​​​​​​​​MatSlideToggleModule}​​​​​​​​ from'@angular/material/slide-toggle';
import {​​​​​​​​MatSnackBarModule}​​​​​​​​ from'@angular/material/snack-bar';
import {​​​​​​​​MatSortModule}​​​​​​​​ from'@angular/material/sort';
import {​​​​​​​​MatTableModule}​​​​​​​​ from'@angular/material/table';
import {​​​​​​​​MatTabsModule}​​​​​​​​ from'@angular/material/tabs';
import {​​​​​​​​MatToolbarModule}​​​​​​​​ from'@angular/material/toolbar';
import {​​​​​​​​MatTooltipModule}​​​​​​​​ from'@angular/material/tooltip';
import {​​​​​​​​MatTreeModule}​​​​​​​​ from'@angular/material/tree';
import {​​​​​​​​OverlayModule}​​​​​​​​ from'@angular/cdk/overlay';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EspanolComponent } from './espanol/espanol.component';
import { InglesComponent } from './ingles/ingles.component';
import { FormularioEsComponent } from './formulario-es/formulario-es.component';
import { TarjetaPalabraComponent } from './tarjeta-palabra/tarjeta-palabra.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { FormularioEnComponent } from './formulario-en/formulario-en.component';
import { TarjetaWordComponent } from './tarjeta-word/tarjeta-word.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoaderComponent } from './loader/loader.component';





@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EspanolComponent,
    InglesComponent,
    FormularioEsComponent,
    TarjetaPalabraComponent,
    PagInicioComponent,
    FormularioEnComponent,
    TarjetaWordComponent,
    PiePaginaComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,



    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,

    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
