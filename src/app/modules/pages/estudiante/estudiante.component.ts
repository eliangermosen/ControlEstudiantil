import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ApiService } from 'src/app/services/api/api.service';
import { Estudiante } from '../../interfaces/estudiante';
import { Calificacion } from '../../interfaces/calificacion';

import { Router, ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements AfterViewInit {

  estudiante!:Estudiante;
  calificacion!:Calificacion;
  dataGrafica: any;
  hasData: boolean = false;

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
        this.hasData = true;
      }
      console.log(MATERIA_DATA);
      this.convertirGrafico(this.estudiante.calificacions);
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
      // console.log(result)
    })
    // console.log("valor final")
    // console.log(result)
    result /= 4;
    // console.log(result)
    // let resultado:number=(cali1+cali2+cali3+cali4)/4;
    return this.calculoLiteral(result);
  }

  calculoLiteral(literal:number){
    if(literal >= 90) return "A"

    if(literal >= 80) return "B"

    if(literal >= 70) return "C"

    return "F"
  }

  colorDinamico(valor:any){
    if(valor >= 90) return "estado-green"

    if(valor >= 80) return "estado-yellow"

    if(valor >= 70) return "estado-gris"

    return "estado-red"
  }

  /* GRAFICO */
  convertirGrafico(data:any){
    console.log(data[0]);
    console.log(data[0].id);
    console.log(data[0].lenguaEspanola);
    console.log(data[0].matematicas);
    console.log(data[0].cienciasNaturales);
    console.log(data[0].cienciasSociales);
    for (const [key, calificacion] of Object.entries(data[0])) {
      console.log(`${key} ${calificacion}`); // "a 5", "b 7", "c 9"
      if(key === 'id' || key === 'estudianteId') continue
      this.MATERIA_DATA_GRAFICA.push({name:key, value:calificacion})
    }
    console.log(this.MATERIA_DATA_GRAFICA);
  }

  view: [number, number] = [600, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Materia';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Calificacion';

  colorScheme = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3f51b580', '#3f51b580', '#3f51b580', '#3f51b580']
    // domain: ['#9e9e9e80', '#f14b3d80', '#fdd85d80', '#60d39480']
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  MATERIA_DATA_GRAFICA: MateriasGrafica[] = [
    /* {asignatura: 'Lengua Espanola', calificacion: 98, literal: 98},
    {asignatura: 'Matematicas', calificacion: 99, literal: 98},
    {asignatura: 'Ciencias Sociales', calificacion: 79, literal: 98},
    {asignatura: 'Ciencias Naturales', calificacion: 88, literal: 98} */
  ];
}

export interface MateriasGrafica {
  name: string;
  value: any;
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
