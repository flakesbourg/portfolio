import { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import Headline from "../common/Headline";
import test from "../../assets/test.png";
import folder from "../../assets/folder.png";
import hotel from "../../assets/hotel.png";
import "./Projects.css";

function Projects () {
    return (
        <div id="projects">
          <Headline text={"My Projects"} />
          <ProjectContainer 
            image={test}
            headline={"Hint Please!"}
            text="
            Hint Please! is a game where players need to guess a certain 
            video game, movie, song, etc. in every round. After I saw youtubers 
            playing a similar game without such a program I thought it would be practical to 
            develop an application which solves the problems that comes with the manual execution of such a game. 
            With this project i learned the use of Socket.io, deployment with docker and React.js.
             "
            link="https://github.com/flakesbourg/Hint_Please_Game"
          />
    
          <ProjectContainer
            image={folder}
            headline={"File Mover"}
            text="
            With this Node.js project a user can move all files with certain file extension 
            (or with one of multiple specified extensions), 
            from one directory to another. This project helped me to understand
            and utilize the Node.js filesystem module. 
            "
            link="https://github.com/flakesbourg/Move_Files"
          />
    
    <ProjectContainer
            image={hotel}
            headline={"Grandline Hotel"}
            text="
            This project is a prototype website for a fictional hotel created as part
            of a team project at the university. With another team partner we created a web
            presence where a user can book rooms with a selfmade server. The process
            of booking a room is simplified and not comparable with a real booking website.
            This project taught me the basics of HTML, CSS, JavaScript and the creation of an api.
            "
            link="https://github.com/flakesbourg/Teamprojekt---Hotel"
          />
        </div>
      );
}

function ProjectContainer({image, headline, text, link} : {image: string, headline: string, text: string, link: string}) {
    const {theme,} = useContext(ThemeContext);
  
    return (
      <motion.div
        className="projectContainer"
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
        <img className="projectImage" src={image} />
        <div className="projectText">
          <h3>{headline}</h3>
          <p>
            {text}
          </p>
          <a style={{color: theme.highlightColorPrimary}} href={link}>Link to GitHub repo</a>
        </div>
      </motion.div>
    );
  }

  export default Projects;