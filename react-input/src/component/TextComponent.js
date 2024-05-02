import { useState } from "react";
const TextComponent = (props) => {

    const {inputValue, setInputValue} = props
    return (
        <div>
            <p>{inputValue}</p>
        </div>
    )

}
export default TextComponent;