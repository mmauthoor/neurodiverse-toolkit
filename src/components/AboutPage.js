import SubNav from "./SubNav";
import Footer from "./Footer";
import "./AboutPage.css";


function AboutPage() {

    return (
        <>
        <SubNav name={"About the NeuroKit"} compStyle={"about-nav"} />
        <div className="about-content">
            <p>The NeuroKit is .... information to come</p>
        </div>
        <Footer />
        </>
    
    );

}

export default AboutPage;

