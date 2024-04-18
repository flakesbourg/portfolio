import { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { ThemeContext } from "../../App";
import {motion} from "framer-motion";

type Props = {
    imageUrl: string,
    description: string,
    skillLevel: 1 | 2 | 3,
}

function Skill (props: Props) {
    const {theme,} = useContext(ThemeContext);

    function getStars() {
        let content: JSX.Element[] = [];
        let emptyStars = 3 - props.skillLevel;

        for(let i = 0; i < props.skillLevel; i++) {
            content.push(<BsStarFill size={25} className="star active" />)
        }

        for(let i = 0; i < emptyStars; i++) {
            content.push(<BsStarFill size={25} className="star" />)
        }

        return content;
    }

    return (
        <motion.div
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
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        className="skillContainer" style={{backgroundColor: theme.backgroundColorSecondary}}>
            <img className="skillImage" src={props.imageUrl} />
            <h2 className="skillText">
                {props.description}
            </h2>
            <div className="starContainer">
                {getStars()}
            </div>
        </motion.div>
    );
}

export default Skill;