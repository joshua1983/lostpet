import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { UsuarioComponent } from '../components/usuario/usuario';
import { HomePage } from '../pages/home/home';
import { PerdidoPage } from '../pages/perdido/perdido';
import { MascotasService } from '../servicios/mascotas.services';

export const firebaseConfig = {
    apiKey: "AIzaSyC6zxtjlt16qFvkK61BPfHjy7fW8FfEL30",
    authDomain: "mascotas-1497482247269.firebaseapp.com",
    databaseURL: "https://mascotas-1497482247269.firebaseio.com",
    storageBucket: "mascotas",
    messagingSenderId: "53105126957"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerdidoPage,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerdidoPage,
    UsuarioComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    MascotasService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
