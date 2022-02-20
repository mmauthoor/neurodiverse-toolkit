
import "./ToDoIcon.css"
import Icon from "./icons/004-settings.png"



export default function ToDoIcon( {text}) {

    return (
        <div className="todo-icon icon">
            {text === "none" 
                ? 
                    <img src={Icon} alt="todo icon" /> 
                : 
                <>
                    <img src={Icon} alt="todo icon" />
                    <h2>To do</h2>
                </>
            } 
        </div>

    )
}