interface Searchable<T> {
    searchByTitulo(name: string): T[];
    searchByAño(year: number): T[];
    searchByLeng(language: string): T[];
}

interface Sortable<T> {
    sortByTitulo(): T[];
    sortByAño(): T[];
    sortByVal(): T[];
    sortByLeng(): T[];
}

interface Streamable<T> extends Searchable<T>, Sortable<T>{
    add(item: T): void;
    borrar(item: T): void;
    getAll(): T[];
}