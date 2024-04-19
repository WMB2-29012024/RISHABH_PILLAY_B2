const hamburgerElem = document.querySelector('.hamburger');
const asideElem = document.querySelector('aside');
const asideAElems = document.querySelectorAll('aside a');

let click = 0;

hamburgerElem.addEventListener('click', () => {
    if (click === 0) {       
        click = 1;
        hamburgerElem.innerHTML = '✕';
        asideElem.style.width='300px'        
        asideAElems.forEach(elem => {
            elem.style.display = "block";
          });


    } else {
        click = 0;
        hamburgerElem.innerHTML = '☰';
        asideAElems.forEach(elem => {
            elem.style.display = "none";
          });

          asideElem.style.width='0px'
    }
});



