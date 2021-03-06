import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


import SubNav from "./SubNav";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import "./ToDoPage.css"

function ToDoPage({ crossedToDos, setCrossedToDos }) {

    const [listItem, setListItem] = useState("");
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("todoList");
        const initialValue = JSON.parse(savedList);
        return initialValue || [];
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(list)); 
        
        let newCrossedToDos = list.filter(item => item.crossedOut === true);
        setCrossedToDos(newCrossedToDos);
    }, [list]);

    useEffect(() => {
        localStorage.setItem("crossedToDos", JSON.stringify(crossedToDos));
    }, [crossedToDos])
 

     // const handleEditNote = (targetNote) => {
    //     setIsEditing(true);
    //     setCurrentNote(targetNote); 
    // }

    // const handleEditNoteSubmit = (event) => {
    //     event.preventDefault();

    //     const updatedNotes = notes.map(note => note.id === currentNote.id ? currentNote : note);
    //     setIsEditing(false);
    //     setNotes(updatedNotes);
    // }

    // const handleEditTitle = (event) => {
    //     setCurrentNote({...currentNote, title: event.target.value});
    // }


    const handleListItem = (event) => {
        setListItem(event.target.value);
    }

    const handleCreateListItem = (event) => {
        event.preventDefault();
        
        setList(prevState => {
            const newState = [...prevState, {
                content: listItem,
                id: uuidv4(), 
                crossedOut: false
            }];
            return newState;
        });
    }

    const handleCrossOut = (targetItem) => {
        let newList = list.map(item => 
            item.id === targetItem.id 
            ? {...item, crossedOut: true} 
            : item
        )
        setList(newList);
    }

    const handleUncross = (targetItem) => {
        let newList = list.map(item => 
            item.id === targetItem.id 
            ? {...item, crossedOut: false} 
            : item 
        )
        setList(newList);
    }
   

    return (
        <>
            <SubNav name={"To do"} compStyle={"todo-nav"} />
            <div className="todo-container">
                <ToDoList 
                    list={list} 
                    setList={setList} 
                    handleCrossOut={handleCrossOut} 
                    handleUncross={handleUncross}
                />

                { isEditing 
                    ? 
                        <form className="edit-todo-form">
                            <h2>Edit to do</h2>
                            <label htmlFor="editItem">Task</label>
                            <input
                                name="editItem"
                                type="text"
                                // onChange={handleEditItem}
                            />
                        </form>
                
                    :
                    <form className="new-todo-form">
                        <h2>Add to do item</h2>
                        <label htmlFor="">Task</label> 
                        <input 
                            onChange={handleListItem} 
                            type="text" 
                            name="listItem" 
                            // value={val1}
                        />
                        <button className="add-todo-btn" onClick={handleCreateListItem}>+</button>
                    </form>
                }
               
            </div>
            <Footer />
        </>

    )
}

export default ToDoPage;