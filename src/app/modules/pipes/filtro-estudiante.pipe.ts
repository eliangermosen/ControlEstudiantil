import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEstudiante'
})
export class FiltroEstudiantePipe implements PipeTransform {

  transform(value: any, campo: string, ...args: any[]): any {
    if(!value) return null;
    if(!args) return value;

    return value.filter((estudiante:any) => 
      estudiante[campo].toLowerCase().includes(args)
    );
  }

}
