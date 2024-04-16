import { motion } from "framer-motion";

function Headline({ text }: { text: string }) {
    return (
        <motion.h1
            className="headline"
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
                    duration: 2,
                },
            }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        >
            &#60; {text} /&#62;
        </motion.h1>
    );
}

export default Headline;