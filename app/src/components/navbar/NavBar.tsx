import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import "./NavBar.css";
import ThemeButton from "./ThemeButton";

function NavBar() {
    const { theme } = useContext(ThemeContext);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [aboutMeVisible, setAboutMeVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutMe = document.getElementById("aboutMe");
            const projects = document.getElementById("projects");

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

    return (
        <div className="navBar" style={{ backgroundColor: theme.navbarColor, color: theme.navbarTextColor }}>
            <div className="navHeadline">Alexander Falkenberg</div>
            <div className="navLinks">
                <a className={aboutMeVisible ? "link active" : "link"} onClick={() => scrollTo("aboutMe")}>About Me</a>
                <a className={projectsVisible ? "link active" : "link"} onClick={() => scrollTo("projects")}>Projects</a>
                <a>Skills</a>
                <a>Contact</a>
            </div>
            <ThemeButton />
        </div>
    );
}

export default NavBar;