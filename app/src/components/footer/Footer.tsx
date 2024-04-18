import { BsGithub, BsInstagram} from "react-icons/bs";
import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Footer() {
    const {theme,} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: theme.backgroundColorSecondary}} className="footer">
            <h2>Contact Me</h2>
            <div className="socialContainer">
                <BsInstagram size={25}  />
                <a style={{color:theme.highlightColorPrimary}} href="https://www.instagram.com/flakesbourg">
                    Check out my Instagram
                </a>
            </div>
            <div className="socialContainer">
                <BsGithub size={25} />
                <a style={{color:theme.highlightColorPrimary}} href="https://www.github.com/flakesbourg">
                    Visit my Github Profile
                </a>
            </div>
        </div>
    );
}

export default Footer;