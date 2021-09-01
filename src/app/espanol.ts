export interface Espanol{
    id: number,
    palabra: string,
    descripcion: string,
    fechaAlta: Date,
    fechaModificacion: Date, 
    palabrasIngles: Ingles[];
}


export interface Ingles{ 
    id: number;
    palabra: string; 
    palabraEspanol: string;
    fechaAlta: Date; 
    fechaModificacion: Date; 
}
export function empezar(): Espanol{
    const es = {
        id:null,
        palabra: null,
        descripcion: null,
        fechaAlta: null,
        fechaModificacion: null,
        palabrasIngles: null
    }
    return Object.assign(es);
}