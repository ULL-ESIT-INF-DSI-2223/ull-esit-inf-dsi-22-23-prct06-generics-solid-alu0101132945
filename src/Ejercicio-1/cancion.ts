interface cancion {
    nombre : string;
    dur_seg : number;
    single : boolean;
    rep : number;
    gen : string[]; 
}

export class Cancion implements cancion {
    /**
     * constructor de canciones de un disco
     * @param nombre nombre de la cancion
     * @param dur_seg duracion de la cancion en segundos
     * @param single si la cancion es un single
     * @param rep reproducciones del disco
     * @param gen generos del disco
     */
    constructor(public nombre:string, public dur_seg:number, public single:boolean, public rep:number, public gen: string[]){}
    /**
     * metodo que devuelve el nombre del disco
     * @returns el nombre de la cancion
     */
    getNombre() : string{return this.nombre}
    /**
     * metodo que devuelve la duracion de un disco
     * @returns la duracion de la cancion
     */
    getDur() : number{return this.dur_seg}
    /**
     * metodo que devuelve si una cancion es un single
     * @returns devuelve si es un single
     */
    getSin() : boolean{return this.single}
    /**
     * metodo que devuelve las reproducciones de una cancion
     * @returns las reproducciones de la cancion
     */
    getRep() : number{return this.rep}
    /**
     * metodo que devuelve los generos de una cancion
     * @returns generos a los que pertenece una cancion
     */
    getGen() : string[]{return this.gen}
    /**
     * metodo que escribe los datos de la cancion en una cadena
     */
    write(){console.log(`nombre: ${this.nombre}, duracion en segundos: ${this.dur_seg}, single: ${this.single}, reproducciones totales: ${this.rep}, gen: ${this.gen}`)}
}