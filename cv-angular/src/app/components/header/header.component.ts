import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  saludo: string = '';

  ngOnInit(): void {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else {
      this.saludo = '¡Buenas noches!';
    }
  }
}