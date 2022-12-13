import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { MaterialModule } from './material/material/material.module';
import { AsistenciaComponent } from './pages/asistencias/asistencia/asistencia.component';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { FormComponent } from './pages/form/form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    EstudianteComponent,
    AsistenciaComponent,
    CalificacionComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class ModulesModule { }
