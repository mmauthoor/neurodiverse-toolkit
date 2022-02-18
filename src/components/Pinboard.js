import { useState } from "react";
import "./Pinboard.css"

function Pinboard({ pinned }) {

    // const [pinnedItems, setPinnedItems] = useState([])

    return (
        <section>
            <div className="pinboard-container">

                { pinned.map(pinnedItem => {
                    if (pinnedItem.title) {
                        <div className="note">
                            <h2>{pinnedItem.title}</h2>
                            <p>{pinnedItem.content}</p>
                        </div>
                    } 
                }) }


            </div>
        </section>
    )
    
}

export default Pinboard