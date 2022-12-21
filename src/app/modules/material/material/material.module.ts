import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//AQUI SE DEBERAN IMPORTAR TODO LO QUE TENGA QUE VER CON ANGULAR MATERIAL

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
