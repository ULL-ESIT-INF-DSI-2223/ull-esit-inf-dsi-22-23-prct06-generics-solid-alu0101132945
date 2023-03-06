import {Tablero} from '../src/Ejercicio-2/tablero'
import { expect } from 'chai';
import { Jugador } from '../src/Ejercicio-2/jugador';

describe('ej2 function tests', () => {
    it('jugador exists', () => {
        let jugador1 = new Jugador('amarillo','A') 
        expect(jugador1).to.not.equal(null);
    });
});