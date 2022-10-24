const buttons = document.querySelectorAll("button");
const hh = document.getElementById("hh");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button == buttons[0]){
            button.classList.add("selected");
            buttons[1].classList.remove("selected");
            buttons[2].classList.remove("selected");
        }
        if (button == buttons[1]){
            button.classList.add("selected");
            buttons[0].classList.remove("selected");
            buttons[2].classList.remove("selected");
        }
        if (button == buttons[2]){
            button.classList.add("selected");
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
        }
        hh.textContent = button.id;
    })
})