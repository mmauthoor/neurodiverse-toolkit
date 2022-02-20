import "./NotesIcon.css"
import Icon from "./icons/001-note.png"



export default function NotesIcon( {text} ) {

    return (
         <div className="notes-icon icon">
            {text === "none" 
                ? 
                    <img src={Icon} alt="notes icon" /> 
                : 
                <>
                    <img src={Icon} alt="notes icon" />
                    <h2>Notes</h2>
                </>
            } 
        </div>
    )
}