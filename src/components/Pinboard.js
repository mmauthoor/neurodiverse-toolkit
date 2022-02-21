import { useState, useEffect } from "react";
import { format, parseISO, getUnixTime } from 'date-fns';
import { AiFillPushpin } from 'react-icons/ai';

import "./Pinboard.css"
import Note from "./Note";
import Reminder from "./Reminder";
import ToDoListItem from "./ToDoListItem";

function Pinboard({ pinnedNotes, setPinnedNotes, pinnedReminders, setPinnedReminders }) {

    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("todoList");
        const initialValue = JSON.parse(savedList);
        return initialValue || [];
    });

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
        
            if ((timeFromEvent <= reminder.timeSpanFromSetting * 0.1 || reminder.timeSpanFromSetting < 86400) && reminder.pinned === false) {

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
                <div className="todo-list content">
                    <div className="pinned-todo-list">
                        <h2>To do list</h2>
                        {list.length > 0
                            ?
                                <ul className="todo-list-ul">
                                    {list.map(item => 
                                        <ToDoListItem item={item} list={list} setList={setList}/>
                                    )}
                                </ul>
                        
                            :
                                <p>Nothing to do!</p>
                        }
                    </div>
                </div>

                <div className="pinned-notes content">
                    <h2><AiFillPushpin /> Notes</h2>
                    { pinnedNotes.length > 0 
                        ?
                            <>
                                { pinnedNotes.map(pinnedNoteObj => 
                                    <div key={pinnedNoteObj.id} className="single-note-container">
                                        <Note note={pinnedNoteObj}/>
                                        <button 
                                            className="unpin-btn" 
                                            onClick={() => handleNoteUnpin(pinnedNoteObj)}
                                        >
                                            <p>Unpin</p>
                                            <AiFillPushpin />
                                        </button>
                                    </div>
                                )}
                            </>
                        : 
                            <p>No pinned notes</p>                    
                    }
                   
                </div>

                <div className="pinned-reminders content">
                    <h2><AiFillPushpin /> Reminders</h2>
                    { pinnedReminders.length > 0 
                        ?
                            <>
                                { pinnedReminders.map(pinnedRemObj => 
                                    <div key={pinnedRemObj.id} className="single-reminder-container">
                                        <Reminder reminder={pinnedRemObj} now={now}/>
                                        <button 
                                            className="unpin-btn" 
                                            onClick={() => handleRemUnpin(pinnedRemObj)}
                                        >
                                            <p>Unpin</p>
                                            <AiFillPushpin />
                                        </button>
                                    </div>
                                )} 
                            </>
                        : 
                             <p>You have no pinned reminders</p>
                    }
                    
                </div>

            </div>
        </section>
    )
    
}

export default Pinboard;

