export class Notification {
    static alertaAtivacao(mensagem) {
        Swal.fire({
            title: mensagem,
            showConfirmButton: false,
            timer: 3000
          })
    }
}