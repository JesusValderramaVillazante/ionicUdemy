import { Injectable } from '@angular/core';
import { Lista } from '../models'; 

@Injectable()
export class DeseosService {
    listas: Lista[] = [];
    constructor() {
        this.cargarStorage();
        /*
        const lista1 = new Lista('recolectar piedras del infinito');
        const lista2 = new Lista('heroes a vencer');

        this.listas.push(lista1, lista2);
        */
    }

    public agregarLista( lista: Lista): void{
        this.listas.push( lista );
        this.guardarStorage();
    } 
    
    public guardarStorage(): void {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    public cargarStorage(): void {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }
}