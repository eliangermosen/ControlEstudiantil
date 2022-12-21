import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ApiService } from 'src/app/services/api/api.service';
import { Estudiante } from '../../interfaces/estudiante';
import { Calificacion } from '../../interfaces/calificacion';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements AfterViewInit {

  estudiante!:Estudiante;
  calificacion!:Calificacion;

  // dataSource: any;

  constructor(
    private api: ApiService, 
    private activatedRouter: ActivatedRoute,
    private roter: Router
    ){}

  ngOnInit(): void{
    let estudianteId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(estudianteId);
    this.getData(estudianteId);
  }

  getData(id:any){
    this.api.getEstudiante(id).subscribe((data) => {
      this.estudiante = data;
      console.log(this.estudiante);
      console.log(this.estudiante.calificacions);
      for (const [key, value] of Object.entries(this.estudiante.calificacions[0])) {
        console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
        if(key === 'id' || key === 'estudianteId') continue
        MATERIA_DATA.push({asignatura:key, calificacion:value})
      }
      console.log(MATERIA_DATA);
      // console.log(this.estudiante.calificacions.matematicas);
      /* this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource._data._value); */
    });
  }

  public materias:  string[] = ['Lengua Espanola', 'Matematicas', 'Ciencias Sociales', 'Ciencias Naturales']
  displayedColumns: string[] = ['asignatura', 'calificacion', 'literal'];
  dataSource = new MatTableDataSource<Materias>(MATERIA_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    MATERIA_DATA = []
  }

  calculoGeneral(){
    let result!:number;
    MATERIA_DATA.forEach(element => {
      // console.log(element.calificacion)
      result += element.calificacion;
      console.log(result)
    })
    console.log("valor final")
    console.log(result)
    result /= 4;
    console.log(result)
    // let resultado:number=(cali1+cali2+cali3+cali4)/4;
    return this.calculoLiteral(result);
  }

  calculoLiteral(literal:number){
    if(literal <= 69) return "F"

    if(literal <= 79) return "C"

    if(literal <= 89) return "B"

    return "A"
  }
}

export interface Materias {
  asignatura: string;
  calificacion: number;
  // literal: number;
}

let MATERIA_DATA: Materias[] = [
  /* {asignatura: 'Lengua Espanola', calificacion: 98, literal: 98},
  {asignatura: 'Matematicas', calificacion: 99, literal: 98},
  {asignatura: 'Ciencias Sociales', calificacion: 79, literal: 98},
  {asignatura: 'Ciencias Naturales', calificacion: 88, literal: 98} */
];
