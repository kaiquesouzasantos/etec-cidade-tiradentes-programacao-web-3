const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInp = wrapper.querySelector("input");
const options = wrapper.querySelector(".options");

function eventFilter() {
    const searchWord = searchInp.value.toLowerCase()
    const gameCards = document.querySelectorAll(".game-card")

    if(searchWord == "") {
        gameCards.forEach(card => {
            card.style.display = "block"
        })

        return
    }

    gameCards.forEach(card => {
        const gameText = card.innerText.toLowerCase()

        if (!gameText.includes(searchWord)) 
            card.style.display = "none"
    })
}

searchInp.addEventListener("keyup", () => {
    eventFilter()
})

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));