export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]){}
    /**
     * metodo que añade un objeto generico a la lista de objetos de streaming
     * @param item objeto que se va a añadir a la lista
     */
    public add(item: T): void {
        this.items.push(item);
    }
    /**
     * metodo que borra un objeto de la lista de objetos de streaming
     * @param item objeto que se va a borrar de la lista
     */
    public delete(item: T): void {
        const index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
    
    /**
     * metodo que se utiliza para devolver la lista de objetos de streaming
     * @returns la lista de objetos de la clase
     */
    public getAll(): T[] {
        return this.items;
    }  

    /**
     * metodo que devuelve el tamaño de la lista de objetos de streaming
     * @returns un number con el tamaño de la lista de streaming
     */
    public getCont(): number {
        return this.items.length;
    }

    /**
     * metodo abstracto para la busqueda de objetos en la lista por titulo
     * @param titulo titulo de los objetos que se buscan
     */
    abstract searchByTitulo(titulo: string): T[];
    /**
     * metodo abstracto para la busqueda de objetos en la lista por año de publicacion
     * @param año año de los objetos que se buscan
     */
    abstract searchByAño(año: number): T[];
    /**
     * metodo abstracto para la busqueda de objetos en la lista por idioma de publicacion
     * @param leng idioma de los objetos que se buscan
     */
    abstract searchByLeng(leng: string): T[];
    /**
     * metodo abstracto para la ordenacion por orden alfabetico del titulo
     */
    abstract sortByTitulo(): T[];
    /**
     * metodo abstracto para la ordenacion por orden ascendente del año de publicacion
     */
    abstract sortByAño(): T[];
    /**
     * metodo abstracto para la ordenacion por orden ascendente de la valoracion de los objetos
     */
    abstract sortByVal(): T[];
    /**
     * metodo abstracto para la ordenacion alfabetica del idioma de publicacion de un objeto
     */
    abstract sortByLeng(): T[];
    
}