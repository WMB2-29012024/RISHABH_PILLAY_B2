const URL = 'https://jsonplaceholder.typicode.com/todos';

const fetchFunc = async (URL) => {

    const fetchData = await fetch(URL);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    return jsonData

};

console.log(fetchFunc(URL))


