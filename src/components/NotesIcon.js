import "./NotesIcon.css"
import Icon from "./icons/001-note.png"



export default function NotesIcon() {

    return (
        <div className="notes-icon icon">
            <img src={Icon} alt="notes icon" />
            <h2>Notes</h2>
        </div>
    )
}