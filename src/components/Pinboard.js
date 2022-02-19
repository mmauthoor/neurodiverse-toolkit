import { useState, useEffect } from "react";
import { format, parseISO, getUnixTime } from 'date-fns';


import "./Pinboard.css"
import Reminder from "./Reminder";

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
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, []);


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));

        let pinnedNotes = notes.filter(note => note.pinned === true);
        setPinnedNotes(pinnedNotes);
    }, [notes]);

    useEffect(() => {
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [pinnedNotes])

    useEffect(() => {
        reminders.forEach(reminder => {
            let timeFromEvent = getUnixTime(parseISO(reminder.dateTime)) - getUnixTime(now)
        
            if (timeFromEvent <= reminder.timeSpanFromSetting * 0.1 && reminder.pinned === false) {

                let newRems = reminders.map(rem => 
                    rem.id === reminder.id 
                    ? {...rem, pinned: true} 
                    : rem
                )
                setReminders(newRems);
            }
        })
    }, [now])

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders));

        let pinnedReminders = reminders.filter(rem => rem.pinned === true);
        setPinnedReminders(pinnedReminders);
    }, [reminders])

    useEffect(() => {
        localStorage.setItem("pinnedReminders", JSON.stringify(pinnedReminders));
    }, [pinnedReminders])


    const handleNoteUnpin = (targetNote) => {
        let newNotes = notes.map(note => 
            note.id === targetNote.id 
            ? {...note, pinned: false} 
            : note 
        )
        setNotes(newNotes);
    }

    const handleRemUnpin = (targetRem) => {
        let newRems = reminders.map(rem => 
            rem.id === targetRem.id 
            ? {...rem, pinned: false} 
            : rem
        )
        setReminders(newRems);
    }

    return (
        <section>
            <div className="pinboard-container">
                <div className="pinned-notes">
                    { pinnedNotes.map(note => 
                    
                        <div key={note.id} className="notes">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <button onClick={() => handleNoteUnpin(note)}>Unpin</button>
                        </div>
                    )}
                </div>

                <div className="pinned-reminders">
                    { pinnedReminders.map(pinnedRemObj => 
                        <>
                            <Reminder reminder={pinnedRemObj} now={now}/>
                            <button onClick={() => handleRemUnpin(pinnedRemObj)}>Unpin</button>
                        </>
                    )}
                </div>

            </div>
        </section>
    )
    
}

export default Pinboard;

