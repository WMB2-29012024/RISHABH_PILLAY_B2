
function InputType(props) {

  const { Placeholder, Id, Type, Label } = props


  return (
    <div className="InputType">
      <label htmlFor="{Id}">{Label}</label>
      <input
        placeholder={Placeholder}
        id={Id}
        type={Type}
      />

    </div>
  );
}

export default InputType;