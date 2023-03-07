export interface Arithmeticable<T>{
    /**
     * definicion de la interfaz del metodo add
     * @param op1 primer operador para realizar la suma
     * @param op2 segundo operador para realizar la suma
     */
    add(op1:T,op2:T): T;
    /**
     * definicion de la interfaz del metodo substract
     * @param op1 primer operador para realizar la resta
     * @param op2 segundo operador para realizar la resta
     */
    substract(op1:T,op2:T): T;
    /**
     * definicion de la interfaz del metodo multiply
     * @param op1 primer operador para realizar la multiplicacion
     * @param op2 segundo operador para realizar la multiplicacion
     */
    multiply(op1:T,op2:T): T;
    /**
     * definicion de la interfaz del metodo divide
     * @param op1 primer operador para realizar la division
     * @param op2 segundo operador para realizar la division
     */
    divide(op1:T,op2:T): T;
}

export abstract class ArithmeticableCollection<T extends Arithmeticable<T>>{

    /**
     * constructor de la clase abstracta ArithmeticableCollection
     * @param elements elementos que se guardan en el array de valores genericos
     */
    constructor(public elements: T[]){}

    /**
     * metodo que incluye un elemento de tipo generico al array de la clase
     * @param objeto elemento que va a ser incluido en la clase
     */
    addArithmeticable(objeto:T){
        this.elements.push(objeto);
    }

    /**
     * metodo que devuelve un elemento dada una posicion
     * @param pos posicion del array en la que se va a buscar el array
     * @returns devuelve un objeto si la posicion esta en el array o undefined si no
     */
    getArithmeticable(pos:number):T | undefined{
        if(pos > 0 && pos < this.elements.length){
            return this.elements[pos]
        }else return undefined
    }

    /**
     * metodo que devuelve el tamaño del vector
     * @returns el tamaño del vector de elementos de la clase
     */
    getNumberOfArithmeticables():number{
        return this.elements.length
    }
}

export type rational = [number,number]

export class Rational implements Arithmeticable<rational>{
    /**
     * implementacion del metodo add de la interfaz que suma dos racionales
     * @param op1 primer racional para realizar la suma
     * @param op2 segundo racional para realizar la suma
     */
    add(op1:rational,op2:rational):rational{
        let opresult: rational = [0,0];
        opresult[0] = op1[0] * op2[1] + op2[0] * op1[1];
        opresult[1] = op1[1] * op2[1];
        return opresult;
    }

    /**
     * implementacion del metodo substract de la interfaz que resta dos racionales
     * @param op1 primer racional para realizar la resta
     * @param op2 segundo racional para realizar la resta
     */
    substract(op1:rational,op2:rational):rational{
        let opresult: rational = [0,0];
        opresult[0] = op1[0] * op2[1] - op2[0] * op1[1];
        opresult[1] = op1[1] * op2[1];
        return opresult;
    }

    /**
     * implementacion del metodo multiply de la interfaz que multiplica dos racionales
     * @param op1 primer racional para realizar la multiplicacion
     * @param op2 segundo racional para realizar la multiplicacion
     */
    multiply(op1:rational,op2:rational):rational{
        let opresult: rational = [0,0];
        opresult[0] = op1[0] * op2[0];
        opresult[1] = op1[1] * op2[1];
        return opresult;
    }

    /**
     * implementacion del metodo divide de la interfaz que divide dos racionales
     * @param op1 primer racional para realizar la division
     * @param op2 segundo racional para realizar la division
     */
    divide(op1:rational,op2:rational):rational{
        let opresult: rational = [0,0];
        opresult[0] = op1[0] * op2[1];
        opresult[1] = op1[1] * op2[0];
        return opresult;
    }
}