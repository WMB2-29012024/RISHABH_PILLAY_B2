const URL = 'https://jsonplaceholder.typicode.com/todo';
const fetchButtonElem = document.querySelector('#fetch_button');
const pendingElem = document.querySelector('#pending');
const loaderContainerElem = document.querySelector('.loader-container')
const noDataElem = document.querySelector('#no_data');

const fetchFunc = async (URL) => {
    try {
        pendingElem.textContent = ''
        // noDataElem.style.display = 'none'
        // loaderContainerElem.style.display = 'initial'
        const fetchData = fetch(URL)
        .then(data => data.json(), (err) => console.log('err1', err))
        .then(da => console.log(da));
        // const jsonData = await fetchData.json();
        // loaderContainerElem.style.display = 'none'
        // console.log(jsonData);
        pendingElem.textContent = 'Data fetched';
    } catch (error) {
        console.log({ error });
        // loaderContainerElem.style.display = 'none'
        pendingElem.innerHTML = 'Failed to fetch Data';
    }
};

fetchButtonElem.addEventListener('click', (e) => {
    try {

        fetchFunc(URL);
    } catch (error) {
        console.error(error)
    }
});
