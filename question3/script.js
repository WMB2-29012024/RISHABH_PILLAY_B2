const URL = 'https://jsonplaceholder.typicode.com/todos';

const fetchButtonElem = document.querySelector('#fetch_button');
const fetchFunc = async (URL) => {

    const fetchData = await fetch(URL);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    // return jsonData

};

fetchButtonElem.addEventListener('click',(e)=>{
    fetchFunc(URL)

})

