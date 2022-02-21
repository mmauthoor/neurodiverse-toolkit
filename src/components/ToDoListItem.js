import { useState } from "react";


function ToDoListItem({ item, list, setList }) {

    const [crossedOut, setCrossedOut] = useState(false)

    const handleDeleteItem = (targetItem) => {
        setList(list.filter(item => item.id !== targetItem.id));
    }

    const toggleCrossedOut = (item) => {
        crossedOut === false ? setCrossedOut(true) : setCrossedOut(false)
    }


    return (
        <>
            <li 
                className={ `${crossedOut ? "crossed-out" : "" } todo-list-li`} 
                onClick={() => toggleCrossedOut(item)} 
                key={item.content}>
                    {item.content}
            </li>
            <button className="delete-todo-btn" onClick={() => handleDeleteItem(item)} >-</button>
        </>
    )
}

export default ToDoListItem;