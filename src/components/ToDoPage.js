import SubNav from "./SubNav";

function ToDoPage() {

    return (
        <>
            <SubNav name={"To do"} compStyle={"todo-nav"} />
            <section>
                {/* add new todo item. */}

            </section>
            <section className="current-todos">
                {/* map out. if nothing, have text: nothing to do, yay! */}
                {/* add ability to edit/delete items. delete on check*/}

            </section>
        
        
        </>

    )
}

export default ToDoPage;