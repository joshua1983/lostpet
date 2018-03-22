import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MascotasService{
    mascotas = [];
    

    constructor(public afDB: AngularFireDatabase) {
            
    }

    public agregarMascota(lat,lng, titulo, recompensa, telefono, usuario){
        let mascotaPerdida =  { lat: lat, lng: lng, descripcion: titulo, dinero: recompensa, contacto: telefono, uid: usuario};
        let bd = this.afDB.database.ref('mascotas');
        let nuevaMascotaPerdida = bd.push();
        nuevaMascotaPerdida.set(mascotaPerdida);
        
    }

    public getMascotas(){
        
        return this.afDB.list('mascotas/').valueChanges();
        
    }

    public getMascotasByUserID(id:string){
        
        return this.afDB.list('mascotas/', ref => ref.equalTo(""+id+"")).valueChanges();
    }
}