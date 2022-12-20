import { Injectable } from '@angular/core';

import { Estudiante } from 'src/app/modules/interfaces/estudiante';
import { Calificacion } from 'src/app/modules/interfaces/calificacion';
import { Asistencia } from 'src/app/modules/interfaces/asistencia';
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
  postEstudiantes(){};
  // PUT
  putEstudiantes(){};
  // DELETE
  deleteEstudiantes(){};
  
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
  postCalificaciones(){};
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
