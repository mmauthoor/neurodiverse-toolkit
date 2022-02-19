
function Note( {note} ) {

    return (

        <div className="notes">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
        </div>

    )
}

export default Note;