const inputElem = document.querySelector('#input');
const inputValueElem = document.querySelector('#input_value');

inputElem.addEventListener('keyup' , (e)=>{

    const currentValur = e.target.value;
    inputValueElem.innerHTML = currentValur
})
