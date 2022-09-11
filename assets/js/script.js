const optionMenu = document.querySelector(".select-menu"),
    selectBtn = document.querySelector(".select-btn"),
    options = document.querySelectorAll(".options .option"),
    sBtn_text = document.querySelector(".sBtn-text");
    optn = document.querySelector(".options");

selectBtn.addEventListener("click", () => optn.classList.toggle("d-none"));

options.forEach(option =>{
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".flags").innerText;
        sBtn_text.innerText = selectedOption;
        optn.classList.toggle("d-none");
    })
})
