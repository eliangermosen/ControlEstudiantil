import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { MaterialModule } from './material/material/material.module';
import { AsistenciaComponent } from './pages/asistencias/asistencia/asistencia.component';
import { CalificacionComponent } from './pages/calificaciones/calificacion/calificacion.component';
import { FormComponent } from './pages/form/form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';//reactividad formularios

import { HttpClientModule } from '@angular/common/http';
import { FiltroEstudiantePipe } from './pipes/filtro-estudiante.pipe';
import { CalificarComponent } from './pages/calificaciones/calificar/calificar.component';
import { ControlComponent } from './pages/asistencias/control/control.component';//peticiones http

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    EstudianteComponent,
    AsistenciaComponent,
    CalificacionComponent,
    FormComponent,
    FiltroEstudiantePipe,
    CalificarComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ]
})
export class ModulesModule { }
