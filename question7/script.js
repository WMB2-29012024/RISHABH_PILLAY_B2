const screen_mode = document.querySelector('#screen_mode');

screen_mode.addEventListener('change', (e) => {
    e.preventDefault();

    // console.log(e.target.value);

    if (e.target.value === 'dark') { 

        document.querySelector('#main').style.background = '#000';
        document.querySelector('#main p').style.color = '#fff';

    } else {

        document.querySelector('#main').style.background = '#fff';
        document.querySelector('#main p').style.color = '#000';

    }
});
