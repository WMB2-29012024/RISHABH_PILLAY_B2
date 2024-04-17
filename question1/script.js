import { addComment } from './commentForm.js'
import { showComments } from './commentList.js'
import { textareaValue } from './textareaValue.js'

const commentBoxFormElem = document.querySelector('#commentBox-form')


commentBoxFormElem.addEventListener('submit', (e) => {
    e.preventDefault()
    addComment()
    showComments()
    // textareaValue()



})
showComments()