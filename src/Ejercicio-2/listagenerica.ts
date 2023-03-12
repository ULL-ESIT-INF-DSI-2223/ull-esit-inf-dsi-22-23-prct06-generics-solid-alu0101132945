export class ListaGenerica<T> {
    public items: T[];
    /**
     * constructor de la clase lista generica
     */
    constructor() {
        this.items = [];
    }
    
    /**
     * metodo append que actua de la misma manera que el append de array.prototipe
     * @param lista lista con la que va a realizarse el append
     */
    append(lista: ListaGenerica<T>): void {
        this.items.push(...lista.items);
    }

    /**
     * metodo concatenate que actua de la misma manera que el concatenate del array.prototipe
     * @param listas lista con la que se va a hacer la concatenacion
     * @returns una lista con los elementos de ambas listas concatenados
     */
    concatenate(...listas: ListaGenerica<T>[]): ListaGenerica<T> {
        const nuevaLista: ListaGenerica<T> = new ListaGenerica();
        for (const element of listas) {
        nuevaLista.append(element);
        }
        nuevaLista.append(this);
        return nuevaLista;
    }

    /**
     * metodo queactua de la misma manera que el filter de array.prototipe
     * @param predicado funcion que indica que elementos van a ser filtrados
     * @returns nuevo array con los elementos que han pasado el filtro
     */
    filter(predicado: (elemento: T) => boolean) {
        const nuevaLista = new ListaGenerica();
        for (const item of this.items) {
            if (predicado(item)) {
                nuevaLista.items.push(item);
            }
        }
        return nuevaLista;
    }


    /**
     * metodo que devuelve la longitud del array
     * @returns el tamaño de la lista
     */
    length() {
        return this.items.length;
    }

    /**
     * metodo que actaua de la misma manera que el map de array.prototipe
     * @param funcion funcion que indica como se van a transformar los elementos de la lista
     * @returns lista con los elementos transformados
     */
    map<R>(funcion: (elemento: T) => R): ListaGenerica<R> {
        const nuevaLista: ListaGenerica<R> = new ListaGenerica();
        for (const item of this.items) {
            nuevaLista.items.push(funcion(item));
        }
        return nuevaLista;
    }
    
    /**
     * metodo que actua como el metodo reduce de array.prototipe
     * @param funcion funcion con la que se van a combinar los elementos de la lista
     * @param acumulador acumulador de la funcion reduce
     * @returns un elemento que combina todos los de la lista
     */
    reduce<R>(funcion: (acumulador: R, elemento: T) => R, acumulador: R):R {
        let resultado = acumulador;
        for (const item of this.items) {
            resultado = funcion(resultado, item);
        }
        
        return resultado;
    }

    /**
     * metodo que actua como el reverse de array.prototipe
     * @returns el array invertido
     */
    reverse(): ListaGenerica<T> {
        const nuevaLista : ListaGenerica<T> = new ListaGenerica();
        for (let i = this.items.length - 1; i >= 0; i--) {
            nuevaLista.items.push(this.items[i]);
        }
        return nuevaLista;
    }

    /**
     * funcion que actua como el foreach de array.prototipe
     * @param funcion funcion con la que se va a realizar el foreach
     */
    forEach(funcion: (elemento: T) => void):void {
        for (const item of this.items) {funcion(item);}
    }
}  