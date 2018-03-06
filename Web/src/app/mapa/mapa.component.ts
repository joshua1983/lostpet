import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnChanges {
  @Input("mascotas")
  mascotas:any;
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 15;
  

  constructor() {
    
  }

  ngOnInit() {
    console.log(this.mascotas);
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }else{
      console.log("localizacion no activada")
    }
    
  }

  ngOnChanges(cambios: SimpleChanges){
    
  }


}
