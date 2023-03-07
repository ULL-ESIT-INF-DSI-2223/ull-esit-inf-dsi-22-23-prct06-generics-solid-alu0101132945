type valoracion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export class Pelicula{
    constructor(private name: string, private año: number, private gen: string, private val: valoracion){}
    getName(): string {return this.name}
    getAño(): number {return this.año}
    getGen(): string {return this.gen}
    getVal(): valoracion {return this.val}
}

export class Serie{
    constructor(private name: string, private año: number, private temp: number,private episode: number, private val: valoracion){}
    getName(): string {return this.name}
    getAño(): number {return this.año}
    getTemp(): number {return this.temp}
    getEpisode(): number {return this.episode}
    getVal(): valoracion {return this.val}
}

export class Documental{
    constructor(private name: string, private año: number, private temp: number,private episode: number,private temat: string ,private val: valoracion){}
    getName(): string {return this.name}
    getAño(): number {return this.año}
    getTemp(): number {return this.temp}
    getEpisode(): number {return this.episode}
    getTemat(): string {return this.temat}
    getVal(): valoracion {return this.val}
}