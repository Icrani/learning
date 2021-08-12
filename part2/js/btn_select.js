let links = document.querySelectorAll('.nav-link')
let btns = document.querySelectorAll('.btnbtn')

btns[0].className = "btnbtn active_color"

for (let i = 0; i < btns.length; i++) {
    links[i].addEventListener('click', function () {
        for (let i = 0; i < btns.length; i++) {
            btns[i].className = "btnbtn"
        }
        btns[i].className = "btnbtn active_color"
    })
}
