import {DiscoC} from './disco'
import {SingleC} from './single'

export class Discografia<T extends DiscoC | SingleC> {
    constructor(private discos: T[] = []) {}
    /**
     * Método para obtener todos los discos y singles de la discografía
     * @returns un array con los discos y singles de la discografía
     */
    getDiscos(): T[] {
        return this.discos;
    }
    /**
     * Método para obtener todos los discos de la discografía
     * @returns un array con los discos de la discografía
     */
    getDiscosOnly(): DiscoC[] {
        return this.discos.filter((d) => d instanceof DiscoC) as DiscoC[];
    }
    /**
     * Método para obtener todos los singles de la discografía
     * @returns un array con los singles de la discografía
     */
    getSingles(): SingleC[] {
        return this.discos.filter((s) => s instanceof SingleC) as SingleC[];
    }

    /**
     * Método para añadir un nuevo disco o single a la discografía
     * @param nuevoDisco el disco o single que se va a añadir
     */
    addDisco(nuevoDisco: T): void {
        this.discos.push(nuevoDisco);
    }
}  