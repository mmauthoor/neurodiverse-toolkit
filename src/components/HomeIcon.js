
import "./HomeIcon.css"
import Icon from "./icons/house.png"


export default function HomeIcon( {text} ) {

    return (
         <div className="home-icon icon">
            {text === "none" 
                ? 
                    <img src={Icon} alt="home icon" /> 
                : 
                <>
                    <img src={Icon} alt="home icon" />
                    <h2>Home</h2>
                </>
            } 
        </div>
    )
}