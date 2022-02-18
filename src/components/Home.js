import MainNav from "./MainNav";
import Pinboard from "./Pinboard";

function Home({ pinned }) {

    return (
        <>
            <MainNav />
            <Pinboard pinned={pinned}/>
        </>  

    )
}

export default Home;