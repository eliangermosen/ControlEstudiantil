import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/modules/interfaces/estudiante';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private api: ApiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    /* let estudianteId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(estudianteId); */
    let matricula = this.generadorMatricula()
    this.formEstudiante.patchValue({
      'matricula' : matricula
    })
  }

  formEstudiante = new FormGroup({
    id: new FormControl('0'),
    matricula: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required)
  })

  onSubmit(form:any){
    console.log('llegando');
    console.log(form);
    this.api.postEstudiante(form).subscribe((data) => {
      console.log(data);
    })
  }

  cancelar(){
    this.router.navigate(['inicio']);
  }

  generadorMatricula(){
    let random = Math.random() + '';
    
    let matricula = `${new Date().getFullYear()}-${random.substr(-4)}`;
    return matricula
  }

}
