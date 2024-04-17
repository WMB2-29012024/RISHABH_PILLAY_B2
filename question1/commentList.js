const showComments = () => {

    const saveComment = JSON.parse(localStorage.getItem('comment') || "[]");
    const commentContainerElem = document.querySelector('#comment-container')
    commentContainerElem.innerHTML = ""
    saveComment.forEach(Comment => {
        const clutter = `<p>~ ${Comment.date} ${Comment.text}</p>`;
        commentContainerElem.innerHTML += clutter;
    });
}

export { showComments }