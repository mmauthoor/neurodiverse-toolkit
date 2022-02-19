import "./Pinboard.css"

function Pinboard({ pinnedNotes }) {


    return (
        <section>
            <div className="pinboard-container">
                <div className="pinned-notes">
                    { pinnedNotes.map(note => 
                    
                        <div className="notes">
                            <h2>{note.title}</h2>
                            <p>{note.content}</p>
                            <button>Unpin</button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
    
}

export default Pinboard