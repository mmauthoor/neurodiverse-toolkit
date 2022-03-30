
function ToDoListItem({ item, handleCrossOut, handleUncross }) {

    const crossedOut = item.crossedOut; 

    const handleClick = (item) => {
        crossedOut ? handleUncross(item) : handleCrossOut(item);
    }

    return (
        <>
            <li 
                className={ `${crossedOut ? "crossed-out" : "" } todo-list-li`} 
                onClick={() => handleClick(item)} 
            >
                {item.content}
            </li>
        </>
    )
}

export default ToDoListItem;