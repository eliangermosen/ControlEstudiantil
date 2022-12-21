import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/modules/interfaces/estudiante';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  datosEstudiante!:Estudiante;
  edit: boolean = false;

  constructor(
    private api: ApiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    let estudianteId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(estudianteId);
    if(!estudianteId){
      console.log('crear');
      console.log(this.edit);
      let matricula = this.generadorMatricula();
      this.formEstudiante.patchValue({
        'matricula' : matricula
      })
    }else{
      console.log('editar');
      this.edit = true;
      console.log(this.edit);
      this.getEstudiante(estudianteId);
    };
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

  getEstudiante(id:any){
    this.api.getEstudiante(id).subscribe(data => {
      this.datosEstudiante = data;
      console.log(this.datosEstudiante);
      this.formEstudiante.setValue({
        'id' : id,
        'matricula' : this.datosEstudiante.matricula,
        'nombre' : this.datosEstudiante.nombre,
        'apellido' : this.datosEstudiante.apellido,
        'cedula' : this.datosEstudiante.cedula,
        'telefono' : this.datosEstudiante.telefono,
        'correo' : this.datosEstudiante.correo
      });
      console.log(this.formEstudiante);
    });
  }

  onSubmit(form:any){
    console.log('llegando');
    console.log(form);
    if(!this.edit){
      console.log('creando');
      this.api.postEstudiante(form).subscribe((data) => {
        console.log(data);
      });
      this.alert('Creado');
    }else{
      console.log('editando');
      this.api.putEstudiante(form).subscribe((data) => {
        console.log(data);
      });
      this.alert('Editado');
    }
  }

  irInicio(){
    this.router.navigate(['inicio']);
  }

  generadorMatricula(){
    let random = Math.random() + '';
    
    let matricula = `${new Date().getFullYear()}-${random.substr(-4)}`;
    return matricula
  }

  alert(tipo:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Estudiante ${tipo}!`,
      showConfirmButton: false,
      timer: 2000
    });
    this.irInicio();
  }

}
