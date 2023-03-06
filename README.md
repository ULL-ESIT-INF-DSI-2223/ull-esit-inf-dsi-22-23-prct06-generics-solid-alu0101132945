# Práctica 5 - Objetos, clases e interfaces

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.

Todas las soluciones a los ejercicios deberán estar alojadas en el repositorio generado tras la aceptación de la asignación de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

Además, tendrá que comentar en un informe la solución que ha diseñado para cada uno de los ejercicios propuestos.

## Ejercicio 1 - Biblioteca musical

Diseñe el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. El desarrollo realizado debe cumplir los siguientes requisitos funcionales:

La información de un artista, ya sea un grupo o un solista, será la siguiente:

- Nombre
- Número de oyentes mensuales
- Discografía

La discografía de un artista consistirá en una colección de discos, donde la información de un disco será:

- Nombre
- Año de publicación
- Canciones

Por cada canción perteneciente a un disco, la información será la siguiente:
- Nombre
- Duración en segundos
- Géneros
- Single (determina si la canción fue lanzada como un single o no)
- Número de reproducciones

La biblioteca musical deberá permitir:

- Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco o álbum.
- Mostrar por la consola la información de la biblioteca en formato tabla (console.table).
- Permitir llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en formato de tabla.
- Permitir calcular el número de canciones incluidas en un disco concreto.
- Permitir calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
- Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.

```typescript
interface artista{
    nombre : string;
    oyentes : number;
    discografia : Disco[];
    
}

class Artista implements artista{
    constructor(public nombre : string, public oyentes : number, public discografia : Disco[]){}
    getNombre(){return this.nombre}
    getOyentes(){return this.oyentes}
    getDisc(){return this.discografia}
    getDisco(disco : string){return this.discografia.find((d: Disco) => d.getNombre() === disco);}
}

interface cancion {
    nombre : string;
    dur_seg : number;
    single : boolean;
    rep : number;
    gen : string[]; 
}

class Cancion implements cancion {
    constructor(public nombre:string, public dur_seg:number, public single:boolean, public rep:number, public gen: string[]){}
    getNombre() : string{return this.nombre}
    getDur() : number{return this.dur_seg}
    getSin() : boolean{return this.single}
    getRep() : number{return this.rep}
    getGen() : string[]{return this.gen}
    write(){console.log(`nombre: ${this.nombre}, duracion en segundos: ${this.dur_seg}, single: ${this.single}, reproducciones totales: ${this.rep}, gen: ${this.gen}`)}
}

interface disco{
    nombre : string;
    pub : number;
    canciones : Cancion[];
}

class Disco implements disco{
    constructor(public nombre : string, public pub : number, public canciones : Cancion[]){}
    getNombre() : string{return this.nombre}
    getPub() : number{return this.pub}
    getCanciones() : Cancion[]{return this.canciones}
    getCancion(cancion: string) : Cancion {
        return this.canciones.find((c: Cancion) => c.getNombre() === cancion);
    }      
}

export class Biblioteca{

    constructor(public artistas : Artista[]){}
    getArtista(artista : string){return this.artistas.find((a: Artista) => a.getNombre() === artista);}
    showBiblio(){console.table(this.artistas)}
    showArtista(artista : string){console.table(this.getArtista(artista))}
    showDisco(artista : string, disco : string){console.table(this.getArtista(artista).getDisco(disco))}
    showCancion(artista : string, disco : string, cancion : string){console.table(this.getArtista(artista).getDisco(disco).getCancion(cancion))}
    numberCanc(artista:string , disco: string):number{
        let auxdisc : Disco = this.getArtista(artista).getDisco(disco);
        let count : number = 0;
        auxdisc.getCanciones().forEach(element => {
           count++; 
        });
        return count;
    }
    durDisc(artista : string , disco : string) : number{
        let totaldur : number = 0;
        let auxdisc : Disco = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totaldur += cancion.getDur();
        });
        return totaldur;
    }
    repDisc(artista : string , disco : string) : number{
        let totalrep = 0;
        let auxdisc : Disco = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totalrep += cancion.getRep();
        });
        return totalrep;
    }
}

```
En este ejercicio se han creado las clases necesarias para poder crear los objetos que componen la biblioteca musical, ademas de la propia biblioteca, con metodos para obtener sus atributos, ademas de para buscar objetos especificos si existen en los atributos que son arrays de objetos y en la clase biblioteca tenemos ademas los metodos que se indican en el enunciado para calcular distintos parametros de un disco, en los que tienes que buscarlos usando los metodos antes mencionados y usar contadores para devolver los valores deseados.

# Ejercicio 2 - Conecta 4

Todos (o casi todos) hemos jugado alguna vez al Conecta 4.

En una rejilla de 6 filas y 7 columnas, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.

En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha.

El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.

Cree la jerarquía de clases e interfaces necesarias para implementar el juego Conecta 4, teniendo en cuenta la siguiente funcionalidad:

- El juego comienza con el Jugador 1 colocando la primera ficha y, en turnos sucesivos, debe ir alternándose con el Jugador 2. Se deberá mostrar por consola a qué jugador le toca colocar una ficha.
- Si un jugador intenta colocar una ficha en una columna completa, se mostrará un mensaje informando de que la columna está completa y se le permitirá seleccionar otra columna para colocar la ficha. Lo anterior debe repetirse hasta que el jugador coloque su ficha.
- Una vez que el jugador correspondiente haya colocado una ficha, debe mostrarse por la consola el estado del tablero.
- Cuando alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego.


```typescript
interface jugador {
    nombre: string;
    ficha: string;
  }

class Jugador implements jugador{
    constructor(public nombre: string, public ficha: string) {}
}

export class Tablero {
    constructor(public jugador1: Jugador, public jugador2: Jugador, private tablero: String[][] = [], readonly numFilas: number = 6, readonly numColumnas: number = 7) {
        for (let i = 0; i < this.numFilas; i++) {
            this.tablero.push([]);
            for (let j = 0; j < this.numColumnas; j++) {
                this.tablero[i].push('O');
            }
        }
    }

    colocarFicha(fila: number, columna: number, ficha: String) {
        this.tablero[fila][columna] = ficha;
    }

    columnaEstaLlena(columna: number): boolean {
        return this.tablero[0][columna] !== 'O';
    }

    imprimirTablero() {
        console.log();
        for (let fila = this.numFilas - 1; fila >= 0; fila--) {
        let filaStr = "|";
            for (let columna = 0; columna < this.numColumnas; columna++) {
                const ficha = this.tablero[fila][columna]
                filaStr += " " + ficha + " |";
            }
        console.log(filaStr);
        }
        console.log("-----------------------------");
        console.log("  1   2   3   4   5   6   7");
        console.log();
    }

    hayGanador(color: string): boolean {
        // Comprobación de filas
        for (let fila = 0; fila < 6; fila++) {
          for (let col = 0; col < 4; col++) {
            if (
                this.tablero[fila][col] === color &&
                this.tablero[fila][col + 1] === color &&
                this.tablero[fila][col + 2] === color &&
                this.tablero[fila][col + 3] === color
            ) {
                return true;
            }
          }
        }
      
        // Comprobación de columnas
        for (let fila = 0; fila < 3; fila++) {
          for (let col = 0; col < 7; col++) {
            if (
              this.tablero[fila][col] === color &&
              this.tablero[fila + 1][col] === color &&
              this.tablero[fila + 2][col] === color &&
              this.tablero[fila + 3][col] === color
            ) {
              return true;
            }
          }
        }
      
        // Comprobación de diagonales hacia la derecha
        for (let fila = 0; fila < 3; fila++) {
          for (let col = 0; col < 4; col++) {
            if (
              this.tablero[fila][col] === color &&
              this.tablero[fila + 1][col + 1] === color &&
              this.tablero[fila + 2][col + 2] === color &&
              this.tablero[fila + 3][col + 3] === color
            ) {
              return true;
            }
          }
        }
      
        // Comprobación de diagonales hacia la izquierda
        for (let fila = 0; fila < 3; fila++) {
          for (let col = 3; col < 7; col++) {
            if (
              this.tablero[fila][col] === color &&
              this.tablero[fila + 1][col - 1] === color &&
              this.tablero[fila + 2][col - 2] === color &&
              this.tablero[fila + 3][col - 3] === color
            ) {
              return true;
            }
          }
        }
      
        return false;
      }
}

//main del programa
const prompt = Prompt();

const nombre1 = prompt('Introduce el nombre del primer jugador: ') 
const jugador1 = new Jugador(nombre1, 'A')
const nombre2 = prompt('Introduce el nombre del segundo jugador: ')
const jugador2 = new Jugador(nombre2,'R')
let juego = new Tablero(jugador1,jugador2);

let col1 = 0;
let col2 = 0;
let col3 = 0;
let col4 = 0;
let col5 = 0;
let col6 = 0;
let col7 = 0;

while(!juego.hayGanador(jugador1.ficha) || !juego.hayGanador(jugador2.ficha)){
    console.log('Conecta4')
    console.log('Jugador 1 introduce donde colocas tu ficha')
    let ficha1 : number;
    do{
        ficha1 = Number(prompt('Columna: '))
    }while(juego.columnaEstaLlena(ficha1))
    if(ficha1 === 1){
        juego.colocarFicha(col1,ficha1,jugador1.ficha)
        col1++
    }else if(ficha1 === 2){
        juego.colocarFicha(col2,ficha1,jugador1.ficha)
        col2++
    }else if(ficha1 === 3){
        juego.colocarFicha(col3,ficha1,jugador1.ficha)
        col3++
    }else if(ficha1 === 4){
        juego.colocarFicha(col4,ficha1,jugador1.ficha)
        col4++
    }else if(ficha1 === 5){
        juego.colocarFicha(col5,ficha1,jugador1.ficha)
        col5++
    }else if(ficha1 === 6){
        juego.colocarFicha(col6,ficha1,jugador1.ficha)
        col6++
    }else if(ficha1 === 7){
        juego.colocarFicha(col7,ficha1,jugador1.ficha)
        col7++
    }
    juego.imprimirTablero()

    console.log('Jugador 2 introduce donde colocas tu ficha')
    let ficha2 : number
    do{
        ficha2 = Number(prompt('Columna: '))
    }while(juego.columnaEstaLlena(ficha2))
    if(ficha2 === 1){
        juego.colocarFicha(col1,ficha1,jugador1.ficha)
        col1++
    }else if(ficha2 === 2){
        juego.colocarFicha(col2,ficha1,jugador1.ficha)
        col2++
    }else if(ficha2 === 3){
        juego.colocarFicha(col3,ficha1,jugador1.ficha)
        col3++
    }else if(ficha2 === 4){
        juego.colocarFicha(col4,ficha1,jugador1.ficha)
        col4++
    }else if(ficha2 === 5){
        juego.colocarFicha(col5,ficha1,jugador1.ficha)
        col5++
    }else if(ficha2 === 6){
        juego.colocarFicha(col6,ficha1,jugador1.ficha)
        col6++
    }else if(ficha2 === 7){
        juego.colocarFicha(col7,ficha1,jugador1.ficha)
        col7++
    }
    juego.imprimirTablero()
}

if(juego.hayGanador(jugador1.ficha)){
    console.log('Felicidades jugador 1, has ganado')
}else{
    console.log('Felicidades jugador 2, has ganado')
}
```
En este ejercicio tenemos una clase con solo un constructor que se encarga de crear los jugadores y una clase tablero que se encarga de todas las operaciones del juego, colocar fichas en las zonas disponibles, comprobar que la zona no esta ocupada por otra ficha, mostrar el tablero y comprobar que hay un ganador en el juego, comprobaciones que se basan en las reglas del juego y que operan sobre la matriz donde se guarda el estado mas reciente del juego. 