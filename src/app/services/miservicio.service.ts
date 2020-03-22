import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  arrPersonas:Array<any>= [] as Array<JSON>;

  strNombre: string;
  strTelefono:string;
  strCorreo:string;
  strNotas:string;
  
  blNext: boolean;
  nota_v = false;
  strMessage='';
  strSexo:string;
  bnSexo:boolean;
  date: Date;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
 constructor(public alert: AlertController) {}

 async addPerson(){
   this.blNext=false;
   if(this.strSexo==="Masculino"){
     this.bnSexo=true;
   }else if(this.strSexo==="Femenino"){
     this.bnSexo=false;
   }
   (this.strNombre) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo nombre');
   (this.strTelefono) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo telefono');
   (this.strCorreo) ? (this.regexp.test(this.strCorreo)) ? this.fnError(): this.fnError('Error: Error correo no valido'): this.fnError('Error: Error favor de llenar el campo correo');
   (this.strNotas) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo notas');
   (this.strSexo) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo sexo');
   (this.date) ? this.fnError(): this.fnError('Error: Error favor de llenar El campo fecha');        
   if(!this.blNext){
   const jsonpersona: any = {
     nombre:this.strNombre,
     telefono:this.strTelefono,
     email:this.strCorreo,
     nota:this.strNotas,
     sex:this.strSexo,
     fecha:this.date
   }
   const alert=await this.alert.create({
     header: 'Exito',
     message:'Ha sido agregado un contacto',
     buttons:['OK'] 
   });

   await alert.present();
   let result= await alert.onDidDismiss();
   console.log(result);

   this.arrPersonas.push(jsonpersona);
   console.log(this.arrPersonas);
   }else {
     this.presentAlert();
   }
 }
 fnError(msg?: string){
   if(msg){
     console.log(msg);
     this.strMessage += msg + '<br>';
     this.blNext=true;
   }else if(this.blNext){
     this.blNext=true;
   }else{
     this.blNext=false;
   }
 } 
 async presentAlert() {
   const alert = await this.alert.create({
     header: 'Exito',
     message: this.strMessage,
     buttons: ['OK']
   });

   await alert.present();
 }
 async delete(item) {
   const alert = await this.alert.create({
     message: 'Seguro que deseas eliminarlo',
     buttons: [
       {
         text:'Cancelar',
         role:'cancelar'
       },
       {
         text:'Aceptar',
         handler:()=>{
           let i = this.arrPersonas.indexOf(item);
           this.arrPersonas.splice(i,1);
         }
       }
     ]
   });
   await alert.present();
 }
}

