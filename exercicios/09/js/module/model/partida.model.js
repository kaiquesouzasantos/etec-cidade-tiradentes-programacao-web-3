export class Partida {
    constructor(time_casa, time_visitante, data, season, status, pontuacao_casa, pontuacao_visitante) {
        this.time_casa = time_casa
        this.time_visitante = time_visitante
        this.data = this.formatDate(data)
        this.status = status
        this.season = season
        this.pontuacao_casa = this.formatPoint(pontuacao_casa, 100)
        this.pontuacao_visitante = this.formatPoint(pontuacao_visitante, 100)
    }

    formatDate(data) {
        const dataFormat = new Date(data)
        return `
            ${this.formatPoint(dataFormat.getUTCDay(), 10)}/
            ${this.formatPoint(dataFormat.getUTCMonth(), 10)}
            /${this.formatPoint(dataFormat.getUTCFullYear(), 10)}
        `
    }

    formatPoint(pontuacao, comparador) {
        if(pontuacao < comparador) {
            pontuacao = "0"+pontuacao
        }

        return pontuacao
    }
}