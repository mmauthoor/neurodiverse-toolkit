import "./Note.css"

function Note( {note} ) {

    return (

        <div className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
        </div>

    )
}

export default Note;