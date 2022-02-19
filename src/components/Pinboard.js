import { useState, useEffect } from "react";

import "./Pinboard.css"

function Pinboard({ pinnedNotes, setPinnedNotes }) {

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        const initialValue = JSON.parse(savedNotes);
        return initialValue || [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));

        let pinnedNotes = notes.filter(note => note.pinned === true);
        setPinnedNotes(pinnedNotes);
    }, [notes]);

    useEffect(() => {
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [pinnedNotes])

    const handleNoteUnpin = (note) => {
        
        let newNotes = notes.map(item => 
            item.content === note.content 
            ? {...item, pinned: false} 
            : item 
        )
        setNotes(newNotes);
    }

    return (
        <section>
            <div className="pinboard-container">
                <div className="pinned-notes">
                    { pinnedNotes.map((note, idx) => 
                    
                        <div key={idx} className="notes">
                            <h2>{note.title}</h2>
                            <p>{note.content}</p>
                            <button onClick={() => handleNoteUnpin(note)}>Unpin</button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
    
}

export default Pinboard