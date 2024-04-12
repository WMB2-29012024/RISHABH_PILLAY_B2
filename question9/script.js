const URL = 'https://jsonplaceholder.typicode.com/posts';
const dataListElem = document.querySelector('.data_list');
const dataSearchElem = document.querySelector('#data_search');

let dataArr;

const fetchFunc = async (URL) => {
    const fetchData = await fetch(URL);
    const jsonData = await fetchData.json();
    dataArr = jsonData;
    renderFunc(dataArr);
};

const renderFunc = (arr) => {
    dataListElem.innerHTML = '';
    arr.forEach(data => {
        const clutter = `
            <li>
                <p><b>Title</b>: ${data.title}</p>
                <p><b>Body</b>: ${data.body}</p>
            </li>`;
        dataListElem.innerHTML += clutter;
    });
};

fetchFunc(URL);

const searchFunc = (input, keys) => {

    const inputValue = input.target.value.toLowerCase();
    const filterdata = dataArr.filter((data) => {
        return keys.some((key) => data[key].toLowerCase().includes(inputValue));
    });
    renderFunc(filterdata);
}








// const searchFunc = (input, keys) => {
//     const inputValue = input.target.value;
//     const filterdata = dataArr.filter((data) => {
//         for (const key of keys) {
//             const condition = data[key].toLowerCase().includes(inputValue.toLowerCase());
//             if (condition) {
//                 return true;
//             }
//         }
//         return false;
//     });
//     renderFunc(filterdata);
// };






dataSearchElem.addEventListener('input', (e) => {


    searchFunc(e, ["title", "body"]);
});


// debouncefunc














// dataSearchElem.addEventListener('input', (e) => {
//     searchFunc(e, ["title", "body"]);
// });