import {DiscoC} from './disco'

export interface Artista{
    nombre : string;
    oyentes : number;
    discografia : DiscoC[];
    
}

export class ArtistaC implements Artista{
    /**
     * constructor de la clase artista
     * @param nombre nombre del artista
     * @param oyentes cuantos oyentes tiene
     * @param discografia discos que ha publicado
     */
    constructor(public nombre : string, public oyentes : number, public discografia : DiscoC[]){}
    /**
     * metodo que devuelve el nombre del artista
     * @returns una string con el nombre del artista
     */
    getNombre(){return this.nombre}
    /**
     * metodo que devuelve los oyenyes del artista
     * @returns un numero con los oyentes del artista
     */
    getOyentes(){return this.oyentes}
    /**
     * metodo que devuelve los discos que ha publicado el artista
     * @returns un array con los discos del artista
     */
    getDisc(){return this.discografia}
    /**
     * metodo que devuelve un disco en concreto dado su nombre
     * @param disco nombre del disco que se busca
     * @returns devuelve el disco si lo ha encontrado, undefined si no
     */
    getDisco(disco : string){return this.discografia.find((d: DiscoC) => d.getNombre() === disco);}
}