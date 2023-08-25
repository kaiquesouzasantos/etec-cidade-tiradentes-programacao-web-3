import { Partida } from "../model/partida.model.js"
import { TIMES } from "../data/time.list.js"

export class Tratamento {
    static factoryPartida(time_casa, time_visitante, data) {
        return new Partida(time_casa, time_visitante, data)
    }

    static getTime(nome) {
        return TIMES.filter(
            time => time.nome == nome || time.pseudonimos.indexOf(nome) > -1
        )
    }

    static factoryListPartida(lista) {
        let listaPartida = []

        lista.data.forEach(
            (jogo) => {
                listaPartida.push(
                    this.factoryPartida(
                        this.getTime(jogo.home_team.full_name),
                        this.getTime(jogo.visitor_team.full_name),
                        jogo.date
                ))
            }
        )

        return listaPartida
    }
}