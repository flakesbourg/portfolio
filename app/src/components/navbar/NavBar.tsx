import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import "./NavBar.css";
import ThemeButton from "./ThemeButton";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

function NavBar() {
    const { theme } = useContext(ThemeContext);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [aboutMeVisible, setAboutMeVisible] = useState(false);
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutMe = document.getElementById("aboutMe");
            const projects = document.getElementById("projects");
            const mySkills = document.getElementById("mySkills");

            if (aboutMe) {
                const rect = aboutMe.getBoundingClientRect();
                setAboutMeVisible(
                    rect.top < window.innerHeight - window.outerHeight + 250 && rect.bottom >= 100
                );
            }

            if (projects) {
                const rect = projects.getBoundingClientRect();
                setProjectsVisible(
                    rect.top < window.innerHeight - window.outerHeight + 250 && rect.bottom >= 100
                );
            }

            if (mySkills) {
                const rect = mySkills.getBoundingClientRect();
                setSkillsVisible(
                    rect.top < window.innerHeight - window.outerHeight + 250 && rect.bottom >= 100
                );
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function scrollTo(id: string) {
        const element = document.getElementById(id);

        if (element) {
            let y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    function toggleMenuOpen() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <div className="navBar" style={{ backgroundColor: theme.navbarColor, color: theme.navbarTextColor }}>
            <div className="navHeadline">Alexander Falkenberg</div>
            <div className="linksContainer">
                <div className="navLinks">
                    <a className={aboutMeVisible ? "link active" : "link"} onClick={() => scrollTo("aboutMe")}>About Me</a>
                    <a className={projectsVisible ? "link active" : "link"} onClick={() => scrollTo("projects")}>Projects</a>
                    <a className={skillsVisible ? "link active" : "link"} onClick={() => scrollTo("mySkills")}>Skills</a>
                </div>
                <ThemeButton />
            </div>
            <div className="burgerIcon" onClick={toggleMenuOpen}>
                <CgMenu size={40}/>
            </div>
        </div>
        <div className={menuOpen ? "burgerContainer open" : "burgerContainer"} style={{ backgroundColor: theme.navbarColor, color: theme.navbarTextColor }}>
        <div className="burgerLinks">
            <div className="burgerIcon" onClick={toggleMenuOpen}>
                <CgClose size={40}/>
            </div>
            <a className={aboutMeVisible ? "link active" : "link"} onClick={() => scrollTo("aboutMe")}>About Me</a>
            <a className={projectsVisible ? "link active" : "link"} onClick={() => scrollTo("projects")}>Projects</a>
            <a className={skillsVisible ? "link active" : "link"} onClick={() => scrollTo("mySkills")}>Skills</a>
        </div>
        <div className="burgerTheme">
            <ThemeButton />
        </div>
        </div>
        </>
    );
}

export default NavBar;