import { useState } from "react";

import MainNav from "./MainNav";
import Pinboard from "./Pinboard";
import Footer from "./Footer";

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
            <Footer />
           
        </>  

    )
}

export default Home;