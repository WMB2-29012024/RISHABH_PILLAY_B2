import Button from "./component/button";

function Task() {
    const clickFunc = () => {

        alert("button click")

    }
    return (
        <div>

            <Button
                clickFunc={clickFunc}
            />

        </div>
    );
}

export default Task;
