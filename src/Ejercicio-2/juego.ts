import {Tablero} from './tablero'
import * as Prompt from 'prompt-sync';
import { Jugador } from './jugador';

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