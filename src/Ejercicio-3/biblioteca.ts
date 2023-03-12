import {ArtistaC} from './artista'
import {DiscoC} from './disco'
import {CancionC} from './cancion'

export class Biblioteca{

    /**
     * constructor de la clase biblioteca
     * @param artistas array con los artistas de los que dispone la biblioteca
     */
    constructor(public artistas : ArtistaC[]){}
    /**
     * metodo que busca un artista segun su nombre
     * @param artista nombre del artista buscado
     * @returns devuelve el artista si lo encuentra, undefined si no
     */
    
    getArtista(artista : string){return this.artistas.find((a: ArtistaC) => a.getNombre() === artista);}
    /**
      * metodo que muestra el numero de canciones de un disco
      * @param artista artista que creo el disco
      * @param disco disco del que se van a contar las canciones
      * @returns el numero de canciones del disco
      */
}

class BiblioShows extends Biblioteca{

    /**
     * constructor de la clase bibliotecaShow
     * @param artistas array con los artistas de los que dispone la biblioteca
     */
    constructor(public artistas : ArtistaC[]){
        super(artistas)
    }
    /**
      * metodo que muestra en una tabla la biblioteca
      */
    showBiblio(){console.table(this.artistas)}
    /**
       * metodo que muestra en una tabla un artista
       * @param artista nombre del artista que se va a mostrar
       */
    showArtista(artista : string){console.table(this.getArtista(artista))}
    /**
       * metodo que muestra en una tabla los discos de un artista
       * @param artista artista que hizo el disco
       * @param disco disco que se va a mostrar
       */
    showDisco(artista : string, disco : string){console.table(this.getArtista(artista).getDisco(disco))}
    /**
       * metodo que muestra la cancion de un disco
       * @param artista artista que creo el disco
       * @param disco disco donde esta el artista
       * @param cancion cancion que se busca
       */
    showCancion(artista : string, disco : string, cancion : string){console.table(this.getArtista(artista).getDisco(disco).getCancion(cancion))}
}

class BiblioCounts extends Biblioteca {

    /**
     * constructor de la clase bibliotecaCounts
     * @param artistas array con los artistas de los que dispone la biblioteca
     */
    constructor(public artistas : ArtistaC[]){
        super(artistas)
    }

    numberCanc(artista:string , disco: string):number{
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        let count : number = 0;
        auxdisc.getCanciones().forEach(element => {
            count++; 
        });
        return count;
    }
    /**
     * metodo que devuelve la duracion de un disco segun la duracion de las canciones
     * @param artista artista que creo el disco
     * @param disco disco del que se va a calcular la duracion
     * @returns devuelve la duracion del disco
     */
    durDisc(artista : string , disco : string) : number{
        let totaldur : number = 0;
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totaldur += cancion.getDur();
        });
        return totaldur;
    }
    /**
     * metodo que devuelve las reproducciones totales de un disco segun las de las canciones
     * @param artista artista que creo el disco 
     * @param disco disco del cual se calculan las reproducciones
     * @returns las reproducciones totales de un disco
     */
    repDisc(artista : string , disco : string) : number{
        let totalrep = 0;
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totalrep += cancion.getRep();
        });
        return totalrep;
    }
}