const hamburgerElem = document.querySelector('.hamburger')
const asideElem = document.querySelector('aside')
const asideAElem = document.querySelectorAll('aside a')


let click = 0;

hamburgerElem.addEventListener('click', (e)=>{

    if(click === 0){
        
        asideElem.style.width = "300px";
        // asideAElem.style.display="initial"
        click = 1;
        hamburgerElem.innerHTML = '✕';
    }else{
        asideElem.style.width= "0px";
        // asideAElem.style.display="none"
        // asideElem.style.display="none"
        click = 0
        hamburgerElem.innerHTML = '☰';
    }    

})