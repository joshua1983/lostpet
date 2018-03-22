import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';


import { ReportarComponent } from './reportar/reportar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const APP_RUTAS: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'reportar/:uid', component: ReportarComponent },
    { path: 'inicio', component:  InicioComponent},
    { path: 'mensajes', component: MensajesComponent },
    { path: 'ayuda', component: AyudaComponent }
  ]
  

@NgModule({
    imports: [RouterModule.forRoot(APP_RUTAS)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }