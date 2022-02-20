
import "./ProsConsIcon.css"
import Icon from "./icons/002-balance.png"



export default function ProsConsIcon() {

    return (
        <div className="proscons-icon icon">
            <img src={Icon} alt="pros and cons icon" />
            <h2>Pros & Cons</h2>
        </div>
    )
}