import { Cancion } from "./cancion";

export interface Single {
    nombre: string;
    pub: number;
    cancion: Cancion;
    versiones: Cancion[];
}

export class SingleC implements Single {
    /**
     * Constructor de la clase Single
     * @param nombre Nombre del Single
     * @param pub Año de publicación del Single
     * @param cancion Canción principal del Single
     * @param versiones Versiones de la canción principal del Single
     */
    constructor(public nombre: string, public pub: number,public cancion: Cancion, public versiones: Cancion[]) {
        this.setCanciones(cancion, versiones);
    }

    /**
     * Método privado que establece la canción principal y sus versiones
     * @param cancion Canción principal del Single
     * @param versiones Versiones de la canción principal del Single
     */
    private setCanciones(cancion: Cancion, versiones: Cancion[]) {
        this.cancion = cancion;
        this.versiones = versiones;
    }

    /**
     * Método que devuelve el nombre del Single
     * @returns El nombre del Single
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el año de publicación del Single
     * @returns El año de publicación del Single
     */
    getPub() {
        return this.pub;
    }

    /**
     * Método que devuelve la canción principal del Single
     * @returns La canción principal del Single
     */
    getCancion() {
        return this.cancion;
    }

    /**
     * Método que devuelve las versiones de la canción principal del Single
     * @returns Las versiones de la canción principal del Single
     */
    getVersiones() {
        return this.versiones;
    }
}
