import { CalificacionDTO } from './calificacion';
export interface EstudiantesCalificaciones {
    id: number,
    matricula: string,
    nombre: string,
    apellido: string,
    cedula: string,
    telefono: string,
    correo: string,
    calificacionDTO: CalificacionDTO[]
}