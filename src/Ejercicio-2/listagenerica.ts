class ListaGenerica<T> {
    public items: T[];
    constructor() {
        this.items = [];
    }

    append(lista: ListaGenerica<T>): void {
        this.items.push(...lista.items);
    }

    concatenate(...listas: ListaGenerica<T>[]): ListaGenerica<T> {
        const nuevaLista: ListaGenerica<T> = new ListaGenerica();
        for (const element of listas) {
        nuevaLista.append(element);
        }
        nuevaLista.append(this);
        return nuevaLista;
    }

    filter(predicado: (elemento: T) => boolean) {
        const nuevaLista = new ListaGenerica();
        for (const item of this.items) {
            if (predicado(item)) {
                nuevaLista.items.push(item);
            }
        }
        return nuevaLista;
    }

    length() {
        return this.items.length;
    }

    map<R>(funcion: (elemento: T) => R): ListaGenerica<R> {
        const nuevaLista: ListaGenerica<R> = new ListaGenerica();
        for (const item of this.items) {
            nuevaLista.items.push(funcion(item));
        }
        return nuevaLista;
    }
    
    reduce<R>(funcion: (acumulador: R, elemento: T) => R, acumulador: R):R {
        let resultado = acumulador;
        for (const item of this.items) {
            resultado = funcion(resultado, item);
        }
        return resultado;
    }

    reverse(): ListaGenerica<T> {
        const nuevaLista : ListaGenerica<T> = new ListaGenerica();
        for (let i = this.items.length - 1; i >= 0; i--) {
            nuevaLista.items.push(this.items[i]);
        }
        return nuevaLista;
    }

    forEach(funcion: (elemento: T) => void):void {
        for (const item of this.items) {funcion(item);}
    }
}  