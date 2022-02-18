import { useState, useEffect } from "react";


function Notes() {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        const initialValue = JSON.parse(savedNotes);
        return initialValue || [];
    });
    const [val, setVal] = useState();


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    const handleTitle = (event) => {
        setNoteTitle(event.target.value);
    }

    const handleContent = (event) => {
        setNoteContent(event.target.value);
    }

    const createNote = (event) => {
        event.preventDefault();
        
        setNotes(prevState => {
            const newState = [...prevState, {title: noteTitle, content: noteContent}];
            return newState;
        })
        setVal("");
    }

    const editNote = (targetNote) => {
        // render interface to set new reminder
        // set reminders 
    }

    const deleteNote = (targetNote) => {
        setNotes(notes.filter(note => note !== targetNote))
    }


    return (
        <>
            <section className="new-note-form">  
                <h2>New note</h2>
                <label htmlFor="">Note title</label> 
                <input 
                    onChange={handleTitle} 
                    type="text" 
                    name="title" 
                    value={val}
                />
                <label htmlFor="">Content</label>
                <textarea 
                    name="content" 
                    onChange={handleContent}
                    value={val}
                    id="" 
                    cols="30" 
                    rows="10">
                </textarea>

                <button onClick={createNote}>Create note!</button>
            </section> 

            <section className="current-notes">  
                {/*ideally note box would be own component as well and wouldn't have index as key  */}
                {notes.map((note, idx) => 
                
                    <div key={idx} className="note">
                        <h3>{note.title}</h3>
                        <p>
                            {note.content}
                        </p>

                        <button onClick={() => editNote(note)}>Edit</button>
                        <button onClick={() => deleteNote(note)}>Delete</button>
                    </div>
                )}
            </section>
        </>
    )
}

export default Notes;



