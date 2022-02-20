import { useState, useEffect } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import { format, parseISO, getUnixTime } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { MdModeEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

import SubNav from "./SubNav";
import Reminder from "./Reminder";
import Footer from "./Footer";
import "./ReminderPage.css"


function ReminderPage({ pinnedReminders, setPinnedReminders }) {

    const [remTask, setRemTask] = useState("");
    const [remDateTime, setRemDateTime] = useState(new Date());
    const [now, setNow] = useState(Date.now());
    const [isPinned, setIsPinned] = useState(false);

    // could have as regular function and call to get initial state
    const [reminders, setReminders] = useState(() => {
       const savedReminders = localStorage.getItem("reminders");
       const initialValue = JSON.parse(savedReminders);
       return initialValue || []; 
    });
     
    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders));

        let pinnedReminders = reminders.filter(rem => rem.pinned === true);
        setPinnedReminders(pinnedReminders);

    }, [reminders]);

    useEffect(() => {
        localStorage.setItem("pinnedReminders", JSON.stringify(pinnedReminders));
    }, [pinnedReminders])


    // research this effect hook more 
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, []);

   
    const handleTask = (event) => {
        setRemTask(event.target.value);
    }

    const handleDateTime = (newRemDateTime) => {
        setRemDateTime(newRemDateTime);
    }

    const createReminder = (event) => {
        event.preventDefault();
        
        setReminders(prevState => {
            const dateString = JSON.stringify(remDateTime).replaceAll('"', "");
            const timeExpanse = getUnixTime(remDateTime) - getUnixTime(new Date());

            const newState = [...prevState, {
                task: remTask, 
                dateTime: dateString, 
                id: uuidv4(),
                pinned: isPinned,
                timeSpanFromSetting: timeExpanse
            }];
            return newState;
        })
    }

    const editReminder = (targetReminder) => {
        // render interface to set new reminder
        // set reminders 
    }

    const deleteReminder = (targetReminder) => {
        setReminders(reminders.filter(reminder => reminder !== targetReminder))
    }

    const handlePinned = (event) => {
        setIsPinned(event.target.checked);
    }

    // currently not doing anything until we have pin button for pre-existing reminders
    const handlePinReminder = (targetReminder) => {
            let newRems = reminders.map(rem => 
                rem.id === targetReminder.id 
                ? {...rem, pinned: true} 
                : rem
            )
            setReminders(newRems);
    }

    return (
        <>
            <SubNav name={"Reminders"} compStyle={"reminder-nav"} />
            <div className="reminder-container">  
            {/* ideally make these components themselves */}

                <section className="current-reminders">
                    <h2>Current reminders</h2>  
                    {reminders.map(reminderObj => 
                        <div key={reminderObj.id} className="single-reminder-container">
                            <button className="edit-btn" onClick={() => editReminder(reminderObj)}><MdModeEdit /></button>
                            <Reminder reminder={reminderObj} now={now}/>
                            <button className="delete-btn" onClick={() => deleteReminder(reminderObj)}><AiFillDelete /></button>                   
                        </div>
                    )}
                </section>
                <section className="new-reminder-form">
                    <form >  
                        <h2>New reminder</h2>
                        <label htmlFor="">What's this reminder for?</label> 
                        <input 
                            onChange={handleTask} 
                            type="text" 
                            name="task" 
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date and Time picker"
                                name="dateTime"
                                inputFormat="EEEE dd MMMM yyyy h:mm bbb"
                                value={remDateTime}
                                onChange={handleDateTime}
                                disablePast
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <div className="pin-checkbox-container">
                            <input 
                                type="checkbox" 
                                onChange={handlePinned}
                                name="pinned"
                                value="reminder"
                                className="checkbox"
                            />
                            <label htmlFor="pinned">Pin reminder?</label>
                        </div>
                        <button onClick={createReminder}>Create</button>
                    </form> 
                </section>
            </div>
            <Footer />
        </>

    )
}

export default ReminderPage;