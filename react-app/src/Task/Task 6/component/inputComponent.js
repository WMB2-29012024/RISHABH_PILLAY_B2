function inputComponent() {

    const submitHand = (e)=>{

        console.log(e.target.value)

    }


    return (
        
      <input onChange={submitHand} type="text" />
    );
  }

  export default inputComponent;