import { useState, useEffect } from "react";
import { format, parseISO, getUnixTime } from 'date-fns';


import "./Pinboard.css"
import Timer from "./Timer";

function Pinboard({ pinnedNotes, setPinnedNotes, pinnedReminders, setPinnedReminders }) {

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        const initialValue = JSON.parse(savedNotes);
        return initialValue || [];
    });

    const [reminders, setReminders] = useState(() => {
        const savedReminders = localStorage.getItem("reminders");
        const initialValue = JSON.parse(savedReminders);
        return initialValue || []; 
    });

    const [now, setNow] = useState(Date.now());


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));

        let pinnedNotes = notes.filter(note => note.pinned === true);
        setPinnedNotes(pinnedNotes);
    }, [notes]);

    useEffect(() => {
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [pinnedNotes])

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders));

        let pinnedReminders = reminders.filter(rem => rem.pinned === true);
        setPinnedReminders(pinnedReminders);
    }, [reminders])

    useEffect(() => {
        localStorage.setItem("pinnedReminders", JSON.stringify(pinnedReminders));
    }, [pinnedReminders])


    const handleNoteUnpin = (targetNote) => {
        let newNotes = notes.map(item => 
            item.content === targetNote.content 
            ? {...item, pinned: false} 
            : item 
        )
        setNotes(newNotes);
    }

    const handleRemUnpin = (targetRem) => {
        let newRems = reminders.map(item => 
            item.task === targetRem.task 
            ? {...item, pinned: false} 
            : item
        )
        setReminders(newRems);
    }

    return (
        <section>
            <div className="pinboard-container">
                <div className="pinned-notes">
                    { pinnedNotes.map((note, idx) => 
                    
                        <div key={idx} className="notes">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <button onClick={() => handleNoteUnpin(note)}>Unpin</button>
                        </div>
                    )}
                </div>

                <div className="pinned-reminders">
                    { pinnedReminders.map((reminder, idx) => 
                        <div key={idx} className="reminders">
                            <h3>{reminder.task}</h3>
                            <p>
                                {format(parseISO(reminder.dateTime), "HH:mm EEEE dd MMM yyyy")}
                            </p>
                            
                            <Timer now={now} eventTime={reminder.dateTime}/>
                            <button onClick={() => handleRemUnpin(reminder)}>Unpin</button>
                            
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
    
}

export default Pinboard

