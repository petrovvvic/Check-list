const beforeBtn = document.getElementById("before");
const afterBtn = document.getElementById("after");
const beforeField = document.getElementById("before-tasks")
const afterField = document.getElementById("after-tasks")

let btns = [beforeBtn,afterBtn]


afterBtn.addEventListener("click", function(){
        beforeField.classList.add("hide")
        afterField.classList.remove("hide")
        beforeBtn.classList.add("hide-color")
        afterBtn.classList.remove("hide-color")
    })

beforeBtn.addEventListener("click", function(){
        beforeField.classList.remove("hide")
        afterField.classList.add("hide")
        beforeBtn.classList.remove("hide-color")
        afterBtn.classList.add("hide-color")
    })

