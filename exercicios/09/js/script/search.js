const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInp = wrapper.querySelector("input");
const options = wrapper.querySelector(".options");

let countries = ["Atlanta Hawks", "Boston Celtics", "LA Clippers", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers",
           "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers",
           "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic",
           "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizard"];

function addCountry(selectedCountry) {
    options.innerHTML = ""
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : ""
        let li = `<li onclick="updateName(this)" class="${isSelected}" id="${country}">${country}</li>`
        options.insertAdjacentHTML("beforeend", li)
    });
}
addCountry()

function updateName(selectedLi) {
    searchInp.value = ""
    addCountry(selectedLi.innerText)
    wrapper.classList.remove("active")
    selectBtn.firstElementChild.innerText = selectedLi.innerText
}

function eventFilter() {
    let arr = []
    let searchWord = searchInp.value.toLowerCase()
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord)
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : ""
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`
    }).join("")
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`
    
    const gameCards = document.querySelectorAll(".game-card")

    gameCards.forEach(function(card) {
        const gameText = card.innerText.toLowerCase()

        if (gameText.includes(searchWord)) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}

searchInp.addEventListener("keyup", () => {
    eventFilter()
})

searchInp.addEventListener("click", () => {
    eventFilter()
})

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));