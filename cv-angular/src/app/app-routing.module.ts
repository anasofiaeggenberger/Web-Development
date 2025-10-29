import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionExperienciaComponent } from './components/educacion-experiencia/educacion-experiencia.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProgrammingQuoteComponent } from './components/programming-quote/programming-quote.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  {
    path: 'experience',
    component: EducacionExperienciaComponent,
    children: [
      { path: 'jobs', component: JobsComponent },
      { path: 'studies', component: StudiesComponent }
    ]
  },
  { path: 'projects', component: ProyectosComponent },
  { path: 'quote', component: ProgrammingQuoteComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}