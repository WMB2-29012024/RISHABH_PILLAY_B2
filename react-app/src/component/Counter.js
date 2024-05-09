
function Counter(props) {

    const { toggel ,setToggel, setSign} = props

    const customeVar = 100;

   const checkHandeler = ()=>{
    setToggel(!toggel)
   }
   const clickHandler = ()=>{
    console.log("button click");

   }

  return (
    <div className="Counter">  
        <button
        onClick ={()=>{
            checkHandeler()
            setSign('+')
        
        }}
        >+</button>
        <button
        onClick ={()=>{
            checkHandeler()
            setSign('-')        
        }}
        >-</button>   
        <button onClick={clickHandler} >click</button>   
    </div>
  );
};

export default Counter;
