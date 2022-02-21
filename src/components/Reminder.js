import { format, parseISO } from 'date-fns';
import Timer from './Timer';
import "./Reminder.css"

function Reminder( { reminder, now } ) {

    return (
        <div className="reminder-outer-div">
            <div className="reminder-content">
                <h3>{reminder.task}</h3>
                <p className="rem-datetime-p">
                    {format(parseISO(reminder.dateTime), "h:mm bbbb")}
                </p>
                <p className="rem-datetime-p">
                    {format(parseISO(reminder.dateTime), "EEEE dd MMMM yyyy")} 
                </p>
                
                <Timer now={now} eventTime={reminder.dateTime}/>            
            </div>
        </div>
    )

}

export default Reminder;