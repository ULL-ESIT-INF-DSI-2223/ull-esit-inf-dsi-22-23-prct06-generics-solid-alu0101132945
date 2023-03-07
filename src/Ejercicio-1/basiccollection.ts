abstract class BasicStreamableCollection<T> implements Streamable<T> {
    protected items: T[];

    add(item: T): void {
        this.items.push(item);
    }
    
    borrar(item: T): void {
        const index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
    
    getAll(): T[] {
        return this.items;
    }  

    getCont(): number {
        return this.items.length;
    }

    abstract searchByTitulo(titulo: string): T[];
    abstract searchByAño(año: number): T[];
    abstract searchByLeng(leng: string): T[];
    abstract sortByTitulo(): T[];
    abstract sortByAño(): T[];
    abstract sortByVal(): T[];
    abstract sortByLeng(): T[];
    
}