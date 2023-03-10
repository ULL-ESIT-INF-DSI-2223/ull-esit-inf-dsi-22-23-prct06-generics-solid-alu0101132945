import { BasicStreamableCollection } from "./basiccollection";
import {Pelicula} from "./objects";

export class PeliculaCollection extends BasicStreamableCollection<Pelicula>{

    /**
     * constructor de la clase de coleccion de peliculas
     * @param pelis array de series de la peliculas
     */
    constructor(protected pelis: Pelicula[]){
        super(pelis);
    }

    /**
     * metodo para añadir una pelicula a la coleccion
     * @param item pelicula que se va a añadir
     */
    public add(item: Pelicula): void {
        super.add(item);
    }

    /**
     * metodo que borra peliculas de la coleccion
     * @param item pelicula que va a ser borrada
     */
    public delete(item: Pelicula): void {
        super.delete(item);
    }

    /**
     * metodo que devuelve la lista de peliculas de la coleccion
     * @returns la lista de peliculas
     */
    public getAll(): Pelicula[] {
        return super.getAll();
    }

    /**
     * metodo que devuelve el tamaño de la lista de peliculas
     * @returns un number con el tamaño de la lista
     */
    public getCont(): number {
        return super.getCont()
    }

    /**
     * metodo para la busqueda de peliculas en la lista por titulo
     * @param titulo titulo de las peliculas que se buscan
     * @return Peliculas que tienen ese titulo
     */
    public searchByTitulo(titulo: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getTitulo().includes(titulo))
        return coincidentes;
    }

    /**
     * metodo para la busqueda de peliculas en la lista por año de publicacion
     * @param año año de las peliculas que se buscan
     * @return Peliculas que tienen ese año de publicacion
     */
    public searchByAño(año: number): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getAño() === año)
        return coincidentes;
    }
    /**
     * metodo para la busqueda de peliculas en la lista por idioma de publicacion
     * @param leng idioma de las peliculas que se buscan
     * @return Peliculas que tienen ese idioma
     */
    public searchByLeng(leng: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getLeng().includes(leng))
        return coincidentes;
    }

    /**
     * metodo para la busqueda de peliculas en la lista por género
     * @param gen género de las peliculas que se buscan
     * @returns Peliculas que tienen ese genero
     */
    public searchByGen(gen: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getGen().includes(gen))
        return coincidentes;
    }

    /**
     * metodo para la ordenacion por orden alfabetico del titulo
     * @return una lista de peliculas ordenada por titulo
     */
    public sortByTitulo(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }

    /**
     * metodo para la ordenacion por orden ascendente del año de publicacion
     * @return una lista de series ordenada por el año de publicacion
     */
    public sortByAño(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getAño() - b.getAño());
    }

    /**
     * metodo para la ordenacion por orden ascendente de la valoracion
     * @return una lista de series ordenada por la valoración
     */
    public sortByVal(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getVal() - b.getVal());
    }

    /**
     * metodo para la ordenacion alfabetica del idioma de publicacion
     * @return una lista de series ordenada por el idioma de publicación
     */
    public sortByLeng(): Pelicula[]{
        
        return this.pelis.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }

    /**
     * metodo para la ordenacion alfabetica del género
     * @returns una lista de series ordenada por el genero
     */
    public sortByGen(): Pelicula[]{
        
        return this.pelis.sort((a, b) => a.getGen().localeCompare(b.getGen()));;
    }
    
}