const character = document.querySelectorAll(".personagem");
const buttonCharacter = document.querySelectorAll(".botao");

buttonCharacter.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        removeSelectButton();

        botao.classList.add("selecionado");

        const characterSelect = document.querySelector(".personagem.selecionado");
        characterSelect.classList.remove("selecionado");
        character[index].classList.add("selecionado")

    })}
)

function removeSelectButton () {
    const selectButton = document.querySelector(".botao.selecionado");
    selectButton.classList.remove("selecionado")
}