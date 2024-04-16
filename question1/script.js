const URL = 'https://jsonplaceholder.typicode.com/posts';

const nextButtonElem = document.querySelector('#next_button');
const postContainerElem = document.querySelector('#post-container');

let postIndex = 1;
let debounceTimer;

const renderFunc = (data) => {
    const clutter = `
    <p>Post ID: ${data.id} </p>
    <p>Post Title: ${data.title} </p>
    <p>Post Body: ${data.body} </p>`;

    postContainerElem.innerHTML = clutter;
};

const fetchfunc = async () => {
    const fetchData = await fetch(`${URL}/${postIndex}`);
    const jsonData = await fetchData.json();
    // console.log(jsonData);
    renderFunc(jsonData);
};

nextButtonElem.addEventListener('click', () => {
    postIndex++;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        fetchfunc();
    }, 500);
});

fetchfunc();