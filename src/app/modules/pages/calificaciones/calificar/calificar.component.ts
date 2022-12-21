import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/modules/interfaces/estudiante';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent {

  datosEstudiante!:Estudiante;
  idEstudiante: number = 0;

  myControl = new FormControl('');
  options: string[] = ['1',	'2',	'3',	'4',	'5',	'6',	'7',	'8',	'9',	'10',
                      '11',	'12',	'13',	'14',	'15',	'16',	'17',	'18',	'19',	'20',
                      '21',	'22',	'23',	'24',	'25',	'26',	'27',	'28',	'29',	'30',
                      '31',	'32',	'33',	'34',	'35',	'36',	'37',	'38',	'39',	'40',
                      '41',	'42',	'43',	'44',	'45',	'46',	'47',	'48',	'49',	'50',
                      '51',	'52',	'53',	'54',	'55',	'56',	'57',	'58',	'59',	'60',
                      '61',	'62',	'63',	'64',	'65',	'66',	'67',	'68',	'69',	'70',
                      '71',	'72',	'73',	'74',	'75',	'76',	'77',	'78',	'79',	'80',
                      '81',	'82',	'83',	'84',	'85',	'86',	'87',	'88',	'89',	'90',
                      '91',	'92',	'93',	'94',	'95',	'96',	'97',	'98',	'99',	'100'];
/*   options: string[] = ['1',	'2',	'3',	'4',	'5',	'6',	'7',	'8',	'9',	'10',
                      11,	12,	13,	14,	15,	16,	17,	18,	19,	20,
                      21,	22,	23,	24,	25,	26,	27,	28,	29,	30,
                      31,	32,	33,	34,	35,	36,	37,	38,	39,	40,
                      41,	42,	43,	44,	45,	46,	47,	48,	49,	50,
                      51,	52,	53,	54,	55,	56,	57,	58,	59,	60,
                      61,	62,	63,	64,	65,	66,	67,	68,	69,	70,
                      71,	72,	73,	74,	75,	76,	77,	78,	79,	80,
                      81,	82,	83,	84,	85,	86,	87,	88,	89,	90,
                      91,	92,	93,	94,	95,	96,	97,	98,	99,	100]; */
  filteredOptions!: Observable<string[]>;

  constructor(
    private api: ApiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    let estudianteId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(estudianteId);
    this.idEstudiante = Number(estudianteId);
    this.getEstudiante(this.idEstudiante);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  calificarEstudiante = new FormGroup({
    estudianteId: new FormControl(0),
    lenguaEspanola: new FormControl('', Validators.required),
    matematicas: new FormControl('', Validators.required),
    cienciasSociales: new FormControl('', Validators.required),
    cienciasNaturales: new FormControl('', Validators.required)
  })

  getEstudiante(id:any){
    this.api.getEstudiante(id).subscribe(data => {
      this.datosEstudiante = data;
      console.log(this.datosEstudiante);
    });
    // this.calificarEstudiante.controls['id'].setValue(id);

    /* this.calificarEstudiante.setValue({
        'id' : id
    }); */

    this.calificarEstudiante.patchValue({
        'estudianteId' : id
      })
  }

  irCalificacion(){
    this.router.navigate(['calificacion']);
  }

  onSubmit(form:any){
    console.log('llegando');
    console.log(form);
    console.log('creando');
    this.api.postCalificacion(form).subscribe((data) => {
      console.log(data);
    });
    this.alert('Calificado/a');
  }

  alert(tipo:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Estudiante ${tipo}!`,
      showConfirmButton: false,
      timer: 2000
    });
    this.irCalificacion();
  }
}
