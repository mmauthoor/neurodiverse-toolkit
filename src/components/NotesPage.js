import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Note from "./Note";


function NotesPage( {pinnedNotes, setPinnedNotes} ) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [isPinned, setIsPinned] = useState(false);
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        const initialValue = JSON.parse(savedNotes);
        return initialValue || [];
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentNote, setCurrentNote] = useState({});

    // need to figure out how to autoclear inputs after button click

    // const [val1, setVal1] = useState();
    // const [val2, setVal2] = useState();


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));

        let pinnedNotes = notes.filter(note => note.pinned === true);
        setPinnedNotes(pinnedNotes);
     
    }, [notes]);

    useEffect(() => {
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [pinnedNotes])

    const handleTitle = (event) => {
        setNoteTitle(event.target.value);
    }

    const handleContent = (event) => {
        setNoteContent(event.target.value);
    }

    const handlePinned = (event) => {
        setIsPinned(event.target.checked);
    }

    const handleCreateNote = (event) => {
        event.preventDefault();
        
        setNotes(prevState => {
            const newState = [...prevState, {
                title: noteTitle, 
                content: noteContent, 
                id: uuidv4(),
                pinned: isPinned}];
            return newState;
        })
        // setVal1("");
        // setVal2("");

    }

    const handleEditNote = (targetNote) => {
        setIsEditing(true);
        setCurrentNote(targetNote); 
    }

    const handleEditNoteSubmit = (event) => {
        event.preventDefault();

        const updatedNotes = notes.map(note => note.id === currentNote.id ? currentNote : note);
        setIsEditing(false);
        setNotes(updatedNotes);
    }

    const handleEditTitle = (event) => {
        setCurrentNote({...currentNote, title: event.target.value});
    }

    const handleEditContent = (event) => {
        setCurrentNote({...currentNote, content: event.target.value});
    }


    const handleDeleteNote = (targetNote) => {
        setNotes(notes.filter(note => note !== targetNote));
    }

    return (
        <>
        {/* header nav thingy */}
            { isEditing ? 
                <form className="edit-note-form">
                    <h2>Edit note</h2>
                    <label htmlFor="editTitle">Edit title: </label>
                
                    <input
                        name="editTitle"
                        type="text"
                        defaultValue={currentNote.title}
                        onChange={handleEditTitle}
                    />

                    <label htmlFor="editContent">Edit content: </label>
                <textarea
                    name="editContent"
                    type="text"
                    defaultValue={currentNote.content}
                    onChange={handleEditContent}
                >
                    </textarea>

                    <button onClick={handleEditNoteSubmit}>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>

            : 

                <form className="new-note-form">  
                    <h2>New note</h2>
                    <label htmlFor="">Note title</label> 
                    <input 
                        onChange={handleTitle} 
                        type="text" 
                        name="title" 
                        // value={val1}
                    />
                    <label htmlFor="">Content</label>
                    <textarea 
                        name="content" 
                        onChange={handleContent}
                        // value={val2}
                        id="" 
                        cols="30" 
                        rows="10">
                    </textarea>
                    <input 
                        type="checkbox" 
                        onChange={handlePinned}
                        name="pinned"
                        value="note"
                    />
                    <label htmlFor="pinned">Pin this note?</label>
                    <button onClick={handleCreateNote}>Create note!</button>
                </form>    
            }

            <section className="current-notes">  
                {notes.map(noteObj => 

                    <div key={noteObj.id}>
                        <Note note={noteObj}/>
                        <button onClick={() => handleEditNote(noteObj)}>Edit</button>
                        <button onClick={() => handleDeleteNote(noteObj)}>Delete</button>
                    </div>
                )}
            </section>
        </>
    )
}

export default NotesPage;



