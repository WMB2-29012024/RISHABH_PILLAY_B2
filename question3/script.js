const fruitSelectElem = document.querySelector('#fruit_select');
const reseltElem = document.querySelector('#reselt');

fruitSelectElem.addEventListener('change' , ()=>{

    reseltElem.innerText = fruitSelectElem.value;

})


