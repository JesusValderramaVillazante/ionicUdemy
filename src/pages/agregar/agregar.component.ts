import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {
    public lista: Lista;
    public nombreItem: string = '';

    constructor(
        public deseosService: DeseosService,
        private navParams: NavParams) {
        const titulo = this.navParams.get('titulo');
        this.lista = new Lista(titulo);
    }

    public agregarItem(): void{
        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.nombreItem = '';
    }

    public actualizarTarea(item: ListaItem){
        item.completado = !item.completado;
    }
}
