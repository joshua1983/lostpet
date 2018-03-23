export class Mascota{

    lat: number; 
    lng: number; 
    descripcion: string; 
    dinero: number; 
    contacto: number; 
    uid: string;

    constructor(_lat, _lng, _descripcion, _dinero, _contacto, _uid){
        this.lat= _lat;
        this.lng= _lng;
        this.descripcion=_descripcion;
        this.dinero= _dinero;
        this.contacto= _contacto; 
        this.uid= _uid;
    }
}