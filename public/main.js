function catButton(evt){
    evt.preventDefault()
    alert("Meow I love you")
}

let catBtn = document.querySelector('button')

catBtn.addEventListener('click', catButton)