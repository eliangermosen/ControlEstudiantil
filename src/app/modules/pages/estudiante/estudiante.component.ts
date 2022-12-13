import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements AfterViewInit {
  displayedColumns: string[] = ['asignatura', 'calificacion', 'literal'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  calculoGeneral(cali1:number, cali2:number, cali3:number, cali4:number){
    let resultado:number=(cali1+cali2+cali3+cali4)/4;
    this.calculoLiteral(resultado);
  }

  calculoLiteral(literal:number){
    if(literal <= 69) return "F"

    if(literal <= 79) return "C"

    if(literal <= 89) return "B"

    return "A"
  }
}

export interface PeriodicElement {
  asignatura: string;
  calificacion: number;
  literal: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {asignatura: 'Lengua Espanola', calificacion: 98, literal: 98},
  {asignatura: 'Matematicas', calificacion: 99, literal: 98},
  {asignatura: 'Ciencias Sociales', calificacion: 79, literal: 98},
  {asignatura: 'Ciencias Naturales', calificacion: 88, literal: 98},
  {asignatura: 'Ciencias Naturales2', calificacion: 68, literal: 68}
];
