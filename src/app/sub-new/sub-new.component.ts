import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sub-new.component.html',
  styleUrl: './sub-new.component.css'
})
export class SubNewComponent {
  @Output() mensajeDesdeNew = new EventEmitter<string>();
  @Output() sumDesdeNew = new EventEmitter<void>();
  @Output() restDesdeNew = new EventEmitter<void>();
  mensaje: string = '';
  enviarMensaje(){
    this.mensajeDesdeNew.emit(this.mensaje)
  }
  sum(){
    this.sumDesdeNew.emit()  }
    rest(){
      this.restDesdeNew.emit()
    }
}
