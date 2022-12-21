import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/pages/inicio/inicio.component';
import { EstudianteComponent } from './modules/pages/estudiante/estudiante.component';
import { AsistenciaComponent } from './modules/pages/asistencias/asistencia/asistencia.component';
import { CalificacionComponent } from './modules/pages/calificaciones/calificacion/calificacion.component';
import { FormComponent } from './modules/pages/form/form.component';
import { CalificarComponent } from './modules/pages/calificaciones/calificar/calificar.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'estudiante/:id', component: EstudianteComponent},
  {path:'asistencia', component: AsistenciaComponent},
  {path:'calificacion', component: CalificacionComponent},
  {path:'form', component: FormComponent},
  {path:'form/:id', component: FormComponent},
  {path:'calificar/:id', component: CalificarComponent},
  {path:'**', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
