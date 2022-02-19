import { useState, useEffect } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import { format, parseISO, getUnixTime } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';


import Timer from "./Timer";


function Reminder({ pinnedReminders, setPinnedReminders }) {

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
        // header/footer with navbar

        <>  
        {/* ideally make these components themselves */}
            <section className="new-reminder-form">  
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
                        inputFormat="EEEE dd/MM/yyyy HH:mm"
                        value={remDateTime}
                        onChange={handleDateTime}
                        disablePast
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <input 
                    type="checkbox" 
                    onChange={handlePinned}
                    name="pinned"
                    value="reminder"
                />
                <label htmlFor="pinned">Pin this reminder?</label>
                <button onClick={createReminder}>Create reminder!</button>
            </section> 

            <section className="current-reminders">  
                {/*ideally reminder box would be own component as well and wouldn't have index as key  */}
                {reminders.map((reminder) => 
                
                    <div key={reminder.id} className="reminder">
                        <h3>{reminder.task}</h3>
                        <p>
                            {format(parseISO(reminder.dateTime), "h:mm bbbb")}
                        </p>
                        <p>
                            {format(parseISO(reminder.dateTime), "EEEE dd MMMM yyyy")}
                        </p>

                        <Timer now={now} eventTime={reminder.dateTime}/>
                        <button onClick={() => editReminder(reminder)}>Edit</button>
                        <button onClick={() => deleteReminder(reminder)}>Delete</button>
                    </div>
                )}
            </section>
        </>

    )
}

export default Reminder;