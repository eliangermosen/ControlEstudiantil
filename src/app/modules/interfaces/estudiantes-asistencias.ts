import { AsistenciaDTO } from './asistencia';
export interface EstudiantesAsistencias {
    id: number,
    matricula: string,
    nombre: string,
    apellido: string,
    cedula: string,
    telefono: string,
    correo: string,
    asistenciaDTO: AsistenciaDTO[]
}