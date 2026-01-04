// src/app/projects/[id]/page.js
import { useLanguageStore } from '../setLanguage';
import { useProjectsData } from '../projectsData';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from '../../../public/assets/icons/icons';
import { GitHubIcon, LinkOffOutlinedIcon } from '../../../public/assets/icons/icons';
import { Link, useParams } from 'react-router-dom';

// هذه الدالة تولد الصفحات الثابتة أثناء البناء (لأداء خارق)
export async function generateStaticParams() {

  const ProgectsData = useProjectsData().values()
  const [projects, setProjects] = useState([...ProgectsData])
  return projects.map((project,index) => ({
    id: index,
  }));
}

export default function ProjectDetails({ params }) {


const {language} = useLanguageStore();
  const ProgectsData = useProjectsData().values()
  const projects = useRef([...ProgectsData])
  const { id } = useParams()
  // 1. البحث عن المشروع الذي يطابق الـ ID الموجود في الرابط
  const project = projects.current.find((p,index) => index === parseInt(id));




  /* anmation elements */
 const arrwUot={
    hidden:{
      x:100,
      opacity:0,
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
      delay:1.9,
      duration:0.4,
        type: "spring",
        stiffness: 200
      },

    }
  }

  const picture={
        hidden:{
            y:-20,
            opacity:0,
    },
        visible:{
            y:0,
            opacity:1,
          transition:{
            delay:1,
            duration:0.8,
          }}
  }
  const motionTitle={
        hidden:{
            x:50,
            opacity:0,
    },
        visible:{
            x:0,
            opacity:1,
          transition:{
            delay:1.3,
            duration:0.8,
          }}
  }
  const motionText={
        hidden:{
            x:-50,
            opacity:0,
    },
        visible:{
            x:0,
            opacity:1,
          transition:{
            delay:1.7,
            duration:0.8,
          }}
  }
  const motionLinks={
        hidden:{
            x:-200,
            opacity:0,
    },
        visible:{
            x:0,
            opacity:1,
          transition:{
            delay:2.5,
            duration:0.8,
          }}
  }
   const motiontoolsOnProject={
    hidden: {
      y: -500,
      opacity: 1,
    },
    visible: {
      y: 0,
      x: ['20%', 0],
      scale: [3, 1],
      rotateX: [0, "360deg"],
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: 'easeInOut'
      }}
  }

  // 2. إذا لم يجد المشروع (رابط خطأ)
  if (!project) {
    return (
      <div className="text-center w-[40%] h-[900px] mx-auto  p-10">
        <div className="flex justify-around flex-col mt-60 bg-light-200 dark:bg-light-300 shadow-[0px_0px_50px_#EBE4D1] rounded-2xl items-center h-[50%]">
          <h1 className="text-4xl  font-bold">لم يتم العثور على المشروع!</h1>
          <Link className=' w-[50%] h-[50px] rounded-2xl shadow-xl text-center pt-0.5 text-2xl bg-sky-100' to="/">العودة للمعرض</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container container-1  dark:bg-dark-200 mx-auto p-10 max-w-4xl">
      {/* زر الرجوع */}
      <motion.div
        variants={arrwUot}
        initial="hidden"
        animate="visible"
        className="  outline-4 outline-offset-2 outline-accent  ltr:directionRtl hover:scale-[1.5] hover:transition-all focus:delay-75 mb-5 bg-light-200 dark:bg-light-300 shadow-[0px_0px_50px_#C8CBD4]  rounded-full focus:scale-[0.8]  h-[50px] w-[50px] text-4xl px-2 pt-0.5 absolute left-[5%] block">
        <Link to="/"
          className="w-auto text-secondary  h-auto">
          &larr;
        </Link>
      </motion.div>

      {/* الصورة الكبيرة - نستخدم priority لأنها العنصر الأهم */}
      <motion.div
        variants={picture}
        initial="hidden"
        animate="visible"
        className="relative w-full my-17 h-96  rounded-xl overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.Title}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      <motion.h1
        variants={motionTitle}
        initial="hidden"
        animate="visible"
        className="text-4xl font-[Amiri] text-[min(3rem,10vw)] text-primary font-bold mb-8
      ">{project.Title}</motion.h1>


      <motion.div
        variants={motionText}
        initial="hidden"
        animate="visible"
        className=" p-5 w-full flex flex-col  justify-center h-auto
          outline-4 outline-offset-2 outline-accent dark:bg-light-300  rounded-2xl dark:bg-shadow  bg-light-200 ">
        {/* التفاصيل النصية */}
        <div className="   ">
          <h3 className="text-[clamp(1.5rem,2vw,3rem)] text-secondary  font-semibold">{language === 'E' ? 'About the project:' : 'عن المشروع:'}</h3>
          <p className=" bg-light-100 p-5 rounded-2xl max-h-[90%] my-5 font-[Tajawal] text-secondary leading-relaxed text-[clamp(1rem,1vw,2rem)]">
            {project.Detailed} 
          </p>
          </div>

          <div className=" relative flex flex-col justify-start   max-h-[250px] ">
              <h3 className="text-2xl text-secondary  font-semibold">{language === 'E' ? 'Technologies:' : 'التقنيات:'}</h3>
          <motion.div
            className="bg-light-200 transition-all hover:scale-[1.3]  max-md:translate-y-[-25%] max-md:flex-col content-center scale-[0.4] flex gap-x-5 dark:bg-light-300 shadow-[0px_0px_50px_#C8CBD4] 
            outline-4 outline-offset-2 max-md:my-1 md:ltr:-translate-x-30 md:rtl:translate-x-30 w-[clamp(80px,90%,450px)]  h-auto flex-wrap gap-y-10   outline-accent p-7   max-md:w-[40%] rounded-full  ">
              {project.catgory.map((item, index) => {
              const Icon = socialIcons[item][0];
              const color = socialIcons[item][1];
              return Icon ? (
                <motion.div
                className="  w-[55px] 
                 p-3 rounded-full bg-light-300  "
                key={index}
                
                >
                  <Icon size={35} color={color} />
                </motion.div>
              ) : null;
            })}
          </motion.div>
</div>
       

      </motion.div>


      {/* أزرار الإجراءات */}
      <motion.div
        variants={motionLinks}
        initial="hidden"
        animate="visible"
        className="bg-light-200 *:focus:scale-[0.7] scale-[0.7] dark:bg-light-300 shadow-[0px_0px_50px_#C8CBD4] outline-4 outline-offset-2 outline-accent  my-6 self-end p-6 rounded-full h-auto w-auto ">
        { project.link && project.link !=='' && (<a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block  w-full bg-sky-300 text-accent text-center py-3 rounded-lg mb-4 hover:bg-blue-700 transition"
        >
          <LinkOffOutlinedIcon sx={{ fontSize: 40,
                      color: "#F3F3F3  "}}/>
        </a>)}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[55px]  bg-gray-800 text-white text-center py-3 rounded-full hover:bg-gray-900 transition"
        >
          <GitHubIcon sx={{ fontSize: 28,
                      color:" #F3F3F3"}}/>
        </a>
      </motion.div>
    </div>
  );
}