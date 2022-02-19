
import ReminderIcon from "./ReminderIcon"
import NotesIcon from "./NotesIcon"
import { Link } from 'react-router-dom'


import "./MainNav.css"

function MainNav() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/reminders"><ReminderIcon /></Link>
                </li>
                <li>    
                    <Link to="/notes"><NotesIcon /></Link>
                </li>
            </ul>
            
            {/* <ToDoIcon /> */}
            {/* pros and cons icon */}
        </nav>
    )
}

export default MainNav;