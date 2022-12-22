export interface Asistencia {
    id: number,
    estudianteId: number,
    fecha: Date,
    estado: string
}

export interface AsistenciaDTO {
    id: number,
    fecha: Date,
    estado: string
}