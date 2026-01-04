// ================================
// Projects Section / قسم المشاريع
// ================================
// Displays filterable project portfolio with category buttons
// يعرض محفظة المشاريع القابلة للتصفية مع أزرار الفئات

import { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import { Button, Stack } from '@mui/material';
import { useProjectsData } from '../components/projectsData'
import { useLanguageStore, dataTitles } from '../components/setLanguage'
import { animate, inView, motion } from "framer-motion"
import { socialIcons } from '../../public/assets/icons/icons';


function Main() {
  // Language state from Zustand / حالة اللغة من Zustand
  const { language } = useLanguageStore();
  const { projectsSection } = dataTitles;
  const p = projectsSection[language];

  // Get projects data (updates automatically when language changes) / الحصول على بيانات المشاريع (تتحدث تلقائياً عند تغيير اللغة)
  const ProjectsData = useProjectsData()

  // Filter state / حالة التصفية
  const [tools, setTools] = useState('all')

  // Calculate filtered projects based on selected category / حساب المشاريع المفلترة بناءً على الفئة المحددة
  const filteredProjects = ProjectsData.filter(item =>
    item.catgory.includes(tools) || tools === 'all'
  );



  return (
    <>
      <div id="Projects" className="py-20 flex flex-col   w-full h-auto max-md:rtl:translate-x-[-14%] relative">
        <dvi className="flex flex-col gap-9" > <motion.h2
          initial={{ opacity: 0, y: 10, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0, delay: 1.5 }}
          className="text-4xl md:text-5xl font-bold mx-auto font-[Amiri] h-[68px]  title">
          {p.title}
        </motion.h2>
          <div className="h-1 w-20 bg-accent dark:bg-light-300 mx-auto rounded-full"></div>
          <motion.h3
            initial={{ opacity: 0, y: 10, delay: 1.5 }}
            whileInView={{ opacity: 1, y: 0, delay: 0.5 }}
            className="text-2xl font-[Tajawal] font-semibold text-center mb-8
                 text-textLight dark:text-accent  ">
            {p.subtitle}
          </motion.h3>
        </dvi>

        <div
          className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="py-13 flex flex-col md:flex-row max-[1110px]:justify-around gap-5 2xl:gap-9 w-full h-auto max-md:rtl:translate-x-[-14%] relative">
          <motion.div
            initial={{ opacity: 0, x: -100, delay: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className=' pb blurBody2  rounded-2xl  translate-y-[0%]
          flex md:flex-col px-4 py-5 max-md:overflow-x-scroll  h-[120px]
          md:h-[450px] ml-5 w-[80%] md:w-[25%]  lg:w-auto  gap-7  items-start
          text-2xl font-[Amiri] font-bold text-[#f7cf40] max-md:translate-x-[10%]
          *:hover:scale-[1.3]
*:transition-all *:px-9 *:w-[clamp(100Px,100%,230px)] *:h-[70px] *:rounded-2xl text-center
          
        '>
            <button className={tools === "all" ? "bg-secondary dark:bg-shadow outline-2 outline-offset-2 outline-primary bg-transparent" : "buttomProjects"}
              onClick={() => setTools('all')}>{p.allProjects}</button>
            <button className="buttomProjects" onClick={() => setTools('React')}>React</button>
            <button className="buttomProjects" onClick={() => setTools('JS')}>JS</button>
            <button className="buttomProjects" onClick={() => setTools('Css')}>Css</button>
            <button className="buttomProjects" onClick={() => setTools('HTML')}>HTML</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, delay: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className='viewProjects blurBody  flex  flex-row max-md:*:mb-8 bg-light-200 dark:bg-dark-400 max-[1110px]:overflow-auto pb
         flex-wrap    gap-x-[clamp(1.75rem,10%,3.75rem)] gap-y-10 rounded-2xl 
         max-md:ltr:translate-x-[30%] max-md:rtl:translate-x-[0%] *:self-center max-[650px]:*:scale-[0.89] justify-start max-[1110px]:justify-center
          p-9   w-[min(60%,360px)] min-[1110px]:max-[1570px]:w-[720px] min-[1571px]:w-[min(90%,950px)]  h-[500px] shadow max-md:my-8 min-[1110px]:h-full'>
            {
              filteredProjects.length > 0 ? (
                filteredProjects.map((item, index) => (
                  <div className=" rounded-2xl dark:bg-white/50
                      border-2 border-light-300  
                     transition-all hoverToProjects
                      outline-offset-2 
                    opacity-[0.78] z-10
                    shadow-titleLight/70 dark:shadow-secondary/60 
                      shadow-[0px_0px_20px] 
                     bg-light-200 w-[250px] h-[350px]" key={index}>
                    <Link to={`/project/${index}/details`}>

                      <div className='w-full  h-[50%] '>
                        <img className='w-full rounded-xl h-full bg-cover bg-center'
                          src={item.image} alt={item.Title} />
                      </div>

                      <div className=' my-5 px-4 flex flex-col gap-2'>
                        <h1 className='text-2xl font-[Amiri] font-bold dark:text-titleLight text-primary'>{item.Title}</h1>
                        <p className="font-[Tajawal] text-xl font-medium truncate dark:text-accent text-accentTo">{item.Detailed}</p>
                      </div>

                      <div className="h-[100px] -translate-y-2 relative w-full ">
                        <h3 className="text-2xl mx-3 mb-3 text-titleLight  font-semibold">{p.technologies}</h3>
                        <div
                          className="bg-light-200 hover:scale-[0.6] 
                         transition-all -translate-y-[55%] justify-start
                          absolute content-center scale-[0.3] flex  gap-x-5
                           dark:bg-light-100 shadow-[0px_0px_50px_#C8CBD4] 
                                outline-4 outline-offset-2  ltr:-translate-x-24 
                                rtl:translate-x-24 min-w-[300px] h-auto  gap-y-10  
                                 outline-accent p-5 mt-3  rounded-4xl  ">
                          {item.catgory.map((item, index) => {
                            const Icon = socialIcons[item][0];
                            const color = socialIcons[item][1];
                            return Icon ? (
                              <div
                                className="  h-[55px] w-[55px] 
                                     p-3 rounded-full bg-light-300 "
                                key={index}
                                whileHover={{ scale: 1.2 }}
                              >
                                <Icon size={35} color={color} />
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className=" dark:bg-light-300    shadow-[0px_0px_50px_#EBE4D1] rounded-2xl  
               bg-light-100 w-[350px] min-[1500px]:w-[450px]  h-[300px]">
                  <h1 className=" text-[clamp(1.5rem,2vw,3rem)] mx-auto w-[235px] min-[1500px]:w-[300px] 
                min-[1500px]:my-[20%]  my-[30%] text-center font-[Amiri] font-bold   first-line:text-secondary text-primary ">{p.noProject + tools}</h1>
                </div>
              )}
          </motion.div>
        </div>

      </div>
    </>
  )
}
export default Main