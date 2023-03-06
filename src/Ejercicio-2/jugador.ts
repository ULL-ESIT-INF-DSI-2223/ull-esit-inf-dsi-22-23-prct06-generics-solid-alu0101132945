interface jugador {
    nombre: string;
    ficha: string;
  }

export class Jugador implements jugador{
    /**
     * constructor de la clase jugador
     * @param nombre nombre del jugador
     * @param ficha color de la ficha
     */
    constructor(public nombre: string, public ficha: string) {}
  }