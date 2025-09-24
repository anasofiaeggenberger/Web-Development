import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  habilidades: string[] = [
    'Trabajo en equipo',
    'Comunicación',
    'Resolución de problemas',
    'Adaptabilidad',
    'Liderazgo',
    'Gestión del tiempo',
    'Aprendizaje autónomo'
  ];

  filtro: string = '';

  get habilidadesFiltradas() {
    return this.habilidades.filter(habilidad =>
      habilidad.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}