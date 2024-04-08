const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchButtonElem = document.querySelector('#fetch_button');
const fetchButtonTitelElem = document.querySelector('#fetch_button_titel');

const resultElem = document.querySelector('#result');
const loaderContainerElem = document.querySelector('.loader-container');
const noDataElem = document.querySelector('#no_data');
const dataListElem = document.querySelector('#data_list');
const dataLengthElem = document.querySelector('#data_length');

let jsonData;

resultElem.textContent = 'No Data';

const fetchFunc = async (URL) => {
    try {
        dataListElem.innerHTML = '';
        resultElem.textContent = '';
        dataLengthElem.innerHTML = '';
        fetchButtonTitelElem.style.display = 'none';
        loaderContainerElem.style.display = 'initial';
        const fetchData = await fetch(URL);
        jsonData = await fetchData.json();
        loaderContainerElem.style.display = 'none';
        fetchButtonTitelElem.innerHTML = 'Get Data again'
        fetchButtonTitelElem.style.display = 'initial';

        console.log(jsonData);
        resultElem.textContent = 'Data fetched';
        renderDataList(jsonData); 
    } catch (error) {
        console.error(error);
        dataListElem.innerHTML = '';
        loaderContainerElem.style.display = 'none';
        fetchButtonTitelElem.style.display = 'initial';
        resultElem.textContent = 'Failed to fetch Data';
    }
};

const renderDataList = (dataList) => {
    dataListElem.innerHTML = '';

    dataList.forEach(data => {        
        const clutter = `<li>${data.title}</li>`;
        dataListElem.innerHTML += clutter;
    });
    
    dataLengthElem.innerHTML = `Data Length: ${dataList.length}`;
};

fetchButtonElem.addEventListener('click', (e) => {
    fetchFunc(URL);
});
