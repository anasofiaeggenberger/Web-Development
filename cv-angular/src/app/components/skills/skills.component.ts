import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  filtro: string = '';
  habilidades: string[] = [
    'Trabajo en equipo', 'Comunicación', 'Resolución de problemas',
    'Adaptabilidad', 'Liderazgo', 'Gestión del tiempo', 'Aprendizaje autónomo'
  ];

  get habilidadesFiltradas(): string[] {
    return this.habilidades.filter(h =>
      h.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}