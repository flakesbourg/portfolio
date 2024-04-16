import { useContext } from "react";
import { ThemeContext } from "../../App";
import profile from "../../assets/profile.png";
import Headline from "../common/Headline";
import "./AboutMe.css";

function AboutMe() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div id='start'>
                <div className='startText'>
                    <h1>
                        Hi, I'm <span style={{ color: theme.highlightColorPrimary }}>Alexander</span>.
                    </h1>
                    <p>
                        I studied Computer Science in Germany and
                        specialize in Fullstack Development.
                    </p>
                    <p>
                        During my studies and in my free time i developed
                        multiple Applications/Programs.
                    </p>
                </div>
                <div>
                    <div className='startImage'>
                        <img src={profile} />
                    </div>
                </div>
            </div>
            <Headline text={"About Me"} />
        </>
    );
}

export default AboutMe;