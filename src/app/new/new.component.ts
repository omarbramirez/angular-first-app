import { Component } from '@angular/core';
import {SubNewComponent} from '../sub-new/sub-new.component'
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [SubNewComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  mensajeRecibido:string = ''
  recibirMensaje($event: string){
    this.mensajeRecibido = $event
  }

  valor: number = 0
  recibirSum($event: void){
    this.valor++
  }
  recibirRest($event:void){
    this.valor--
  }
}
