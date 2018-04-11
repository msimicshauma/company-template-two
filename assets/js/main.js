const button = document.querySelector('#btn');
const menu = document.querySelector('.mobile-nav');
let menuSwitch = 0;

button.addEventListener('click', () => {
    if(menuSwitch === 0) {
        menu.style.display = 'block';
        menuSwitch = 1;
    } else {
        menu.style.display = 'none';
        menuSwitch = 0;
    }
});
//ANIMACIJE ZA MENI (mobile i desktop), CURSOR:POINTER
//SREDI POZADINU