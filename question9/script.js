const URL = 'https://jsonplaceholder.typicode.com/todos';
const getDataButtonElem = document.querySelector('.get_data_button');
const nextButtonElem = document.querySelector('.next_button');
const previousButtonElem = document.querySelector('.previous_button');
const dataListElem = document.querySelector('.data_list');
const loaderContainerElem = document.querySelector('.loader-container')
let startIndex = 0;
let todoDataList;




const renderDataList = () => {
    dataListElem.innerHTML = '';

    todoDataList.forEach(data => {
        const clutter = `<li> ID: ${data.id}, Title: ${data.title} 
        <input type="checkbox" ${data.completed ? 'checked' : ''}>`;
        
        dataListElem.innerHTML += clutter;
    });

    if (startIndex > 0) {
        previousButtonElem.style.display = 'block'; 
    } else {
        previousButtonElem.style.display = 'none'; 
    }

    if (todoDataList.length > 0) {
        nextButtonElem.style.display = 'block'; 
    } else {
        nextButtonElem.style.display = 'none'; 
    }
};


const fetchFunc = async () => {
    try {
        const fetchData = await fetch(`${URL}?_start=${startIndex}&_limit=1`);
        const newData = await fetchData.json();
        return newData;
    } catch (error) {
        console.error(error);
    }
};


getDataButtonElem.addEventListener('click', async () => {
    try {
        dataListElem.innerHTML = '';
        loaderContainerElem.style.display = 'initial'
        startIndex = 0;
        todoDataList = await fetchFunc();
        getDataButtonElem.innerText = "Get Data Again"
        loaderContainerElem.style.display = 'none'

        console.log(todoDataList);

        renderDataList()
    } catch (error) {
        console.error(error);
    }
});

nextButtonElem.addEventListener('click', async () => {
    try {
        if(todoDataList.length>0){}

        startIndex += 1;
        dataListElem.innerHTML = '';
        loaderContainerElem.style.display = 'initial'


        todoDataList = await fetchFunc();
        loaderContainerElem.style.display = 'none'

        console.log(todoDataList);
        renderDataList()

    } catch (error) {
        console.error(error);
    }
});

previousButtonElem.addEventListener('click', async () => {
    try {
        if (startIndex >= 1) {
            
            startIndex -= 1;
            dataListElem.innerHTML = '';
        loaderContainerElem.style.display = 'initial'

            todoDataList = await fetchFunc();
        loaderContainerElem.style.display = 'none'

            console.log(todoDataList);
        renderDataList()

        } else {
            console.log("Already at the beginning.");
        }
    } catch (error) {
        console.error(error);
    }
});
