import '../../sass/fibonacci/main.scss';
window.onload = startEvents;

function startEvents() {
    const plusIcon = document.getElementsByClassName('icon-plus')[0];
    ['mouseover', 'mouseleave'].forEach(evt => plusIcon.addEventListener(evt, reveal));
    plusIcon.addEventListener('click',fadeOut);
}

function reveal() { 
    const img = document.getElementsByClassName('img-grid');
    img[0].classList.toggle('hidden');
    img[1].classList.toggle('hidden');
}

function fadeOut() {
    const sections = Array.from(document.getElementsByClassName('container')[0].children);
    let i = 0;
    sections.forEach(element => {
        progressiveFade(element,i);
        i++;
    });
    console.log(sections);
}

function progressiveFade(element, i) {
    element.classList.add('fade-'+i);
}
