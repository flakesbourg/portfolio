import Headline from "../common/Headline";
import Skill from "./Skill";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import typescript from "../../assets/skills/typescript.png";
import html from "../../assets/skills/html.png";
import sql from "../../assets/skills/sql.png";
import "./MySkills.css";

function MySkills() {
    return (
        <div id="mySkills">
            <Headline text="My Skills"/>
            <Skill description="HTML, CSS, JS" imageUrl={html} skillLevel={3} />
            <Skill description="Node.js" imageUrl={node} skillLevel={2} />
            <Skill description="React" imageUrl={react} skillLevel={2} />
            <Skill description="TypeScript" imageUrl={typescript} skillLevel={1} />
            <Skill description="SQL" imageUrl={sql} skillLevel={1} />
        </div>
    );
}

export default MySkills;