import Card from "./component/card";

function Task() {
  const componentArr = [1,2,3,4,5,6,7,8]
  return (
    <div className="Task">
      {
        componentArr.map((e)=>{
         return <Card key={e}
         index={e}
         />
        })

      }
    </div>
  );
}

export default Task;
