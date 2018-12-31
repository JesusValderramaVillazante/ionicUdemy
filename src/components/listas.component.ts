import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    @Input() terminada: boolean = false;

    constructor(
        public deseosService: DeseosService,
        private navCtrl: NavController) {

    }

    public listaSeleccionada(lista: Lista): void {
        this.navCtrl.push(AgregarPage, { titulo: lista.titulo, lista: lista })
    }

    public borrarLista(lista: Lista): void {
        this.deseosService.borrarList(lista);
    }
}
