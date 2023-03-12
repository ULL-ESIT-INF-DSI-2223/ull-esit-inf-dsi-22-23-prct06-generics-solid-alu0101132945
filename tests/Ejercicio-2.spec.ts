import 'mocha';
import {expect} from 'chai';
import {ListaGenerica} from '../src/Ejercicio-2/listagenerica';

context('Generic list methods tests', () =>{
    describe('Genric List tests', () => {
        let arr1 = new ListaGenerica<number>()
        arr1.items.push(1);
        arr1.items.push(2);
        arr1.items.push(3);
        let arr2 = new ListaGenerica<number>()
        arr1.items.push(4);
        arr1.items.push(5);
        arr1.items.push(6);
        it('append test', () => {
            const appendlist = new ListaGenerica<number> ();
            appendlist.append(arr2);
            expect(appendlist.items).to.deep.equal(arr2.items) 
        });
        it('concatenate test', () => {
            const contlist = arr1.concatenate(arr2);
            expect(contlist.items).to.deep.equal([1,2,3,4,5,6])
        });
        it('filter test', () => {
            const filtlist = arr1.filter((elemento) => elemento > 1)
            expect(filtlist.items).to.deep.equal([2,3,4,5,6])
        });
        it('map test', () => {
            const maplist = arr1.map((elemento) => elemento * 2);
            expect(maplist.items).to.deep.equal([2,4,6,8,10,12])
        });
        it('reduce test', () => {
            arr2.items.push(4)
            arr2.items.push(5)
            arr2.items.push(6)
            const reduceval: number = arr2.reduce((acumulador, elemento) => acumulador + elemento, 0)
            expect(reduceval).to.deep.equal(15)
        });
        it('reverse test', () => {
            expect(arr2.reverse().items).to.deep.equal([6,5,4])
        });

        it('length test', () => {
            expect(arr2.length()).to.deep.equal(3)
        });
    });
})