const circles = document?.querySelectorAll(".circle");
const progressBar = document?.querySelector(".indicator")
const buttons = document?.querySelectorAll("button");
const inputFile = document?.querySelector("#picture__input");
const pictureImage = document?.querySelector(".picture__image");
const pictureImageTxt = "";
pictureImage.innerHTML = pictureImageTxt;
const input = document?.querySelector('input[type="file"]');
const imagem = document?.querySelector('avatar');

let currentStep = 1;

// função que atualiza a etapa atual e atualiza o DOM
const updateSteps = (e) => {
  // atualize a etapa atual com base no botão clicado
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // percorrer todos os círculos e adicionar/remover classe "ativa" com base em seu índice e etapa atual
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  //largura da barra de progresso com base na etapa atual
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // verifique se a etapa atual é a última etapa ou a primeira etapa e desative os botões correspondentes
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

// adicionar evento de clique a todos os botões
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
})

//FUNÇÃO PARA ESCONDER CONTENT
function trocaDiv(divSair, divEntrar) {
  document.getElementById(divSair).style.display = "none";
  document.getElementById(divEntrar).style.display = "block";
}

// CARREGAR IMAGEM
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

//COLOCAR IMAGEM SEM MEXER NA POSIÇÃO
input.addEventListener('change', () => {
  avatar.style.opacity = 0;
});

function saveValue(elementID) {
  try{
    localStorage.setItem(elementID, document.getElementById(elementID).value)
  }catch(ignored){}
}

let elementos = [
  'text_cargo_desejado','text_name', 'text_email', 'telefone', 
  'text_idiomas', 'text_cargo', 'text_termino', 'text_inicio',  'text_descricao_experiencia',
  'text_empresa', 'salario', 'text_descricao_curso', 'text_curso', 'text_nascimento',
  'text_termino_curso', 'text_inicio_curso', 'text_escolaridade', 'text_instituicao_curso',
  'text_curso_c', 'text_inicio_curso_c', 'text_termino_curso_c',
  'text_curso_tipo', 'text_instituicao_curso_c', 'text_descricao_curso_c'
]

document.getElementById('btn_proximo')?.addEventListener('click', () => {
  elementos.forEach(
    (elemento) => saveValue(elemento)
  )

  window.location.href = 'curriculo.html'
})


