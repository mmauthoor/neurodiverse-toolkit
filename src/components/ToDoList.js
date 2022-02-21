
function ToDoList( {list, setList} ) {

    const handleDeleteItem = (targetItem) => {
        setList(list.filter(item => item.id !== targetItem.id));
    }

    const toggleCrossLine = (event) => {
        const item = event.target;
    }

    

    return (
        <section className="list">
            <h2>To do</h2>
                { list.length > 0 
                    ?
                        <ul>
                            {list.map(item => 
                                <li onClick={toggleCrossLine} key={item.content}>
                                    {item.content}
                                    <button onClick={() => handleDeleteItem(item)} className="todo-delete-btn">-</button>
                                </li>
                            )}
                        </ul>
                    :
                        <p>Nothing to do!</p>
                }
            {/* add ability to edit items. strikethrough on click*/}

        </section>
    )
}

export default ToDoList;