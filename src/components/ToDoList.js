import { useState } from "react";
import "./ToDoList.css";
import ToDoListItem from "./ToDoListItem";



function ToDoList( {list, setList} ) {

    return (
        <section className="list">
            <h2>To do</h2>
                { list.length > 0 
                    ?
                        <ul className="todo-list-ul">
                            {list.map(item => 
                                <div className="list-item-div">
                                    <ToDoListItem item={item} list={list} setList={setList}/>
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