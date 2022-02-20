import { Link } from 'react-router-dom';

import ReminderIcon from './ReminderIcon';
import ToDoIcon from './ToDoIcon';
import ProsConsIcon from './ProsConsIcon';
import NotesIcon from './NotesIcon';

import "./SubNav.css";

function SubNav({ name, compStyle }) {

    return (
        <nav className={compStyle}>   
            <div className="page-name">
                <h1>{name}</h1>
            </div>
            <div className="nav-options">
                {/* need to only render the icons of other pages, not current page  */}
                <ul>
                    {/* put home icon instead */}
                    <li>
                        <Link to="/"><ReminderIcon text={"none"}/></Link>
                    </li>
                    <li>
                        <Link to="/reminders"><ReminderIcon text={"none"}/></Link>
                    </li>
                    <li>
                        <Link to="/todo"><ToDoIcon text={"none"}/></Link>
                    </li>
                    <li>
                        <Link to="/proscons"><ProsConsIcon text={"none"}/></Link>
                    </li>
                    <li>    
                        <Link to="/notes"><NotesIcon text={"none"}/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SubNav;