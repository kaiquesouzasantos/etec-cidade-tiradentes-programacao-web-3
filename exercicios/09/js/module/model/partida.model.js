export class Partida {
    constructor(time_casa, time_visitante, data, season, status, pontuacao_casa, pontuacao_visitante) {
        this.time_casa = time_casa
        this.time_visitante = time_visitante
        this.data = this.formatDate(data)
        this.status = status
        this.season = season
        this.pontuacao_casa = this.formatPoint(pontuacao_casa)
        this.pontuacao_visitante = this.formatPoint(pontuacao_visitante)
    }

    formatDate(data) {
        const dataFormat = new Date(data)
        return `${dataFormat.getUTCDay()}/${dataFormat.getUTCMonth()}/${dataFormat.getUTCFullYear()}`
    }

    formatPoint(pontuacao) {
        if(pontuacao < 100) {
            pontuacao = "0"+pontuacao
        }

        return pontuacao
    }
}