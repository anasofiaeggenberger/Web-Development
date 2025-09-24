import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mostrarContacto = false;

  toggleContacto() {
    this.mostrarContacto = !this.mostrarContacto;
  }
}