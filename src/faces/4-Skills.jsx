import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguageStore, dataTitles } from "../components/setLanguage";
import {
    FaReact,

    FaNodeJs,
    FaDatabase,
    FaGolang,
} from "react-icons/fa6"; // Standard icons
import {
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiNestjs,
    SiThreedotjs,
} from "react-icons/si";

// Skill Data
const currentSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> }, // React icon for RN as well
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
];

const futureSkills = [
    { icon: <FaGolang /> },
    { name: "Nest.JS", icon: <SiNestjs /> },
    { name: "Three.js", icon: <SiThreedotjs /> },
];

function Skills() {
    const { language } = useLanguageStore();
    const { skills } = dataTitles;

    const t = skills[language];

    return (
        <section id="skills" className="py-20 my-20 w-full  overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 left-[-100px] w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            </div>
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10, delay: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, delay: 1.5 }}
                    className="text-4xl md:text-5xl font-bold h-[71px] title font-[Amiri] mb-4 ">
                    {t.title}
                </motion.h2>
                <div className="h-1 w-20 bg-accent dark:bg-light-300 mx-auto rounded-full"></div>
            </div>

            {/* Current Skills - Infinite Carousel */}
            <div className="mb-16">
                <motion.h3
                    initial={{ opacity: 0, y: 10, delay: 1.5 }}
                    whileInView={{ opacity: 1, y: 0, delay: 0.5 }}
                    className="text-2xl font-[Tajawal] font-semibold text-center mb-8
                 text-textLight dark:text-accent  ">
                    {t.current}
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, animationPlayState: "paused", delay: 1.5 }}
                    whileInView={{ opacity: 1, scale: 1, animationPlayState: "running", delay: 1.5 }}
                    className="relative blurBody  Stop flex gap-8 overflow-hidden  ">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r dark:to-dark-100
                     from-light-100 dark:from-dark-200
                     to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l
                     dark:to-dark-100
                     from-light-100 dark:from-dark-200 
                    to-transparent z-10 pointer-events-none"></div>

                    <div className="py-12 Paused rtl:animate-trun ltr:animate-Move flex gap-8">
                        {/* Double the list for seamless loop */}
                        {[...currentSkills].map((skill, index) => (
                            <div
                                key={index}
                                className="inline-flex  flex-col items-center justify-center w-32 h-32 mx-4
                                 bg-white/50 dark:bg-dark-100/50 backdrop-blur-sm border border-accent/20
                                 hover:border-accent 
                                 hover:bg-[linear-gradient(to_bottom,rgba(62,51,51,0.247),accent)] 
                                 hover:shadow-[9px_8px_#EBE4D1] active:translate-y-[2px] active:shadow-none
                                  rounded-2xl  shadow-[0px_0px_10px_#EBE4D1]  hover:-translate-y-3 transition-all duration-300 
                                  group-hover:pause"
                            >
                                <span className="text-5xl text-accent mb-3 drop-shadow-md">
                                    {skill.icon}
                                </span>
                                <span className="text-sm font-medium text-secondary dark:text-light-100 font-[Tajawal]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second copy for smooth loop (absolute positioning approach or flex list approach standard is flex containter animation) */}
                    <div
                        aria-hidden="true"
                        className=" top-0 py-12 Paused rtl:animate-trun ltr:animate-Move flex gap-8.5">
                        {[...currentSkills].map((skill, index) => (
                            <div
                                key={index}

                                className="inline-flex  flex-col items-center justify-center w-32 h-32 mx-4
                                 bg-white/50 dark:bg-dark-100/50 backdrop-blur-sm border border-accent/20
                                 hover:border-accent 
                                 hover:bg-[linear-gradient(to_bottom,rgba(62,51,51,0.247),accent)] 
                                 hover:shadow-[9px_8px_#EBE4D1] active:translate-y-[2px] active:shadow-none
                                  rounded-2xl  shadow-[0px_0px_10px_#EBE4D1]  hover:-translate-y-3 transition-all duration-300 
                                  group-hover:pause"
                            >
                                <span className="text-5xl text-accent mb-3 drop-shadow-md">
                                    {skill.icon}
                                </span>
                                <span className="text-sm font-medium text-secondary dark:text-light-100 font-[Tajawal]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Future Skills - Simple Grid/Flex */}
            <div className="container mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 10, delay: 1.5 }}
                    whileInView={{ opacity: 1, y: 0, delay: 1.5 }}
                    className="text-2xl font-[Tajawal] font-semibold text-center mb-8 text-textLight dark:text-accent">
                    {t.future}
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {futureSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 px-2 py-3 bg-linear-to-l from-primary to-secondary text-white rounded-full focusLink border-accent/30 shadow-md hover:shadow-accent/50 cursor-default"
                        >
                            <span className="text-2xl scale-[1.3] text-accent">{skill.icon}</span>
                            <span className="font-medium tracking-wide">{skill.name ? skill.name : null}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

}


export default Skills;
