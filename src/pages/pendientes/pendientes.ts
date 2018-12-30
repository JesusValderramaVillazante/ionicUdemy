import { Component, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(
    public deseosService: DeseosService,
    private navCtrl: NavController,
    private alertCtrl: AlertController ) {
  
  }

  listaSeleccionada(lista: Lista){
      this.navCtrl.push(AgregarPage, {titulo: lista.titulo, lista: lista})
  } 

  public agregarLista(): void {
    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
      },{
        text: 'Agregar',
        handler: data => {
          if (data.titulo.length === 0) {
            return;
          }
          this.navCtrl.push(AgregarPage, {titulo: data.titulo});
        }
      }]
    });
    alerta.present();
  }

  public borrarLista(lista: Lista): void{
    this.deseosService.borrarList(lista);
  }
}
