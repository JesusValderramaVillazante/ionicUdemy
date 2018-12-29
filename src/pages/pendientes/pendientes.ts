import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(public deseosService: DeseosService) {
  
  }

}
