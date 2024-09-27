const btnNext = document.getElementById('nextSlide')
const btnPrevious = document.getElementById('previousSlide')
const primary = document.querySelector('.primary')
const imgs = document.querySelector('.imgs')

btnNext.addEventListener('click', controlslide)
btnPrevious.addEventListener('click', controlslide)

const { width: primarywidth } = window.getComputedStyle(primary)
const { width: imgswidth } = window.getComputedStyle(imgs)

let currentSlide = 0;

const slideProps = {
    width: parseInt(primarywidth),
    scroll: 0,
}

function controlslide({ target: { id } }){
    const imgslenght = imgs.children.length;
    switch (id) {
        case 'nextSlide':
            if(slideProps.scroll + slideProps.width < parseInt(imgswidth)){
            slideProps.scroll += slideProps.width;
        }
        if(currentSlide < imgslenght  - 1){
            currentSlide += 1;
        }
        return primary.scrollLeft = slideProps.scroll;

        case 'previousSlide':{
            if(currentSlide > 0){
                currentSlide -= 1;
            }
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            return primary.scrollLeft = slideProps.scroll;
        }
        default:
            break;
    }
}


const btnNext1 = document.getElementById('nextSlide-1')
const btnPrevious1 = document.getElementById('previousSlide-1')
const Slider = document.querySelector('.imgs-slide')
const content = document.querySelector('.content')

btnNext1.addEventListener('click', controlslide1)
btnPrevious1.addEventListener('click', controlslide1)

const { width: Sliderwidth } = window.getComputedStyle(Slider)
const { width: contentwidth } = window.getComputedStyle(content)

let currentSlide1 = 0;

const slideProps1 = {
    width: parseInt(Sliderwidth),
    scroll1: 0,
}

function controlslide1({ target: { id } }){
    const contentlenght = content.children.length;
    switch (id) {
        case 'nextSlide-1':
            if(slideProps1.scroll1 + slideProps1.width < parseInt(contentwidth)){
            slideProps1.scroll1 += slideProps1.width;
        }
        if(currentSlide1 < contentlenght  - 1){
            currentSlide1 += 1;
        }
        return Slider.scrollLeft = slideProps1.scroll1;

        case 'previousSlide-1':{
            if(currentSlide1 > 0){
                currentSlide1 -= 1;
            }
            slideProps1.scroll1 = slideProps1.scroll1 - slideProps1.width < 0 ? 0 : slideProps1.scroll1 - slideProps1.width;
            return Slider.scrollLeft = slideProps1.scroll1;
        }
        default:
            break;
    }
}

// efeitos de animações //

const myObserver = new IntersectionObserver( (entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.title-1')

elements.forEach((element) => myObserver.observe(element))
