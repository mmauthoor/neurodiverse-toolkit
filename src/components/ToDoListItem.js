import { useState } from "react";
import ToDoDeleteBtn from "./ToDoDeleteBtn";


function ToDoListItem({ item, list, setList }) {

    const [crossedOut, setCrossedOut] = useState(false)

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
        </>
    )
}

export default ToDoListItem;