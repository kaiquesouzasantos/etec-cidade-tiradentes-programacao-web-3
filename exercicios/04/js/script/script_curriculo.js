let elementos = [
  'text_cargo_desejado','text_name', 'text_email', 'telefone', 
  'text_idiomas', 'text_cargo', 'text_descricao_experiencia',
  'text_inicio', 'text_termino', 'text_instituicao_curso', 'text_curso', 'text_nascimento',
  'text_descricao_curso', 'text_curso_c', 'text_inicio_curso_c', 'text_termino_curso_c',
  'text_curso_tipo', 'text_instituicao_curso_c', 'text_descricao_curso_c', 'text_empresa'
]

function formatDate(dataRecebida){
  let data = new Date(dataRecebida)
  return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
}

function getValue(elementID) {
  return localStorage.getItem(elementID)
}

function setValue(elementID, content) {
  try{
    document.getElementById(elementID).innerHTML = content
  } catch(ignore){}
}

function setValues() {
  setValue('text_inicio', 
    formatDate(getValue('text_inicio'))+' ate '+formatDate(getValue('text_termino'))
  )
  setValue('text_idiomas', 'Portugues Nativo, Ingles A2.')
  setValue('text_nascimento', formatDate(getValue('text_nascimento')))
  setValue('text_instituicao_curso', 
    getValue('text_instituicao_curso')+ '<br>('+formatDate(getValue('text_inicio_curso'))+' ate '+
    formatDate(getValue('text_termino_curso'))+')<br>'+
    getValue('text_descricao_curso')+' | '+getValue('text_descricao_curso')
  )
  setValue('text_curso_c', 
    getValue('text_instituicao_curso_c')+'<br>('+formatDate(getValue('text_inicio_curso_c'))+' ate '+
    formatDate(getValue('text_termino_curso_c'))+')' +
    '<br>'+getValue('text_curso_c')+' | '+getValue('text_curso_tipo')
  )
}

document.getElementById('curriculo')?.addEventListener('mouseover', () => {
  elementos.forEach(
    (elemento) => setValue(elemento, getValue(elemento))
  )

  setValues()
})

document.getElementById('download')?.addEventListener('click', () => window.print())

//ESCONDER IMPRIMIR
function esconderBotao() {
  document.querySelector("#download").style.display = "none";
  window.print()
}