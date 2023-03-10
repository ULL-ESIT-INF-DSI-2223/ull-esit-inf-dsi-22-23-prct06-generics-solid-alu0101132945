import 'mocha';
import {expect} from 'chai';
import {Pelicula,Serie,Documental} from '../src/Ejercicio-1/objects';
import {PeliculaCollection} from '../src/Ejercicio-1/peliculascollection';
import {SerieCollection} from '../src/Ejercicio-1/seriescollection';
import {DocumentalCollection} from '../src/Ejercicio-1/documentalescollection';


describe('Objects methods tests', () => {
    it('Pelicula tests', () => {
        let pel1 = new Pelicula('Pelicula1', 2012, 'japones','accion', 6)
        expect(pel1.getTitulo()).to.be.equal('Pelicula1');
        expect(pel1.getAño()).to.be.equal(2012);
        expect(pel1.getGen()).to.be.equal('accion');
        expect(pel1.getVal()).to.be.equal(6);
    });
    it('Serie tests', () => {
        let ser1 = new Serie('Serie1', 2020,'ingles' ,2, 12, 3)
        expect(ser1.getTitulo()).to.be.equal('Serie1');
        expect(ser1.getAño()).to.be.equal(2020);
        expect(ser1.getTemp()).to.be.equal(2);
        expect(ser1.getEpisode()).to.be.equal(12);
        expect(ser1.getVal()).to.be.equal(3);
    });
    it('Documental Tests', () => {
        let doc1 = new Documental('Documental1', 2019,'español', 2, 12,'ciencia', 8)
        expect(doc1.getTitulo()).to.be.equal('Documental1');
        expect(doc1.getAño()).to.be.equal(2019);
        expect(doc1.getTemp()).to.be.equal(2);
        expect(doc1.getEpisode()).to.be.equal(12);
        expect(doc1.getTemat()).to.be.equal('ciencia');
        expect(doc1.getVal()).to.be.equal(8);
    });
});

describe('Objects collections methods tests', () => {
    it('Pelicula collection tests', () => {
        let pel1 = new Pelicula('Pelicula1', 2012, 'japones', 'accion', 6)
        let pel2 = new Pelicula('Peli2', 2020, 'chino', 'miedo', 5)
        let pelcol = new PeliculaCollection([pel1]);
        pelcol.add(pel2);
        expect(pelcol.getAll()).to.be.equal([pel1,pel2]);
        pelcol.delete(pel1);
        expect(pelcol.getAll()).to.be.equal([pel2]);

    });
    it('Serie tests', () => {
        let ser1 = new Serie('Serie1', 2020, 'ingles',2, 12, 3)
        let ser2 = new Serie('Serie2', 2019, 'ingles',3, 8, 1)
        let sercol = new SerieCollection([ser1,ser2]);
        expect(sercol.sortByAño()).to.be.equal([ser2,ser1]);
        expect(sercol.sortByEpis()).to.be.equal([ser1,ser2]);
        expect(sercol.sortByLeng()).to.be.equal([ser1,ser2]);
        expect(sercol.sortByTemp()).to.be.equal([ser1,ser2]);
        expect(sercol.sortByTitulo()).to.be.equal([ser1,ser2]);
        expect(sercol.sortByVal()).to.be.equal([ser2,ser1]);


    });
    it('Documental Tests', () => {
        let doc1 = new Documental('Documental1', 2019, 'español', 2, 12,'ciencia', 8);
        let doc2 = new Documental('Documental2', 2006, 'español', 1, 20,'ciencia', 6);
        let doccol = new DocumentalCollection([doc1,doc2]);
        expect(doccol.searchByAño(2006)).to.be.equal([doc2]);
        expect(doccol.searchByLeng('ingles')).to.be.equal([]);
        expect(doccol.searchByTitulo('Documental1')).to.be.equal([doc1]);
        expect(doccol.searchByTemat('ciencia')).to.be.equal([doc1,doc2]);
    });
});