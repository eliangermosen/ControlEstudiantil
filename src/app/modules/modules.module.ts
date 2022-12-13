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
    MaterialModule
  ]
})
export class ModulesModule { }
