import { BasicStreamableCollection } from "./basiccollection";
import {Serie} from "./objects";

export class SerieCollection extends BasicStreamableCollection<Serie>{

    /**
     * constructor de la clase de coleccion de series
     * @param series array de series de la clase
     */
    constructor(protected series: Serie[]){
        super(series);
    }

    /**
     * metodo para añadir una serie a la coleccion
     * @param item serie que se va a añadir
     */
    public add(item: Serie): void {
        super.add(item);
    }

    /**
     * metodo que borra series de la coleccion
     * @param item serie que va a ser borrada
     */
    public delete(item: Serie): void {
        super.delete(item);
    }

    /**
     * metodo que devuelve la lista de series de la coleccion
     * @returns la lista de series
     */
    public getAll(): Serie[] {
        return super.getAll();
    }

    /**
     * metodo que devuelve el tamaño de la lista de series
     * @returns un number con el tamaño de la lista
     */
    public getCont(): number {
        return super.getCont()
    }

    /**
     * metodo para la busqueda de series en la lista por titulo
     * @param titulo titulo de las series que se buscan
     * @return Series que tienen ese titulo
     */
    public searchByTitulo(titulo: string): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getTitulo().includes(titulo))
        return coincidentes;
    }

    /**
     * metodo para la busqueda de series en la lista por año de publicacion
     * @param año año de las series que se buscan
     * @return Series que tienen ese año de publicacion
     */
    public searchByAño(año: number): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getAño() === año)
        return coincidentes;
    }

    /**
     * metodo para la busqueda de series en la lista por idioma de publicacion
     * @param leng idioma de las series que se buscan
     * @return Series que tienen ese idioma
     */
    public searchByLeng(leng: string): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getLeng().includes(leng))
        return coincidentes;
    }

    /**
     * metodo para la ordenacion por orden alfabetico del titulo
     * @return una lista ordenada por el titulo
     */
    public sortByTitulo(): Serie[]{
        return this.series.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }

    /**
     * metodo para la ordenacion por orden ascendente del año de publicacion
     * @return una lista ordenada por el año de publicacion
     */
    public sortByAño(): Serie[]{
        return this.series.sort((a, b) => a.getAño() - b.getAño());
    }

    /**
     * metodo para la ordenacion por orden ascendente de la valoracion
     * @return una lista ordenada por el titulo
     */
    public sortByVal(): Serie[]{
        return this.series.sort((a, b) => a.getVal() - b.getVal());
    }

    /**
     * metodo para la ordenacion alfabetica del idioma de publicacion
     * @return una lista ordenada por el idioma de publicacion
     */
    public sortByLeng(): Serie[]{
        return this.series.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }

    /**
     * metodo para la ordenacion ascendente de temporadas
     * @return una lista de series ordenada por las temporadas
     */
    public sortByTemp(): Serie[]{
        return this.series.sort((a, b) => a.getTemp() - b.getTemp());;
    }

    /**
     * metodo para la ordenacion ascendente de episodios
     * @return una lista de series ordenada por los episodios
     */
    public sortByEpis(): Serie[]{
        return this.series.sort((a, b) => a.getEpisode() - b.getEpisode());
    }
}