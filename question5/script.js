const fileFormElem = document.querySelector('#file_form');
const resultElem = document.querySelector('#result');
fileFormElem.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fileInputElem = document.querySelector('#file_input');
    const files = fileInputElem.files;
    
    const fileArr = [];

    for(const file of files){

        fileArr.push(file)

    }
    console.log(fileArr)

    fileArr.forEach(file => {

        const clutter = `
        <li>
        <p>Name:${file.name}</p>
        <p>Size: ${(file.size/(10 ** 6)).toFixed(2)} MB</p>
        <p>type:${file.type}</p></li>
        `
        resultElem.innerHTML += clutter
        
    });

});
