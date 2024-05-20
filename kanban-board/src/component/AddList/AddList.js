

function AddList(props) {

    const { list, setList } = props

    const AddListHandler = () => {
        list.push(Math.floor(Math.random() * 1000))
        setList([...list])
    }

    return (
        <div className="App">
            <button
                onClick={AddListHandler}
            >+</button>
        </div>
    );
}

export default AddList;