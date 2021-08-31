export interface Ingles{
    id: number,
    palabra: string,
    palabraEspanol: string,
    fechaAlta: Date,
    fechaModificacion: Date
}
export function start(): Ingles{
    const en = {
        id:null,
        palabra: null,
        palabraEspanol: null,
        fechaAlta: null,
        fechaModificacion: null
    }
    return Object.assign(en);
}