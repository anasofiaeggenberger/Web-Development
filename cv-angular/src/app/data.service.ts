import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills = [
    'Angular',
    'TypeScript',
    'CSS',
    'HTML',
    'Python',
    'JavaScript'
  ];

  jobs = [
    'Frontend Developer en Wais Solutions (2024 - Presente)',
    'Desarrolladora Junior (Intern) en Tech4Humanity (2023)'
  ];

  studies = [
    'Bachillerato en Ciencias y Letras – Colegio Interamericano de Guatemala (2023)',
    'Ingeniería en Ciencia de la Computación – Universidad Francisco Marroquín (2024 - Presente)'
  ];

}
