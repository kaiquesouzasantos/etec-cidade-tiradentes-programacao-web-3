import { Requester } from './resquest.component.js'
import { Tratamento } from './tratamento.component.js'

let PARTIDAS = await Requester.getGames()

export class Manipulator {
    static loadGames() {
        this.teste(this.tratamento())
    }

    static tratamento() {
        return Tratamento.factoryListPartida(PARTIDAS)
    }

    static teste(lista) {
        const div = document.getElementById("jogos-lista")

        lista.forEach(
            partida => div.innerHTML += `${partida.time_casa} VS ${partida.time_visitante}<br>`    
        )
    }
}
