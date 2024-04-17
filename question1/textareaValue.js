const textareaValue = ()=>{

    const commentBoxElem = document.querySelector('#commentBox')
    const correntText = commentBoxElem.value;
    localStorage.setItem('text', correntText )
    const savedCurrentText = JSON.parse(localStorage.getItem('text'));

    console.log(savedCurrentText)

    

};

export { textareaValue }