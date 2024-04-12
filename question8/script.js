// fetch('https://jsonplaceholder.typicode.com/posts?userId=2').then((e)=>e.json()).then((e)=>console.log(e))

//  fetch('https://jsonplaceholder.typicode.com/comments?postId=11').then((e)=>e.json()).then((e)=>console.log(e))

const chooseUserElem = document.querySelector('#choose_user');







chooseUserElem.addEventListener('change', (e) => {

    const userID = e.target.value;
    console.log(userID)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
        .then((res) => res.json())
        .then((res) => {
            const userPostElem = document.querySelector('.user_post');
            const clutter = `
            <p><b>Title</b>: ${res[0].title} </p>
            <p><b>Body</b>: ${res[0].body}</p>`;
            userPostElem.innerHTML = clutter;
            console.log(res[0]);
            return res[0];
        })
        .then((res) => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${res.id}`))
        .then((res) => res.json())
        .then((res) => {
            const userCommentsElem = document.querySelector('.user_comments');
            const clutter = `<p><b>Comments:</b></p>`;
            userCommentsElem.innerHTML = clutter;
            res.forEach(data => {
                const clutter =
                    `<li>
                <p><b>Email:</b> ${data.email}</p>
                <p>~ ${data.body}</p>
                </li>`;
                userCommentsElem.innerHTML += clutter;
                console.log(data);
            });
        })

});