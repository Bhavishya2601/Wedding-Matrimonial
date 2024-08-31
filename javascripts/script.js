// code for background change 
const img = ["../img/banner.jpg", "../img/ban-bg.jpg"]

let index = 0;

changeBackground = () => {
    document.getElementById('background').style.backgroundImage = `url(${img[index]})`
    index = (index + 1) % img.length
}

changeBackground();

setInterval(() => {
    changeBackground()
}, 5000);


// code for splidejs
var splide = new Splide('#splide1', {
    perPage: 4,
    perMove: 1,
    gap: '1rem',
    type: 'loop',
    snap: true,
    drag: 'free',
    arrows: false,
    autoplay: true,
    pagination: false,
    breakpoints: {
        1400:{
            perPage: 3,
            gap: '.7rem'
            // height: '6rem',
        },
        768:{
            perPage: 2,
            gap: '.7rem'
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '6rem',
        },
    },
});

splide.mount();



var splide = new Splide('#splide2', {
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    type: 'loop',
    snap: true,
    drag: 'free',
    arrows: false,
    autoplay: true,
    pagination: false,
    breakpoints: {
        1024: {
            perPage: 2,
            gap: '.7rem',
        },
        768: {
            perPage: 1,
            gap: '.7rem',
        },
    },
});

splide.mount();


document.getElementById('login').addEventListener('click', ()=>{
    window.location.href = '../pages/login.html'
})
document.getElementById('login-btn').addEventListener('submit', ()=>{
    // window.location.href = 'https://www.google.com/'
    alert('hello')
})