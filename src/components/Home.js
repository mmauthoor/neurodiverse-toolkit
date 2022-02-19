import { useState } from "react";

import MainNav from "./MainNav";
import Pinboard from "./Pinboard";

function Home({ pinnedNotes }) {

    console.log(pinnedNotes)

    return (
        <>
            <MainNav />
            <Pinboard pinnedNotes={pinnedNotes}/>
        </>  

    )
}

export default Home;