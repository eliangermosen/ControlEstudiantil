import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Estudiante } from '../../interfaces/estudiante';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {

  estudiantes!:Estudiante[];
  dataSource:any;
  campoFiltro: string = '';

  constructor(private api: ApiService, private router:Router){}

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

  filtrado(){
    this.dataSource.filter = this.campoFiltro.trim().toLowerCase();
  }

  detallesEstudiante(id:any){
    this.router.navigate(['estudiante',id]);
  }

  crearEstudiante(){
    this.router.navigate(['form']);
  }

  editarEstudiante(id:any){
    console.log(id);
    this.router.navigate(['form',id]);
  }

  eliminar(id:any){
    console.log(id);
    Swal.fire({
      title: 'Quiere eliminarlo?',
      text: "No podras retroceder el tiempo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancela!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("acepto con el id "+ id);
        this.api.deleteEstudiante(id).subscribe((respuesta:any) => {
          console.log(respuesta);
        });
        setTimeout(() => { location.reload(); },700); 
        Swal.fire(
          'Eliminado!',
          'Estudiante eliminado.',
          'success'
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Estudiante a salvo',
          'error'
        )
        console.log("Cancelo");
      }
    })
  }

}