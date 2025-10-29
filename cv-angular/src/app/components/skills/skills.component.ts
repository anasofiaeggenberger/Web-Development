import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  filtro: string = '';

  habilidades: string[] = [
    'Trabajo en equipo',
    'Comunicación',
    'Resolución de problemas',
    'Adaptabilidad',
    'Liderazgo',
    'Gestión del tiempo',
    'Aprendizaje autónomo'
  ];

  skills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.skills;
  }

  get habilidadesFiltradas(): string[] {
    return this.habilidades.filter(h =>
      h.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}