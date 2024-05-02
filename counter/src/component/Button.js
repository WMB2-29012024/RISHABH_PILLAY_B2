const Button = (props)=>{

    const { count, setCount } = props;

    const countDecrease = ()=>{
        setCount((count)=>count!==0? count-1: 0)
    }
    const countIncrease = ()=>{
        setCount((count)=>count+1)
    }

    

    return(
        <div>
            <button
            onClick={countDecrease}
            >-</button>
            <button
            onClick={countIncrease}
            >+</button>
        </div>
    )


}

export default Button;