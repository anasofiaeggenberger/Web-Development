import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { EducacionExperienciaComponent } from './components/educacion-experiencia/educacion-experiencia.component';
import { CvBotonComponent } from './components/cv-boton/cv-boton.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    SkillsComponent,
    TecnologiasComponent,
    EducacionExperienciaComponent,
    CvBotonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }