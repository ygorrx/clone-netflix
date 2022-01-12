$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('a[href^="#"')

    function scrollTo(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
}

linksInternos.forEach((item) =>{
    item.addEventListener('click', scrollTo)
})
}

initScrollSuave();