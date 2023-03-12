import {CancionC} from './cancion'

export interface Disco{
    nombre : string;
    pub : number;
    canciones : CancionC[];
}

export class DiscoC implements Disco{
    /**
     * constructor de la clase disco
     * @param nombre nombre del disco
     * @param pub año de publicacion
     * @param canciones canciones incluidas en el disco
     */
    constructor(public nombre : string, public pub : number, public canciones : CancionC[]){}
    /**
     * metodo que devuelve el nombre del disco
     * @returns el nombre del disco
     */
    getNombre() : string{return this.nombre}
    /**
     * metodo que devuelve el año de publicacion de un disco
     * @returns el año de publicacion del disco
     */
    getPub() : number{return this.pub}
    /**
     * metodo que devuelve las canciones de un disco
     * @returns un array con las canciones de un disco
     */
    getCanciones() : CancionC[]{return this.canciones}
    /**
     * metodo que devuelve una cancion del disco
     * @param cancion nombre de la cancion
     * @returns la cancion del disco o undefined si no la encuentra
     */
    getCancion(cancion: string) : CancionC {
        return this.canciones.find((c: CancionC) => c.getNombre() === cancion);
    }      
}