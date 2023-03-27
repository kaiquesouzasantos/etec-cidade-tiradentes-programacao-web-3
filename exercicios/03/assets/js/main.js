class Evento {
    constructor(nome) {
        this.nome = nome
    }

    alertaAtivacao() {
        Swal.fire({
            title: 'O evento ' + this.nome + ' foi ativado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function exibeMensagemAtivacao(nomeEvento) {
    new Evento(nomeEvento).alertaAtivacao()
}

function mudaCor(){
    exibeMensagemAtivacao('OnInput')
    document.getElementById("name").style.color = '#2c7bfe'
}