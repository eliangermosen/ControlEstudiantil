import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/pages/inicio/inicio.component';
import { EstudianteComponent } from './modules/pages/estudiante/estudiante.component';
import { AsistenciaComponent } from './modules/pages/asistencias/asistencia/asistencia.component';
import { CalificacionComponent } from './modules/pages/calificacion/calificacion.component';
import { FormComponent } from './modules/pages/form/form.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'estudiante/:id', component: EstudianteComponent},
  {path:'asistencia', component: AsistenciaComponent},
  {path:'calificacion', component: CalificacionComponent},
  {path:'form', component: FormComponent},
  {path:'**', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
