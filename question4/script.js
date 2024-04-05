 const radioFormElem = document.getElementById("radio_form");
 const selectedGenderElem = document.getElementById("selected_gender");
 const genderElems = document.querySelectorAll('.gender')

 radioFormElem.addEventListener('submit', (event)=> {
    event.preventDefault()
    let selectedGender;
    genderElems.forEach((e)=>{

        if(e.checked){
            selectedGender = e.value;
        }
    });
       
    selectedGenderElem.innerHTML = `Gender: ${selectedGender}`;
 });