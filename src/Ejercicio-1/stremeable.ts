interface Searchable<T> {
    /**
     * definicion de un metodo que busca por titulo en una coleccion de objetos de streaming
     * @param name nombre del(o los) objeto(s) que se busca
     */
    searchByTitulo(name: string): T[];
    /**
     * definicion de un metodo que busca por año de publicacion en una coleccion de objetos de streaming
     * @param year año de publicacion del(o los) objeto(s) que se busca
     */
    searchByAño(year: number): T[];
    /**
     * definicion de un metodo que busca por idioma original en una coleccion de objetos de streaming
     * @param leng idioma original del(o los) objeto(s) que se busca
     */
    searchByLeng(language: string): T[];
}

interface Sortable<T> {
    /**
     * definicion de un metodo que ordena los objetos de una coleccion por orden alfabetico del titulo
     */
    sortByTitulo(): T[];
    /**
     * definicion de un metodo que ordena los objetos de una coleccion en orden ascendente por año
     */
    sortByAño(): T[];
    /**
     * definicion de un metodo que ordena los objetos de una coleccion en orden ascendente por valoraciones
     */
    sortByVal(): T[];
    /**
     * definicion de un metodo que ordena los objetos de una coleccion en orden alfabetico por idioma original
     */
    sortByLeng(): T[];
}

interface Streamable<T> extends Searchable<T>, Sortable<T>{
    /**
     * definicion de un metodo que añade un objeto a la coleccion de objetos de streaming
     * @param item objeto que va a ser añadido a la coleccion
     */
    add(item: T): void;
    /**
     * definicion de un metodo que borra un objeto que existe en la coleccion de objetos de streaming
     * @param item objeto que va a ser eliminado
     */
    delete(item: T): void;
    /**
     * definicion de un metodo que devuelve la lista de objetos de streaming
     */
    getAll(): T[];
}