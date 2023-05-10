function helloButton(evt){
    evt.preventDefault()
    alert("Meow I love you")
}

function urCuteButton(evt){
    evt.preventDefault()
    alert("Meow ur cute 2")
}

let catBtn = document.querySelector('#btn1')
let catBtn2 = document.querySelector('#btn2')

catBtn.addEventListener('click', helloButton)
catBtn2.addEventListener('click', urCuteButton)
