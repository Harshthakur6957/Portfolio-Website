// toggle icon navbar

//scroll sectionS

window.onscroll = () => {
    
    //sticky header
let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}