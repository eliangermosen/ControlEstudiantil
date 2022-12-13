import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements AfterViewInit {
  displayedColumns: string[] = ['matricula', 'nombre', 'apellido', 'correo', 'accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  matricula: string;
  nombre: string;
  apellido: string;
  correo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: '2022-1111', nombre: 'Nombre1', apellido: 'Estudiante', correo: 'correo1@gmail.com'},
  {matricula: '2022-2222', nombre: 'Nombre', apellido: 'Estudiante2', correo: 'correo2@gmail.com'},
  {matricula: '2022-3333', nombre: 'Nombre3', apellido: 'Estudiante', correo: 'correo3@gmail.com'},
  {matricula: '2022-4444', nombre: 'Nombre', apellido: 'Estudiante4', correo: 'correo4@gmail.com'}
];