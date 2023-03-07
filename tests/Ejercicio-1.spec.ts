import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../src/Ejercicio-1/objects';
import { Serie } from '../src/Ejercicio-1/objects';
import {Documental} from '../src/Ejercicio-1/objects';

describe('ArithmeticableCollection function tests', () => {
    it('Pelicula tests', () => {
        let pel1 = new Pelicula('Pelicula1', 2012, 'accion', 6)
        expect(pel1.getName()).to.be.equal('Pelicula1');
        expect(pel1.getAño()).to.be.equal(2012);
        expect(pel1.getGen()).to.be.equal('accion');
        expect(pel1.getVal()).to.be.equal(6);
    });
    it('Serie tests', () => {
        let ser1 = new Serie('Serie1', 2020, 2, 12, 3)
        expect(ser1.getName()).to.be.equal('Serie1');
        expect(ser1.getAño()).to.be.equal(2020);
        expect(ser1.getTemp()).to.be.equal(2);
        expect(ser1.getEpisode()).to.be.equal(12);
        expect(ser1.getVal()).to.be.equal(3);
    });
    it('Documental Tests', () => {
        let doc1 = new Documental('Documental1', 2019, 2, 12,'ciencia', 8)
        expect(doc1.getName()).to.be.equal('Documental1');
        expect(doc1.getAño()).to.be.equal(2019);
        expect(doc1.getTemp()).to.be.equal(2);
        expect(doc1.getEpisode()).to.be.equal(12);
        expect(doc1.getTemat()).to.be.equal('ciencia');
        expect(doc1.getVal()).to.be.equal(3);
    });
});