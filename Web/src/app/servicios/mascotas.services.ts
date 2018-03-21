import { Injectable } from '@angular/core';

import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Injectable()
export class MascotasService{
    mascotas: Observable<any[]>;
    private uploadTask: firebase.storage.UploadTask;
    private pathBase: string = '/uploads';
    

    constructor(public afDB: AngularFireDatabase, private af: AngularFireModule) {
            
    }

    public agregarMascota(lat,lng, titulo, recompensa, telefono, upload:Upload){

        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(`${this.pathBase}/${upload.file.name}`).put(upload.file);
        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            },
            (error) => {
                console.log(error);
            },
            () => {
                upload.url = this.uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;

                let mascotaPerdida = { lat: lat, lng: lng, descripcion: titulo, dinero: recompensa, contacto: telefono, foto: upload.url};
                let bd = this.afDB.database.ref('mascotas');
                let nuevaMascotaPerdida = bd.push();
                nuevaMascotaPerdida.set(mascotaPerdida);

            }
        )

        
    }


    public getMascotas(){
        
        return this.afDB.list('mascotas/').valueChanges();
        
    }
}