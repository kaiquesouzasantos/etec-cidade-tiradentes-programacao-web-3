import { Requester } from './resquest.component.js'
import { Tratamento } from './tratamento.component.js'

let PARTIDAS = await Requester.getGames()

export class Manipulator {
    static loadGames() {
        const div = document.getElementById("jogos-lista")
        const lista = this.tratamento()

        lista.forEach(
            partida => {
                try{
                    div.innerHTML += this.getPartida(partida)
                } catch (ignored) {}
            }
        )
    }

    static tratamento() {
        return Tratamento.factoryListPartida(PARTIDAS)
    }

    static getPartida(partida) {
        return `${partida.time_casa[0].nome} VS ${partida.time_visitante[0].nome} - ${partida.data}<br>`
    }
}
