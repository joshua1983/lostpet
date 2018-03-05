import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterializeModule } from 'angular2-materialize';
import { MapaComponent } from './mapa/mapa.component';



export const firebaseConfig = {
  apiKey: "AIzaSyC6zxtjlt16qFvkK61BPfHjy7fW8FfEL30",
  authDomain: "mascotas-1497482247269.firebaseapp.com",
  databaseURL: "https://mascotas-1497482247269.firebaseio.com",
  storageBucket: "mascotas",
  messagingSenderId: "53105126957"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6zxtjlt16qFvkK61BPfHjy7fW8FfEL30'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
