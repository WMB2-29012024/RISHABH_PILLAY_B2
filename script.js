const signUpFormElem = document.getElementById('sign_up_form');

signUpFormElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = event.target.querySelector('#user_name').value;
    const userEmail = event.target.querySelector('#user_email').value;
    const userPassword = event.target.querySelector('#user_password').value;
    const userConfirmPassword = event.target.querySelector('#user_confirm_password').value;

    if (userPassword === userConfirmPassword) {

        window.alert('Form submitted');

    } else {

        const errorMessageElem = document.querySelector('#error_message');
        errorMessageElem.innerHTML = 'Please enter same password';     

    }



});
