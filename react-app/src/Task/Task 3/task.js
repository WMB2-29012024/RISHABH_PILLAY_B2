import InputType from "./component/InputType";
function Task() {
  return (
    <div
      className="Task">
      <InputType
        Placeholder={'name'}
        Id={'name'}
        Label={'enter name'}
        Type={'text'}
      />
       <InputType
        Placeholder={'name'}
        Id={'name'}
        Label={'enter number'}
        Type={'number'}
      />
      <InputType
        Placeholder={'name'}
        Id={'name'}
        Label={'enter number'}
        Type={'number'}
      />
    </div>
  );
}

export default Task;