import { Pregre } from "./pregres"

export const PREGRES: Pregre[] = [
    {
        id: 1,
        seccion: "ingreso",
        esTitulo: true,
        titulo: "Inscripción"
    },
    {
        id: 2,
        seccion: "ingreso",
        esTitulo: false,
        pregunta: "¿Dónde me inscribo para comenzar a estudiar una carrera?",
        respuesta: "En la página del Ministerio."
    },
    {
        id: 3,
        seccion: "ingreso",
        esTitulo: false,
        pregunta: "¿Qué tengo que hacer después de inscribirme?",
        respuesta: "Confirmar tu solicitud llevando la documentación solicitada al Instituto el día de la inscripción."
    },
    {
        id: 4,
        seccion: "ingreso",
        esTitulo: true,
        titulo: "Curso de ingreso"
    },
    {
        id: 5,
        seccion: "ingreso",
        esTitulo: false,
        pregunta: "¿Qué pasa si no asisto al curso introductorio?",
        respuesta: "Tenés que acordar con la Coordinación de la carrera que estés cursando, instancias recuperatorias para realizar a lo largo del año."
    },
    {
        id: 6,
        seccion: "ingreso",
        esTitulo: false,
        pregunta: "¿Es necesario realizar un curso introductorio?",
        respuesta: "Sí. Antes de comenzar la cursada del primer año de la carrera, es necesario realizar el curso de introducción a la educación superior."
    }
]