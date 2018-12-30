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

        if(this.navParams.get('lista')){
            this.lista = this.navParams.get('lista');
        }else{
            this.lista = new Lista(titulo);
            this.deseosService.agregarLista(this.lista);
        }
    }

    public agregarItem(): void{
        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.deseosService.guardarStorage();
        this.nombreItem = '';
    }

    public actualizarTarea(item: ListaItem){
        item.completado = !item.completado;

        const pendientes = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this.deseosService.guardarStorage();
    }

    public borrar(index: number): void{
        this.lista.items.splice(index, 1);
        this.deseosService.guardarStorage();
    }
}
