import { Calificacion } from 'src/app/modules/interfaces/calificacion';
export interface Estudiante {
    idEstudiante: number,
    matricula: string,
    nombre: string,
    apellido: string,
    cedula: string,
    telefono: string,
    correo: string,
    calificacion: Calificacion
}
