import React from 'react';

const FormComponent = ({ text, setText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(e.target.textInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="textInput" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
