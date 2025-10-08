import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionExperienciaComponent } from './components/educacion-experiencia/educacion-experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  { path: 'about', component: HeaderComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProyectosComponent }, 
  { 
    path: 'experience', 
    component: EducacionExperienciaComponent,
    children: [
      { path: 'jobs', component: JobsComponent },
      { path: 'studies', component: StudiesComponent }
    ]
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}