import { Component, OnInit } from '@angular/core';
import { toast } from 'angular2-materialize';
import { MascotasService } from '../servicios/mascotas.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Upload } from '../servicios/upload';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {

  descripcion: string;
  recompensa: number;
  telefono: number;
  procesando: boolean;
  selectFiles: FileList;
  currentUpload: Upload;
  userId:string;

  constructor(public mascotasService:MascotasService, 
              private router:Router,
              private route:ActivatedRoute) {
    this.procesando = false;
    
   }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('uid');
  }

  publicar(){
    if (navigator.geolocation){
      this.procesando = true;
      navigator.geolocation.getCurrentPosition( function (position)  {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        let file = this.selectFiles.item(0);
        this.currentUpload = new Upload(file);
        this.mascotasService.agregarMascota(lat,lng,this.descripcion, this.recompensa, this.telefono, this.currentUpload, this.userId);
        toast("Datos guardados.", 4000);
        this.procesando = false;
        this.router.navigateByUrl("/inicio");
      }.bind(this));
    }else{
      toast("No se pudo determinar la ubicacion actual", 4000);
    }
  }

  detectFiles(event){
    this.selectFiles = event.target.files;
  }

  

}
