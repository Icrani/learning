let fenye2 = document.querySelectorAll('.page-link1')
let yemian1 = document.querySelector('#tab-pane3')
let yemian2 = document.querySelector('#tab-pane4')

let pagination2 = document.querySelector('.pagination2').querySelectorAll("li")

fenye2[0].addEventListener('click',diyiye)

fenye2[1].addEventListener('click',diyiye)

fenye2[2].addEventListener('click',dierye)

fenye2[3].addEventListener('click',dierye)

function diyiye() {
    yemian1.style = ''
    yemian1.className = 'float-left tab-pane specialwid active'

    for (let i =1;i<pagination2.length-1;i++){
        pagination2[i].className = 'page-item'
    }
    pagination2[1].className = 'page-item active'

    yemian2.style = 'display: none'
    yemian2.className = 'float-left tab-pane specialwid'
}

function dierye() {
    yemian2.style = ''
    yemian2.className = 'float-left tab-pane specialwid active'

    for (let i =1;i<pagination2.length-1;i++){
        pagination2[i].className = 'page-item'
    }
    pagination2[2].className = 'page-item active'

    yemian1.style = 'display: none'
    yemian1.className = 'float-left tab-pane specialwid'
}
