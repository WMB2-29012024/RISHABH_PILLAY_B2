

function Button(props) {
    const{clickFunc} = props
    
    return (
      <button onClick ={clickFunc} >cleck me</button>
    );
  }
  
  export default Button;
  