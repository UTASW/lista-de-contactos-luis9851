import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {MiservicioService} from '../services/miservicio.service';
import { Button } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*arrPersonas:Array<any>= [] as Array<JSON>;
  blNext: boolean;
  nota = false;
  strMessage='';
  strSexo:string;
  bnSexo:boolean;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  */
  constructor(public alert: AlertController, public miservice: MiservicioService){}
  /*
  async addPerson(strNombre: string,strTelefono: string,strCorreo: string,strNotas: string,strSexo: string){
    this.blNext=false;
    if(this.strSexo==="Masculino"){
      this.bnSexo=true;
    }else if(this.strSexo==="Femenino"){
      this.bnSexo=false;
    }
    (strNombre) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo nombre');
    (strTelefono) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo telefono');
    (strCorreo) ? (this.regexp.test(strCorreo)) ? this.fnError(): this.fnError('Error: Error correo no valido'): this.fnError('Error: Error favor de llenar el campo correo');
    (strNotas) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo notas');
    (strSexo) ? this.fnError(): this.fnError('Error: Error favor de llenar los campo sexo');        
    if(!this.blNext){
    const jsonpersona: any = {
      strNombre,
      strTelefono,
      strCorreo,
      strNotas,
      strSexo
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
  */
 /*
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
  */
}
