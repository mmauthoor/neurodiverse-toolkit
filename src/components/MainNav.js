
import ReminderIcon from "./ReminderIcon"
import NotesIcon from "./NotesIcon"

function MainNav() {

    return (
        <nav>
            <ul>
                {/* all clickable icons for diff components */}
                <li><ReminderIcon /></li>
                {/* <ToDoIcon /> */}
                <li><NotesIcon /></li>
                {/* pros and cons icon */}
            </ul>
        </nav>
    )
}

export default MainNav