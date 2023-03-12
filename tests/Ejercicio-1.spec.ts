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

context('Objects collections methods tests', () =>{
    describe('Pelicula collection tests', () => {
        let pel1 = new Pelicula('Pelicula1', 2012, 'japones', 'accion', 6)
        let pel2 = new Pelicula('Peli2', 2020, 'chino', 'miedo', 5)
        let pelcol = new PeliculaCollection([pel1]);
        it('add tests', () => {
            pelcol.add(pel2);
            expect(pelcol.getAll()).to.deep.equal([pel1,pel2]);
        });
        it('delete tests', () => {
            pelcol.delete(pel1);
            expect(pelcol.getAll()).to.deep.equal([pel2]);
        });
        it('getCont tests', () => {
            expect(pelcol.getCont()).to.deep.equal(1);
        });
        it('SearchByAño Tests', () => {
            expect(pelcol.searchByAño(2020)).to.deep.equal([pel2]);
        });
        it('SearchByLeng Tests', () => {
            expect(pelcol.searchByLeng('ingles')).to.deep.equal([]);
        });
        it('SearchByTitulo Tests', () => {
            expect(pelcol.searchByTitulo('Peli')).to.deep.equal([pel2]);
        });
        it('SearchByGenre Tests', () => {
            expect(pelcol.searchByGen('miedo')).to.deep.equal([pel2]);
        });
        it('SortByAño tests', () => {  
            expect(pelcol.sortByAño()).to.deep.equal([pel2]);
        });
        it('SortByLeng tests', () => {  
            expect(pelcol.sortByLeng()).to.deep.equal([pel2]);
        });
        it('SortByTitulo tests', () => {  
            expect(pelcol.sortByTitulo()).to.deep.equal([pel2]);
        });
        it('SortByVal tests', () => {  
            expect(pelcol.sortByVal()).to.deep.equal([pel2]);
        });
        it('SortByGenre tests', () => {  
            expect(pelcol.sortByGen()).to.deep.equal([pel2]);
        });
    });

    describe('Serie collection tests', () => {
        let ser1 = new Serie('Serie1', 2020, 'ingles',2, 12, 3)
        let ser2 = new Serie('Serie2', 2019, 'español',3, 8, 1)
        let ser3 = new Serie('Serie3', 2019, 'español',3, 8, 1)
        let sercol = new SerieCollection([ser1,ser2]);
        it('add tests', () => {
            sercol.add(ser3);
            expect(sercol.getAll()).to.deep.equal([ser1,ser2,ser3]);
        });
        it('delete tests', () => {
            sercol.delete(ser3);
            expect(sercol.getAll()).to.deep.equal([ser1,ser2]);
        });
        it('getCont tests', () => {
            expect(sercol.getCont()).to.deep.equal(2);
        });
        it('SearchByAño Tests', () => {
            expect(sercol.searchByAño(2020)).to.deep.equal([ser1]);
        });
        it('SearchByLeng Tests', () => {
            expect(sercol.searchByLeng('japones')).to.deep.equal([]);
        });
        it('SearchByTitulo Tests', () => {
            expect(sercol.searchByTitulo('Serie2')).to.deep.equal([ser2]);
        });
        
        it('SortByAño tests', () => {  
            expect(sercol.sortByAño()).to.deep.equal([ser2,ser1]);
        });
        it('SortByEpis tests', () => {  
            expect(sercol.sortByEpis()).to.deep.equal([ser2,ser1]);
        });
        it('SortByLeng tests', () => {  
            expect(sercol.sortByLeng()).to.deep.equal([ser2,ser1]);
        });
        it('SortByTemp tests', () => {  
            expect(sercol.sortByTemp()).to.deep.equal([ser1,ser2]);
        });
        it('SortByTitulo tests', () => {  
            expect(sercol.sortByTitulo()).to.deep.equal([ser1,ser2]);
        });
        it('SortByVal tests', () => {  
            expect(sercol.sortByVal()).to.deep.equal([ser2,ser1]);
        });
    });

    describe('Documental collection tests', () => {
        let doc1 = new Documental('Documental1', 2019, 'español', 2, 12,'ciencia', 8);
        let doc2 = new Documental('Documental2', 2006, 'español', 1, 20,'ciencia', 6);
        let doc3 = new Documental('Documental3', 2006, 'español', 1, 20,'ciencia', 6);
        let doccol = new DocumentalCollection([doc1,doc2]);
        it('add tests', () => {
            doccol.add(doc3);
            expect(doccol.getAll()).to.deep.equal([doc1,doc2,doc3]);
        });
        doccol.delete(doc3)
        it('delete tests', () => {
            doccol.delete(doc3);
            expect(doccol.getAll()).to.deep.equal([doc1,doc2]);
        });
        it('getCont tests', () => {
            expect(doccol.getCont()).to.deep.equal(2);
        });
        it('SearchByAño Tests', () => {
            expect(doccol.searchByAño(2006)).to.deep.equal([doc2]);
        });
        it('SearchByLeng Tests', () => {
            expect(doccol.searchByLeng('ingles')).to.deep.equal([]);
        });
        it('SearchByTitulo Tests', () => {
            expect(doccol.searchByTitulo('Documental1')).to.deep.equal([doc1]);
        });
        it('SearchByTemat Tests', () => {
            expect(doccol.searchByTemat('ciencia')).to.deep.equal([doc1,doc2]);
        });
        it('SortByAño tests', () => {  
            expect(doccol.sortByAño()).to.deep.equal([doc2,doc1]);
        });
        it('SortByEpis tests', () => {  
            expect(doccol.sortByEpis()).to.deep.equal([doc1,doc2]);
        });
        it('SortByLeng tests', () => {  
            expect(doccol.sortByLeng()).to.deep.equal([doc1,doc2]);
        });
        it('SortByTemp tests', () => {  
            expect(doccol.sortByTemp()).to.deep.equal([doc2,doc1]);
        });
        it('SortByTitulo tests', () => {  
            expect(doccol.sortByTitulo()).to.deep.equal([doc1,doc2]);
        });
        it('SortByVal tests', () => {  
            expect(doccol.sortByVal()).to.deep.equal([doc2,doc1]);
        });
    });

})

