const URL = 'https://jsonplaceholder.typicode.com/todos'

fetch(URL).then((e)=> e.json())
.then((e)=>console.log(e))
.catch((error)=>console.log(error))