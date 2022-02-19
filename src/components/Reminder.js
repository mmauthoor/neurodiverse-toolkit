import { format, parseISO } from 'date-fns';
import Timer from './Timer';

function Reminder( { reminder, now } ) {

    return (

        <div className="reminders">
            <h3>{reminder.task}</h3>
            <p>
                {format(parseISO(reminder.dateTime), "h:mm bbbb")}
            </p>
            <p>
                {format(parseISO(reminder.dateTime), "EEEE dd MMMM yyyy")} 
            </p>
            
            <Timer now={now} eventTime={reminder.dateTime}/>            
        </div>
    )

}

export default Reminder;