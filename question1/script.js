import {startTimer} from "../timer.js"
import {pauseTimer} from "../timer.js"
import {resetTimer} from "../timer.js"


resetTimer


const startButtonElem = document.querySelector('#start_button')
const pauseButtonElem = document.querySelector('#pause_button')
const resetButtonElem = document.querySelector('#reset_button')

startButtonElem.addEventListener('click' , ()=>{
    
    startTimer()

})

pauseButtonElem.addEventListener('click' , ()=>{
    
    pauseTimer()

})

resetButtonElem.addEventListener('click' , ()=>{
    
    resetTimer()

})