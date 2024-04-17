const addComment = () => {

    const commentBoxElem = document.querySelector('#commentBox');
    if (commentBoxElem.value) {

        const commentBoxDate = new Date().toLocaleString()
        const commentData = {
            date: commentBoxDate,
            text: commentBoxElem.value
        }
        const saveComment = JSON.parse(localStorage.getItem('comment') || "[]");
        saveComment.push(commentData);
        console.log(saveComment)
        localStorage.setItem('comment', JSON.stringify(saveComment))
        // console.log(commentData)
        commentBoxElem.value = '';
    } else {
        alert('Please enter something to add')
    }
};


export { addComment }