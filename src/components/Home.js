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
        </>  

    )
}

export default Home;