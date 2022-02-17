import { useState, useEffect } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';


function Remind() {

    const [remTask, setRemTask] = useState("");
    const [remDateTime, setRemDateTime] = useState(new Date());
    const [reminders, setReminders] = useState([]);

    // if a reminder task is coming up, would be automatically added to the pinned items usestate 

    const handleTask = (event) => {
        setRemTask(event.target.value);
    }

    const handleDateTime = (newRemDateTime) => {
        setRemDateTime(newRemDateTime);
    }

    const createReminder = (event) => {
        event.preventDefault();
        setReminders(prevState => (
            [...prevState, { 
                task: remTask, 
                dateTime: remDateTime
            }]
        ))
    }

    useEffect(() => {
        reminders.forEach(reminder => {
            localStorage.setItem(`${reminder.task}`, JSON.stringify(reminder.dateTime))

        })
    })

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
                        <p>{format(reminder.dateTime, "HH:mm dd MMM yyyy")}</p>
                        {/* ideally would have some visual indicator of how near time is */}
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )}
            </section>
        </>

        // content area  includes view current reminders

    )
}

export default Remind