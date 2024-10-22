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

// ------------------------------------------------------------------------------------------------- 

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
        1400: {
            perPage: 3,
            gap: '.7rem'
        },
        850: {
            perPage: 2,
            gap: '.7rem'
        },
        650: {
            perPage: 1,
            gap: '.7rem',
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


loginRedirect = () => {
    window.location.href = '../pages/login.html'
}

// -------------------------------------------------------------------------------------------------

// code for asynchronous clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById(
        "clock"
    ).textContent = `${hours}:${minutes}:${seconds}`;
}

async function startClock() {
    while (true) {
        updateClock();
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

startClock();



function handleSearch(e){
    e.preventDefault()
    window.location.href = '../pages/login.html'
}

document.querySelector('.matrimony form').onsubmit = handleSearch