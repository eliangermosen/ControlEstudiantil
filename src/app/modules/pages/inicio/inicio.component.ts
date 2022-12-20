import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Estudiante } from '../../interfaces/estudiante';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {

  estudiantes!:Estudiante[];

  constructor(private api: ApiService, private router:Router){}

  dataSource:any;

  ngOnInit(): void{
    this.getData();
  }

  getData(){
    this.api.getEstudiantes().subscribe(data => {
      console.log(data);
      this.estudiantes = data;
      this.dataSource = new MatTableDataSource(this.estudiantes);
    });
  }

  displayedColumns: string[] = ['matricula', 'nombre', 'apellido', 'correo', 'accion'];
  // dataSource = new MatTableDataSource<Estudiante>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  detallesEstudiante(id:any){
    this.router.navigate(['estudiante',id]);
  }

  crearEstudiante(){
    this.router.navigate(['form']);
  }

}