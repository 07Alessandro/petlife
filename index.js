

var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })

})


let botaoMenu = document.getElementById('botao-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay-menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})



