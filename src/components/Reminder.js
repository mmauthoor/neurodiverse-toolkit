import { useState, useEffect } from "react";
import { format, parseISO, getUnixTime } from 'date-fns';
import Timer from './Timer';
import "./Reminder.css"

function Reminder( { reminder, now } ) {

    const [timerStyle, setTimerStyle] = useState("");
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        let timeFromEvent = getUnixTime(parseISO(reminder.dateTime)) - getUnixTime(now);
        if (timeFromEvent < 86400) {
            setTimerStyle("event-soonest");
        } else if (timeFromEvent < 259200) {
            setTimerStyle("event-sooner");
        } else if (timeFromEvent < 432000) {
            setTimerStyle("event-soon");
        }
    }, [currentTime])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [currentTime]);


    return (
        <div className={`${timerStyle} reminder-outer-div`}>
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