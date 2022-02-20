
import "./ReminderIcon.css"
import { FcAlarmClock } from 'react-icons/fc';



export default function ReminderIcon( {text} ) {

    return (
        <div className="reminder-icon icon">
            {text === "none" 
                ? 
                    <FcAlarmClock /> 
                : 
                <>
                    <FcAlarmClock />
                    <h2>Remind</h2>
                </>
            } 
        </div>
    )
}