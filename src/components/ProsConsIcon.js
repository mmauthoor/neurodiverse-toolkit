
import "./ProsConsIcon.css"
import Icon from "./icons/002-balance.png"



export default function ProsConsIcon( {text} ) {

    return (

        <div className="proscons-icon icon">
            {text === "none" 
                ? 
                    <img src={Icon} alt="proscons icon" /> 
                : 
                <>
                    <img src={Icon} alt="proscons icon" />
                    <h2>Pros & Cons</h2>
                </>
            } 
        </div>

        
    )
}