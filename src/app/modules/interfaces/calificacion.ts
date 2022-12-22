export interface Calificacion {
    id: number,
    estudianteId: number,
    lenguaEspanola: number,
    matematicas: number,
    cienciasSociales: number,
    cienciasNaturales: number
}

export interface CalificacionDTO {
    id: number,
    lenguaEspanola: number,
    matematicas: number,
    cienciasSociales: number,
    cienciasNaturales: number
}
