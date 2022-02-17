import { useState, useEffect } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import { format, parseISO } from 'date-fns';


function Remind() {

    const [remTask, setRemTask] = useState("");
    const [remDateTime, setRemDateTime] = useState(new Date());

    // could have as regular function and call to get initial state
    const [reminders, setReminders] = useState(() => {
       const savedReminders = localStorage.getItem("reminders");
       const initialValue = JSON.parse(savedReminders);
       return initialValue || []; 
    });

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
            const newState = [...prevState, {task: remTask, dateTime: dateString}];
            return newState;
        })
    }

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders))
    }, [reminders]);

    const editReminder = (targetReminder) => {
        // render interface to set new reminder
        // set reminders 
    }

    const deleteReminder = (targetReminder) => {
        setReminders(reminders.filter(reminder => reminder !== targetReminder))
        // filter items to remove the reminder and reset the state and stringify for local storage
    }

    return (
        // header/footer with navbar

        <>  
        {/* ideally make these components themselves */}
            <section className="new-reminder-form">  
                <h2>New reminder</h2>
                <label htmlFor="">What's this reminder for?</label> 
                {/* onchange would update reminder state name */}
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
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <button onClick={createReminder}>Create reminder!</button>
            </section> 
            <section className="current-reminders">  
                {/*ideally reminder box would be own component as well and wouldn't have index as key  */}

                {reminders.map((reminder, idx) => 
                
                    <div key={idx} className="reminder">
                        <h3>{reminder.task}</h3>
                        <p>
                            {format(parseISO(reminder.dateTime), "HH:mm EEEE dd MMM yyyy")}
                        </p>

                        {/* ideally would have some visual indicator of how near time is */}
                        <button onClick={() => editReminder(reminder)}>Edit</button>
                        <button onClick={() => deleteReminder(reminder)}>Delete</button>
                    </div>
                )}
            </section>
        </>

        // content area  includes view current reminders

    )
}

export default Remind