
import "./ReminderIcon.css"
import { FcAlarmClock } from 'react-icons/fc';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench }  from '@fortawesome/free-solid-svg-icons'




export default function ReminderIcon() {

    return (
        <div className="reminder-icon icon">
            
            {/* <FontAwesomeIcon icon="fa-duotone fa-alarm-clock" /> */}
            {/* <FontAwesomeIcon icon={faAlarmClock} />  */}
            {/* <FontAwesomeIcon icon={faScrewdriverWrench} /> */}
            <FcAlarmClock />
            <h2>Remind</h2>
        </div>
    )
}