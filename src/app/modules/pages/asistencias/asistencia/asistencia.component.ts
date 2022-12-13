import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 10, name: 'Neon', weight: 20.1797},
  {position: 11, name: 'Sodium', weight: 22.9897},
  {position: 12, name: 'Magnesium', weight: 24.305},
  {position: 13, name: 'Aluminum', weight: 26.9815},
  {position: 14, name: 'Silicon', weight: 28.0855},
  {position: 15, name: 'Phosphorus', weight: 30.9738},
  {position: 16, name: 'Sulfur', weight: 32.065},
  {position: 17, name: 'Chlorine', weight: 35.453},
  {position: 18, name: 'Argon', weight: 39.948},
  {position: 19, name: 'Potassium', weight: 39.0983},
  {position: 20, name: 'Calcium', weight: 40.078},
];
