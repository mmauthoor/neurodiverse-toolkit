
import "./ReminderIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench }  from '@fortawesome/free-solid-svg-icons'



export default function ReminderIcon() {

    return (
        <div className="reminder-icon">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <p>Remind</p>
        </div>
    )
}