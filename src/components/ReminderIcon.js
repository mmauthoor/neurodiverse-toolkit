
import "./ReminderIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAlarmClock }  from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench }  from '@fortawesome/free-solid-svg-icons'




export default function ReminderIcon() {

    return (
        <div className="reminder-icon">
            
            <FontAwesomeIcon icon="fa-duotone fa-alarm-clock" />
            {/* <FontAwesomeIcon icon={faAlarmClock} />  */}
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <p>Remind</p>
        </div>
    )
}