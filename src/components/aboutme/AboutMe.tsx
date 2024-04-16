import { useContext } from "react";
import { ThemeContext } from "../../App";
import profile from "../../assets/profile.jpg";
import Headline from "../common/Headline";
import { motion } from "framer-motion";
import "./AboutMe.css";

function AboutMe() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="startContainer">
                <div style={{background: `linear-gradient(180deg, ${theme.navbarColor} 40%, transparent 100%)`}} className="startBackground"></div>
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
            </div>
            <div id="aboutMe">
                <Headline text={"About Me"} />
                <Career
                    start={2016}
                    end={2019}
                    text="I graduated at a high school in the german town of Wittlich with a grade 1.9.
                    The school focused on technology and i started with my first computer science class."
                    headline="High School" />
                <Career
                    start={2020}
                    end={2024}
                    text="Then I made my Bachelor in Computer Science at Trier University of 
                    applied Science also with a grade 1.9.
                    The subject of my bachelor Thesis was the evaluation
                    of the query engine Trino."
                    headline="Computer Science (B.Sc.)" />
            </div>
        </>
    );
}

function Career({ start, end, headline, text }: { start: number, end: number, headline: string, text: string }) {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            className="careerContainer"
            initial={{
                x: -100,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.5,
                },
            }}
            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
        >
            <div className="timeline">
                <div className="years">
                    <h2 style={{ color: theme.highlightColorPrimary }}>{start}</h2>
                    <h2 style={{ color: theme.highlightColorPrimary }}>{end}</h2>
                </div>
                <div style={{ backgroundColor: theme.highlightColorPrimary }} className="line">
                </div>
            </div>
            <div className="textContainer">
                <h2>{headline}</h2>
                <p>{text}</p>
            </div>
        </motion.div>
    );
}

export default AboutMe;