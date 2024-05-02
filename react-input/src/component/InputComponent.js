import { useState } from "react";

const  InputComponent = (props)=>{

   const{inputValue , setInputValue} = props

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
      };

    return(
        <div>
            <input 
             onChange={handleInputValue}
             value={inputValue}           
            type="text" />
        </div>
    )

}

export default InputComponent;

