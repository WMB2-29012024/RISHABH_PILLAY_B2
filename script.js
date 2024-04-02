const signUpFormElem = document.getElementById('sign_up_form');

signUpFormElem.addEventListener('submit', (event)=>{
    event.preventDefault();
    const userName = event.target.querySelector('#user_name').value;
    const userEmail = event.target.querySelector('#user_email').value;
    console.log(`Full Name: ${userName}`);
    console.log(`Email: ${userEmail}`);
});
