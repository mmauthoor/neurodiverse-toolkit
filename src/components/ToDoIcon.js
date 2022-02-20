
import "./ToDoIcon.css"
import Icon from "./icons/004-settings.png"



export default function ToDoIcon() {

    return (
        <div className="todo-icon icon">
            <img src={Icon} alt="todo icon" />
            <h2>To do</h2>
        </div>
    )
}