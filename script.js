let menu = document.querySelector('#bars');
let search = document.querySelector('#search');
let navbar = document.querySelector('.navbar');
let searchbox = document.querySelector('#search-btn');
let h1 = document.querySelector('.min');
let h1_box = document.querySelector('#h1');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    search.classList.remove('fa-times');
    searchbox.classList.remove('active');
    document.querySelector('#account').classList.remove('active');
}

search.onclick = () => {
    search.classList.toggle('fa-times');
    searchbox.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    document.querySelector('#account').classList.remove('active');
}

navbar.onclick = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    search.classList.remove('fa-times');
    searchbox.classList.remove('active');
    document.querySelector('#account').classList.remove('active');
}








