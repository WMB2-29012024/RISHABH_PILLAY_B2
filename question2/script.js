const addFormElem = document.querySelector('#add_form')

addFormElem.addEventListener('submit', (e)=>{
    e.preventDefault();   

    const num1 = parseInt(document.querySelector('#num_1').value)
    const num2 = parseInt(document.querySelector('#num_2').value)

    const resultElem = document.querySelector('#result');
    const sum = num1+num2
    resultElem.innerText = sum

})