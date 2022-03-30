
import MainNav from "./MainNav";
import Pinboard from "./Pinboard";
import Footer from "./Footer";

function Home({ pinnedNotes, setPinnedNotes, pinnedReminders, setPinnedReminders, crossedToDos, setCrossedToDos }) {

    return (
        <>
            <MainNav />
            <Pinboard 
                pinnedNotes={pinnedNotes} 
                setPinnedNotes={setPinnedNotes}
                pinnedReminders={pinnedReminders} 
                setPinnedReminders={setPinnedReminders}
                crossedToDos={crossedToDos}
                setCrossedToDos={setCrossedToDos}
            />
            <Footer />
           
        </>  

    )
}

export default Home;