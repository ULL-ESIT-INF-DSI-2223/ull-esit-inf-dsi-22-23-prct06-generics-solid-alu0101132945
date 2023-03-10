type valoracion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export class Pelicula{
    /**
     * constructor de la clase película
     * @param name nombre de la película
     * @param año año de publicación
     * @param leng idioma de publicación
     * @param gen género de la película
     * @param val valoraciones de la película
     */
    constructor(protected name: string, protected año: number, protected leng : string,protected gen: string, protected val: valoracion){}
    /**
     * metodo que devuelve el titulo
     * @returns el titulo en una cadena
     */
    getTitulo(): string {return this.name}
    /**
     * metodo que devuelve el año de publicación
     * @returns el año de publicación
     */
    getAño(): number {return this.año}
    /**
     * metodo que devuelve el idioma de publicación
     * @returns el idioma de publicación
     */
    getLeng(): string {return this.leng}
    /**
     * metodo que devuelve el genero de la pelicula
     * @returns el genero de la pelicula
     */
    getGen(): string {return this.gen}
    /**
     * metodo que devuelve las valoraciones de los usuarios
     * @returns las valoraciones de los usuarios
     */
    getVal(): valoracion {return this.val}
}

export class Serie{
    /**
     * constructor de la clase serie
     * @param name nombre de la serie
     * @param año año de publicación
     * @param leng idioma de publicación
     * @param temp temporadas de las que dispone la serie
     * @param episode episodios por temporada de la serie
     * @param val valoraciones de la serie
     */
    constructor(protected name: string, protected año: number, protected leng : string, protected temp: number,protected episode: number, protected val: valoracion){}
    /**
     * metodo que devuelve el titulo
     * @returns el titulo en una cadena
     */
    getTitulo(): string {return this.name}
    /**
     * metodo que devuelve el año de publicación
     * @returns el año de publicación
     */
    getAño(): number {return this.año}
    /**
     * metodo que devuelve el idioma de publicación
     * @returns el idioma de publicación
     */
    getLeng(): string {return this.leng}
    /**
     * metodo que devuelve las temporadas que tiene la serie
     * @returns las temporadas de la serie
     */
    getTemp(): number {return this.temp}
    /**
     * metodo que devuelve las temporadas que tiene la serie
     * @returns las temporadas de la serie
     */
    getEpisode(): number {return this.episode}
    /**
     * metodo que devuelve los episodios por temporada
     * @returns los episodios por temporada
     */
    getVal(): valoracion {return this.val}
}

export class Documental{
    /**
     * constructor de la clase documental
     * @param name nombre del documental
     * @param año año de publicación
     * @param leng idioma de publicación
     * @param temp temporadas de las que dispone el documental
     * @param episode episodios por temporada del documental
     * @param temat temática del documental
     * @param val valoraciones del documental
     */
    constructor(protected name: string, protected año: number, protected leng : string,protected temp: number,protected episode: number,protected temat: string ,protected val: valoracion){}
    /**
     * metodo que devuelve el titulo
     * @returns el titulo en una cadena
     */
    getTitulo(): string {return this.name}
    /**
     * metodo que devuelve el año de publicación
     * @returns el año de publicación
     */
    getAño(): number {return this.año}
    /**
     * metodo que devuelve el idioma de publicación
     * @returns el idioma de publicación
     */
    getLeng(): string {return this.leng}
    /**
     * metodo que devuelve las temporadas que tiene el documental
     * @returns las temporadas del documental
     */
    getTemp(): number {return this.temp}
    /**
     * metodo que devuelve los episodios por temporada
     * @returns los episodios por temporada
     */
    getEpisode(): number {return this.episode}
    /**
     * metodo que devuelve la tematica de un documental
     * @returns la tematica de un documental
     */
    getTemat(): string {return this.temat}
    /**
     * metodo que devuelve las valoraciones de los usuarios
     * @returns las valoraciones de los usuarios
     */
    getVal(): valoracion {return this.val}
}