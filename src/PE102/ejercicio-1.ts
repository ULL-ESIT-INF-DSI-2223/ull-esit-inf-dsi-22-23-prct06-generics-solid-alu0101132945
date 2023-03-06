/**
 * funcion que calcula un filtro de suavizado con la media
 * @param imagen imagen a la que se le va a aplicar el filtro
 * @returns la imagen con el filtro aplicado
 */

export function mediaFilter(imagen : number[][]){
    let imagenresult = imagen;
    for(let aux1 = 0; aux1 < imagen.length; aux1++){
        for(let aux2 = 0; aux2 < imagen[aux1].length; aux2++){
            let media = 0;
            for(let i = -1; i < 1; i++){
                for(let j = -1; j < 1; j++){
                    if(i === 0 && j === 0 ){continue}
                    let pos1 =  (imagen.length +(aux1 + i) % imagen.length)
                    let pos2 = (imagen[aux1].length +aux2 + j) % imagen[aux1].length 
                    media += imagen[pos1][pos2]
                }
                media = Math.trunc(media / 9)
                imagenresult[aux1][aux2] = media
            } 
        }
    }
    return imagenresult;
}