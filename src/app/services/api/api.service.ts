import { Injectable } from '@angular/core';

import { Estudiante } from 'src/app/modules/interfaces/estudiante';
import { Calificacion } from 'src/app/modules/interfaces/calificacion';
import { Asistencia } from 'src/app/modules/interfaces/asistencia';
import { EstudiantesAsistencias } from '../../modules/interfaces/estudiantes-asistencias';
import { EstudiantesCalificaciones } from './../../modules/interfaces/estudiantes-calificaciones';
import { API_URL } from './settings';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // ESTUDIANTE:
  // GET ALL
  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(API_URL+'Estudiantes');
  };
  // GET BY ID
  getEstudiante(id:number):Observable<any>{
    return this.http.get<any>(API_URL+'Estudiantes/'+id);
  };
  // POST
  postEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(API_URL+'Estudiantes', estudiante);
  };
  // PUT
  putEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.put<Estudiante>(API_URL+'Estudiantes/'+estudiante.id, estudiante);
  };
  // DELETE
  deleteEstudiante(id:number):Observable<any>{
    return this.http.delete<any>(API_URL+'Estudiantes/'+id);
  };

  // RELACION ESTUDIANTES-ASISTENCIAS-CALIFICACIONES

  // GET ALL ESTUDIANTES-ASISTENCIAS
  getEstudiantesAsistencias():Observable<EstudiantesAsistencias[]>{
    return this.http.get<EstudiantesAsistencias[]>(API_URL+'Estudiantes/asistencias');
  };
  
  // GET ALL ESTUDIANTES-CALIFICACIONES
  getEstudiantesCalificaciones():Observable<EstudiantesCalificaciones[]>{
    return this.http.get<EstudiantesCalificaciones[]>(API_URL+'Estudiantes/calificaciones');
  };
  
  // CALIFICACION:
  // GET ALL
  getCalificaciones():Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(API_URL+'Calificacion');
  };
  // GET BY ID
  getCalificacion(id:number):Observable<Calificacion>{
    return this.http.get<Calificacion>(API_URL+'Calificacion/'+id);
  };
  // POST
  postCalificacion(estudiante:Calificacion):Observable<Calificacion>{
    return this.http.post<Calificacion>(API_URL+'Calificacion', estudiante);
  };
  // PUT
  putCalificaciones(){};
  // DELETE
  deleteCalificaciones(){};
  
  // ASISTENCIA:
  // GET ALL
  getAsistencias():Observable<any>{
    return this.http.get(API_URL+'Asistenciums');
  };
  // POST
  postAsistencias(){};
  // PUT
  putAsistencias(){};
  // DELETE
  deleteAsistencias(){};
}
