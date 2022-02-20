import { useState } from "react";

import MainNav from "./MainNav";
import Pinboard from "./Pinboard";

function Home({ pinnedNotes, setPinnedNotes, pinnedReminders, setPinnedReminders }) {

    return (
        <>
            <MainNav />
            <Pinboard 
                pinnedNotes={pinnedNotes} 
                setPinnedNotes={setPinnedNotes}
                pinnedReminders={pinnedReminders} 
                setPinnedReminders={setPinnedReminders}
            />
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </>  

    )
}

export default Home;