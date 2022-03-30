import { useState } from "react";
import "./ToDoList.css";
import ToDoListItem from "./ToDoListItem";
import ToDoDeleteBtn from "./ToDoDeleteBtn";


function ToDoList( {list, setList, handleCrossOut, handleUncross } ) {

    const handleDeleteItem = (targetItem) => {
        setList(list.filter(item => item.id !== targetItem.id));
    }

    return (
        <section className="list">
            <h2>To do</h2>
                { list.length > 0 
                    ?
                        <ul className="todo-list-ul">
                            {list.map(item => 
                                <div key={item.id} className="list-item-div">
                                    <ToDoListItem 
                                        item={item} 
                                        handleCrossOut={handleCrossOut} 
                                        handleUncross={handleUncross}
                                    />
                                    <ToDoDeleteBtn item={item} handleDeleteItem={handleDeleteItem}/>
                                </div>
                            )}
                        </ul>
                    :
                        <p>Nothing to do!</p>
                }
        </section>
    )
}

export default ToDoList;