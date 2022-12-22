import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Estudiante } from 'src/app/modules/interfaces/estudiante';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  estados: string[] = ['Presente', 'Ausente',	'Excusa',	'Retirado'];
  displayedColumns: string[] = ['matricula', 'nombre', 'asistencia'];
  dataSource:any;
  estudiantes!:Estudiante[];
  
  constructor(
    private api: ApiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

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

  asistenciaEstudiante = new FormGroup({
    estudianteId: new FormControl(0),
    fecha: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  })

  irAsistencia(){
    this.router.navigate(['asistencia']);
  }

  onSubmit(form:any){
    console.log('llegando');
    console.log(form);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
