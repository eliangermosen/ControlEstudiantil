import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EstudiantesCalificaciones } from './../../../interfaces/estudiantes-calificaciones';
import { ApiService } from 'src/app/services/api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, AfterViewInit {

  EstudiantesCalificaciones:EstudiantesCalificaciones[] = [];
  dataSource:any;
  campoFiltro: string = '';

  constructor(private router:Router,private api: ApiService){}

  ngOnInit(): void{
    this.getData();
  }

  getData(){
    this.api.getEstudiantesCalificaciones().subscribe(data => {
      console.log(data);
      this.EstudiantesCalificaciones = data;
      this.dataSource = new MatTableDataSource(this.EstudiantesCalificaciones);
    });
  }

  displayedColumns: string[] = ['matricula', 'nombre', 'lengua', 'matematica', 'sociales', 'naturales', 'accion'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  colorDinamico(valor:any){
    if(valor >= 90) return "estado-green"

    if(valor >= 80) return "estado-yellow "

    if(valor >= 70) return "estado-gris"

    return "estado-red"
  }

  filtrado(){
    console.log(this.campoFiltro);
    this.dataSource.filter = this.campoFiltro.trim().toLowerCase();
  }

  calificar(id:any){
    console.log(id);
    this.router.navigate(['calificacion',id]);
  }

}

export interface PeriodicElement {
  matricula: string;
  nombre: string;
  apellido: string;
  lengua: string;
  matematica: string;
  sociales: string;
  naturales: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: '2022-1111', nombre: 'Nombre1', apellido: 'Estudiante', lengua: '84', matematica: '94', sociales: '74', naturales: '64'},
  {matricula: '2022-2222', nombre: 'Nombre', apellido: 'Estudiante2', lengua: '94', matematica: '74', sociales: '54', naturales: '74'},
  {matricula: '2022-3333', nombre: 'Nombre3', apellido: 'Estudiante', lengua: '54', matematica: '64', sociales: '74', naturales: '81'},
  {matricula: '2022-4444', nombre: 'Nombre', apellido: 'Estudiante4', lengua: '74', matematica: '84', sociales: '84', naturales: '90'}
];