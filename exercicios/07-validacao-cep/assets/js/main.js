function pesquisa() {
    const inputCep = document.getElementById('cep')
    const resultadoDiv = document.getElementById('resultado')
    const cep = inputCep.value.replace(/\D/g, '');
    
    if(cep.length >= 8) {
        requisicaoAjax(resultadoDiv, cep)
    }
}

function requisicaoAjax(div, cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText)

                if (data.erro) {
                    div.value = 'CEP não encontrado.'
                } else {
                    div.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
                }
            } else {
                div.value = 'Erro ao buscar o CEP.'
            }
        }
    };

    xhr.open('GET', url)
    xhr.send()
}
