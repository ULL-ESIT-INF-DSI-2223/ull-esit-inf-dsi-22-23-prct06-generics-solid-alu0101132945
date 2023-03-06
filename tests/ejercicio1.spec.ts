import {Artista} from '../src/Ejercicio-1/artista'
import {Cancion} from '../src/Ejercicio-1/cancion'
import {Disco} from '../src/Ejercicio-1/disco'
import {Biblioteca} from '../src/Ejercicio-1/biblioteca'
import { expect } from 'chai';

describe('ej1 function tests', () => {
    const cancion = new Cancion('cancion1',120,false,300,['genero1','genero2'])
    const disco = new Disco('disco1',2001,[cancion])
    const artista = new Artista('artista1',200,[disco])
    const biblioteca = new Biblioteca([artista])
    it('cancion exist and his method works', () => {
        expect(cancion.getNombre()).to.be.equal('cancion1');
        expect(cancion.getRep()).to.be.equal(300)
        expect(cancion.getDur()).to.be.equal(120)
        expect(cancion.getSin()).to.be.equal(false)
        expect(cancion.getGen()).to.be.equal(['genero1','genero2'])
    });

    it('disco exist and his method works', () => {
        expect(disco.getNombre()).to.be.equal('disco1')
        expect(disco.getPub()).to.be.equal(2001)
        expect(disco.getCanciones()).to.be.equal([cancion])
        expect(disco.getCancion('cancion1')).to.be.equal(cancion)
    });

    it('artista exist and his method works', () => {
        expect(artista.getNombre()).to.be.equal('artista1')
        expect(artista.getOyentes()).to.be.equal(200)
        expect(artista.getDisc()).to.be.equal([disco])
        expect(artista.getDisco('disco1')).to.be.equal(disco)
    });
    
    it('biblioteca exist and his method works', () => {
        expect(biblioteca.getArtista('artista1')).to.be.equal(artista)
        expect(biblioteca.durDisc('artista1','disco1')).to.be.equal(120)
        expect(biblioteca.repDisc('artista1','disco1')).to.be.equal(300)
        expect(biblioteca.numberCanc('artista1','disco1')).to.be.equal(1)
    });
});