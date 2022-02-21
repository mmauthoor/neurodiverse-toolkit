

function ToDoDeleteBtn({ item, handleDeleteItem }) {

    return (
        <button className="delete-todo-btn" onClick={() => handleDeleteItem(item)} >-</button>
    )
}

export default ToDoDeleteBtn;