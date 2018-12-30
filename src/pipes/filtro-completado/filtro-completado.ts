import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models';
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  transform(lista: Lista[], completado: boolean) {
    return lista.filter( lista => {
      return lista.terminada === completado
    } )
  }
}
