import { BasicStreamableCollection } from "./basiccollection";
import {Documental} from "./objects";

export class DocumentalCollection extends BasicStreamableCollection<Documental>{

    /**
     * constructor de la clase de la coleccion de documentales
     * @param docus array de documentales
     */
    constructor(protected docus: Documental[]){
        super(docus);
    }

    /**
     * metodo para añadir un documental a la coleccion
     * @param item documental que se va a añadir
     */
     public add(item: Documental): void {
        super.add(item);
    }

    /**
     * metodo que borra documentales de la coleccion
     * @param item documental que va a ser borrada
     */
    public delete(item: Documental): void {
        super.delete(item);
    }

    /**
     * metodo que devuelve la lista de documentales de la coleccion
     * @returns la lista de documentales
     */
    public getAll(): Documental[] {
        return super.getAll();
    }

    /**
     * metodo que devuelve el tamaño de la lista de documentales
     * @returns un number con el tamaño de la lista
     */
    public getCont(): number {
        return super.getCont()
    }

    /**
     * metodo para la busqueda de documentales en la lista por título
     * @param titulo titulo de los documentales que se buscan
     * @return Documentales que tienen ese título
     */
    public searchByTitulo(titulo: string): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getTitulo().includes(titulo))
        return coincidentes;
    }

    /**
     * metodo para la busqueda de documentales en la lista por año de publicación
     * @param año año de los documentales que se buscan
     * @return Documentales que tienen ese año de publicación
     */
    public searchByAño(año: number): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getAño() === año)
        return coincidentes;
    }

    /**
     * metodo para la busqueda de documentales en la lista por idioma de publicación
     * @param leng idioma de los documentales que se buscan
     * @return Documentales que tienen ese idioma de publicación
     */
    public searchByLeng(leng: string): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getLeng().includes(leng))
        return coincidentes;
    }

    /**
     * metodo para la busqueda de documentales en la lista por temática
     * @param tema temática de los documentales que se buscan
     * @returns Documentales que tienen esa temática
     */
    public searchByTemat(tema: string): Documental[]{
        const coincidentes = this.docus.filter(peli => peli.getTemat().includes(tema))
        return coincidentes;
    }
    /**
     * metodo para la ordenacion por orden alfabetico del título
     * @returns una lista de documentales ordenada por el título
     */
    public sortByTitulo(): Documental[]{
        return this.docus.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }

    /**
     * metodo para la ordenacion por orden ascendente del año de publicación
     * @returns una lista de documentales ordenada por el año de publicación
     */
    public sortByAño(): Documental[]{
        return this.docus.sort((a, b) => a.getAño() - b.getAño());
    }

    /**
     * metodo para la ordenacion por orden ascendente de la valoración
     * @returns una lista de documentales ordenada por la valoración
     */
    public sortByVal(): Documental[]{
        return this.docus.sort((a, b) => a.getVal() - b.getVal());
    }

    /**
     * metodo para la ordenacion alfabetica del idioma de publicacion de un objeto
     * @returns una lista de documentales ordenada por el idioma de publicación
     */
    public sortByLeng(): Documental[]{
        
        return this.docus.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }
    
    /**
     * metodo para la ordenacion ascendente de temporadas
     * @return una lista de series ordenada por las temporadas
     */
    public sortByTemp(): Documental[]{
        return this.docus.sort((a, b) => a.getTemp() - b.getTemp());;
    }

    /**
     * metodo para la ordenacion ascendente de episodios
     * @return una lista de series ordenada por los episodios
     */
    public sortByEpis(): Documental[]{
        return this.docus.sort((a, b) => a.getEpisode() - b.getEpisode());
    }
}