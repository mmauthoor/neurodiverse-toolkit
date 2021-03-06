
import ReminderIcon from "./ReminderIcon";
import ToDoIcon from "./ToDoIcon";
import ProsConsIcon from "./ProsConsIcon";
import NotesIcon from "./NotesIcon";
import { Link } from 'react-router-dom';

import "./MainNav.css"

function MainNav() {

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to="/reminders"><ReminderIcon /></Link>
                </li>
                <li>
                    <Link to="/todo"><ToDoIcon /></Link>
                </li>
                <li>
                    <Link to="/proscons"><ProsConsIcon /></Link>
                </li>
                <li>    
                    <Link to="/notes"><NotesIcon /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;