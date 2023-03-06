import {Jugador} from './jugador';
  
export class Tablero {
    /**
     * constructor del tablero de conecta 4
     * @param jugador1 jugador 1
     * @param jugador2 jugador 2
     * @param tablero tablero de juego
     * @param numFilas numero de filas del tablero
     * @param numColumnas numero de columnas del tablero
     */
    constructor(public jugador1: Jugador, public jugador2: Jugador, private tablero: String[][] = [], readonly numFilas: number = 6, readonly numColumnas: number = 7) {
        for (let i = 0; i < this.numFilas; i++) {
            this.tablero.push([]);
            for (let j = 0; j < this.numColumnas; j++) {
                this.tablero[i].push('O');
            }
        }
    }

    /**
     * metodo para colocar una ficha en el tablero
     * @param fila fila donde se coloca la ficha
     * @param columna columna donde se coloca la ficha
     * @param ficha ficha que va a ser colocada
     */
    colocarFicha(fila: number, columna: number, ficha: String) {
        this.tablero[fila][columna] = ficha;
    }

    /**
     * metodo para comprobar si la columna esta llena
     * @param columna columna que se va a comprobar
     * @returns si la columna esta llena o no
     */
    columnaEstaLlena(columna: number): boolean {
        return this.tablero[0][columna] !== 'O';
    }

    /**
     * imprime el estado actual del tablero
     */
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

    /**
     * metodo que commprueba si hay un ganador en la partida 
     * @param color color del jugador que se va a comprobar
     * @returns si hay un ganador en el juego
     */
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

        


