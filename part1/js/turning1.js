let fenye1 = document.querySelectorAll('.page-link2')
let yemian11 = document.querySelector('#tab-pane1')
let yemian12 = document.querySelector('#tab-pane2')

let pagination1 = document.querySelector('.pagination1').querySelectorAll("li")

fenye1[0].addEventListener('click',diyiye)

fenye1[1].addEventListener('click',diyiye)

fenye1[2].addEventListener('click',dierye)

fenye1[3].addEventListener('click',dierye)

function diyiye() {
    yemian11.style = ''
    yemian11.className = 'float-left tab-pane specialwid active'

    for (let i =1;i<pagination1.length-1;i++){
        pagination1[i].className = 'page-item'
    }
    pagination1[1].className = 'page-item active'

    yemian12.style = 'display: none'
    yemian12.className = 'float-left tab-pane specialwid'
}

function dierye() {
    yemian12.style = ''
    yemian12.className = 'float-left tab-pane specialwid active'

    for (let i =1;i<pagination1.length-1;i++){
        pagination1[i].className = 'page-item'
    }
    pagination1[2].className = 'page-item active'

    yemian11.style = 'display: none'
    yemian11.className = 'float-left tab-pane specialwid'
}
