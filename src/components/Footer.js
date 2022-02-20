import "./Footer.css";
import { BsFillBrushFill } from 'react-icons/bs';

// import ThemeIcon from "./icons/005-paint-brush.png";
// import AboutIcon from "./icons/006-question.png";


function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            <div className="theme-icon-div">
                {/* <BsFillBrushFill /> */}
                {/* <ThemeIcon /> */}
            </div>
            <div className="footer-text">
                <p className="footer-title">Neurokit &copy; {year}</p>
                {/* <p>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">flaticon</a></p> */}
            </div>
            <div className="about-icon-div">
                <p>About</p>
            </div>
            
        </footer>

    )
}

export default Footer;