import SubNav from "./SubNav";
import Footer from "./Footer";

import "./ProsConsPage.css"

function ProsConsPage() {

    

    return (
        <>
            <SubNav name={"Pros & cons"} compStyle={"proscons-nav"} />
            <div className="proscons-container">  

                <section>
                <p>Coming soon!</p>
                {/* this section will have current pros and cons lists */}

                </section>
                <section>
                    {/* new pros and cons list */}

                </section>
            </div>
            <Footer />
        
        </>

    )
}

export default ProsConsPage;