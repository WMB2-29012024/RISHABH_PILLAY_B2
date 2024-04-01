
const formElem = document.getElementById('form');
const inputNameElem = document.getElementById('input_name');
const nameHolderElem = document.getElementById('name_holder');

formElem.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const clutter = document.createElement('h2');
    clutter.innerHTML = `Hi: ${inputNameElem.value}`;
    nameHolderElem.appendChild(clutter);
});

