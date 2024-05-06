function Button() {
    const AlertFunc = ()=>{

        alert('mouse button click')

    }
    const AlertFuncR = ()=>{

        alert('mouse right button click')

    }
    return (
        
            
            
                <button onClick = {AlertFunc} onContextMenu = {AlertFuncR}></button>
              
        
    );
  }
  export default Button;