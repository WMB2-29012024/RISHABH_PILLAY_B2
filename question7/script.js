const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchButtonElem = document.querySelector('#fetch_button');
const resultElem = document.querySelector('#result');
const loaderContainerElem = document.querySelector('.loader-container');
const noDataElem = document.querySelector('#no_data');
const dataListElem = document.querySelector('#data_list');
const dataLengthElem = document.querySelector('#data_length');

let jsonData;

resultElem.textContent = 'No Data';

const renderDataList = (dataList) => {
    dataListElem.innerHTML = '';

    dataList.forEach(data => {        
        const clutter = `<li>${data.title}</li>`;
        dataListElem.innerHTML += clutter;
    });
    dataLengthElem.innerHTML = `Data Length: ${dataList.length}`;
};

const fetchFunc = async (URL) => {
    try {
        resultElem.textContent = '';
        loaderContainerElem.style.display = 'initial';
        const fetchData = await fetch(URL);
        jsonData = await fetchData.json();
        loaderContainerElem.style.display = 'none';
        resultElem.textContent = 'Data fetched';
        renderDataList(jsonData);
    } catch (error) {
        console.error(error);
        loaderContainerElem.style.display = 'none';
        resultElem.textContent = 'Failed to fetch Data';
    }
};

fetchButtonElem.addEventListener('click', (e) => {
    fetchFunc(URL);
});
