import 'mocha';
import {expect} from 'chai';
import {mediaFilter} from '../src/PE102/ejercicio-1';

describe('ej1 function tests', () => {
    const imagen1 = [[1,200,169,4],[20,69,80,115],[170,95,83,9],[130,220,50,47]]
    it('mediaFilter; returns image filtered', () => {
        expect(mediaFilter(imagen1)).to.be.equal([[5,14,24,5],[0,0,1,2],[0,0,0,0],[0,0,0,0]]);
    });
});