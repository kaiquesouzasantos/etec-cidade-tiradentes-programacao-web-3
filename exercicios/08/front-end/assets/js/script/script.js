const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function cookies(functions) {
    const container = document.querySelector('.cookies-container');
    const save = document.querySelector('.cookies-save');
    if (!container || !save) return null;

    const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
    if (localPref) activateFunctions(localPref);

    function getFormPref() {
        return [...document.querySelectorAll('[data-function]')]
            .filter((el) => el.checked)
            .map((el) => el.getAttribute('data-function'));
    }

    function activateFunctions(pref) {
        pref.forEach((f) => functions[f]());
        container.style.display = 'none';
        window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
    }

    function handleSave() {
        const pref = getFormPref();
        activateFunctions(pref);
    }

    save.addEventListener('click', handleSave);
}

function marketing() {
    console.log('Função de marketing');
}

function analytics() {
    console.log('Função de analytics');

    const data = new Date();

    const str_data = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    const str_hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    const idioma = "O idioma utilizado é " + navigator.language + ".";
    const sistema = "O navegador utilizado é (plataforma-versão-navegador) " + navigator.userAgent + ".";

    console.log("Data: " + str_data);
    console.log("Hora: " + str_hora);
    console.log("Idioma: " + idioma);
    console.log("Sistema: " + sistema);
}

cookies({
    marketing,
    analytics,
});

pesquisa_input = document.querySelectorAll(".pesquisa");

for (i in pesquisa_input) {
    pesquisa_input[i].onkeyup = function (e) {
        reg = new RegExp(this.value.toLowerCase(), "g")
        lis = this.parentElement.querySelector(".lista")
        console.log(lis)

        for (j of lis.children) {
            if (!j.getAttribute("nome").match(reg))
                j.style.display = "none"
            else
                j.removeAttribute("style")
        }
    }
}

const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Preencha este campo"
            }
        }
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function () {
        const error = verifyErrors()

        if (error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {
    const field = event.target
    const validation = ValidateField(field)
    validation()
}

for (field of fields) {
    field.addEventListener("invalid", event => {
        event.preventDefault()
        customValidation(event)
    })

    field.addEventListener("blur", customValidation)
}

class Notification {
    static alertaAtivacao(mensagem) {
        Swal.fire({
            title: mensagem,
            showConfirmButton: false,
            //timer: 3000
          })
    }
}

document.getElementById("contato")?.addEventListener("submit", () => {
    Notification.alertaAtivacao("Contato realizado com sucesso! Em breve retornaremos, muito obrigado.")
})

document.getElementById("prodBuy")?.addEventListener("click", () => {
    Notification.alertaAtivacao("TESTE")
})