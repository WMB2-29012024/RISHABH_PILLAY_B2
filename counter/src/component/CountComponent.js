
const CountComponent = (props)=>{

    const { count, setCount } = props;

    return(
        <div>
           <h1>{count}</h1>
        </div>
    )


}

export default CountComponent;