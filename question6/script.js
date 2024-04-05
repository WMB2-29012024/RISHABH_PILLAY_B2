const searchFruits = document.querySelector('#search_fruits');

const fruitsArr = ['Apple','Banana','Atemoya','Papaya','Peach','Noni','Pomegranate','Pineapple'];

searchFruits.addEventListener( 'keyup',(e)=>{

})


    searchFruits.addEventListener("keyup", (e) => {
        const searchInputValue = e.target.value.toLowerCase();
        const filterFruits = fruitsArr.filter((elem) => elem.toLowerCase().startsWith(searchInputValue));
        renderFruitList(filterFruits);
    });




const renderFruitList = (array)=>{
    const fruitListElem = document.querySelector('#fruit_list')
    fruitList.innerHTML = '';

    array.forEach(fruit => {
        
        const clutter = `<li>${fruit}</li>`
        fruitListElem.innerHTML += clutter
    });


}
renderFruitList(fruitsArr)
