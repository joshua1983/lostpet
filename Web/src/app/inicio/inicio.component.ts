import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase/app';
import { MascotasService } from '../servicios/mascotas.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mascotas = [];

  constructor(
    public mascotasService:MascotasService) {
      this.mascotasService.getMascotas().subscribe( mascotasData => {
        this.mascotas = mascotasData;
      } );
     }

  ngOnInit() {
  }

}
