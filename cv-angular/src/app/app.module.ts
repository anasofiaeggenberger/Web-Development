import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { EducacionExperienciaComponent } from './components/educacion-experiencia/educacion-experiencia.component';
import { CvBotonComponent } from './components/cv-boton/cv-boton.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { StudiesComponent } from './components/studies/studies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    SkillsComponent,
    TecnologiasComponent,
    EducacionExperienciaComponent,
    CvBotonComponent,
    FooterComponent,
    JobsComponent,
    StudiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }