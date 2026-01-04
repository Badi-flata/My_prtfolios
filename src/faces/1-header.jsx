import { useState, useEffect } from 'react'

import { Button, Stack } from '@mui/material';
import { ChagneTheme } from '../components/UiComponents';
import { motion, animate, hover, press } from 'framer-motion';
import { TextAlignJustify, CircleX } from 'lucide-react';
import { useLanguageStore, UlSmolScreen } from '../components/setLanguage'

function Header() {
  const direction = document.getElementById("root");
  const isDark = document.documentElement.className == "dark";

  const [chagneTheme, setChagneTheme] = useState(isDark);

  const { language, setLanguage } = useLanguageStore();
  const [languHindler, setLanguHinder] = useState(false)
  const { showNav, setShowNav } = UlSmolScreen()




  const chagneLanguage = () => {
    if (languHindler == true) {
      setLanguage("E")
      direction.dir = "ltr"
      setLanguHinder(false)
    } else {
      setLanguage("ض")
      direction.dir = "rtl"
      setLanguHinder(true)
    }
  }

  useEffect(() => {

    press(".LiBot", (ele) => {
      animate(ele, { scale: 0.8 }, { type: "spring", stiffness: 600 })

      return () =>
        animate(ele, { scale: 1 }, { type: "spring", stiffness: 800 })
    })

  }, [showNav])

  const hoverHandler = {
    start: {
      scale: 2,
      transition: {
        duration: 4.9,
        type: "spring",
        stiffness: 300
      },

    },
    end: { duration: 0.4 }
  }

  // animate to  secondary Nav 
  const shadowBody = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {

        duration: 0.4
      }

    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 800,
        when: "beforeChildren",
        duration: 0.4,
        staggerChildren: 1.5
      }
    }
  }


  const ulBody = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        delay: 1,
        duration: 1.2,

      }
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1.5,
        delay: 1
      }
    }

  }



  const liLink = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.7
      }
    }
  }


  //animate to priamry Nav
  const parent = {
    hidden: {
      x: -100,
      opacity: 0,

    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,

      },

    }
  }

  const child = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
      }
    }
  }



  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("blurLiquidGlass");
    } else {
      header.classList.remove("blurLiquidGlass");
    }
  });
  return (

    <>

      <div

        className={`header `}>


        <div
          className=' max-md:mobelyNavBar md:*:hidden md:h-3.5 md:w-[2%] lg:w-[13%]' >
          {/* Nav bar somll screen */}
          <button
            onClick={() => setShowNav(true)}
            className='p-[6px] buttomShowNavSmoll ltr:ml-10 rtl:mr-10 '>
              <TextAlignJustify
              strokeWidth={2}
              size={40}
              color='#8bd4fc '
            /></button>
          {showNav && (
            <>
              <motion.div

                initial={shadowBody.hidden}
                animate={shadowBody.visible}
                className='fixed z-90 UlSmolScreen top-0 bottom-0 right-0 left-0 h-[100vh] 
         bg-light-200/40 w-full dark:bg-sky-950/40 ' >

                <motion.div
                  variants={ulBody}
                  initial="hidden"
                  animate='visible'

                  className=' z-50
      styleToBodyNavSmoller backgrounColorToNavSmoll
          '>
                  <button
                    onClick={() => setShowNav(false)}
                    className='absolute top-1 left-1.5
            p-[6px]
       text-center w-[50px] h-[50px] rounded-full
        '
                  ><CircleX
                      size={45}
                      color='#dff2fe'
                      strokeWidth={.5}
                    /></button>

                  <motion.ul
                    className={` z-50
             styleUlOnSmollScreen`}
                  >
                    <motion.li
                      onClick={() => setShowNav(false)}
                      variants={liLink}
                      whileHover={hoverHandler.start}
                      transition={hoverHandler.end}

                      className='w-[100%] 
             bg-transparent rounded-2xl z-20  h-auto'
                    ><motion.a
                      className=' hoverToNavSmollScreen
             ALink LiBot focusLink
             '
                      href="#abuot">Abuot</motion.a></motion.li>

                    <motion.li
                      variants={liLink}
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      onClick={() => setShowNav(false)}
                      whileHover={hoverHandler.start}
                      transition={hoverHandler.end}

                      className='w-[100%] 
            bg-transparent rounded-2xl z-20  h-auto'
                    ><motion.a
                      className=' hoverToNavSmollScreen 
             ALink LiBot focusLink
              '
                      href="#skills">Skills</motion.a></motion.li>

                    <motion.li
                      variants={liLink}
                      whileHover={hoverHandler.start}
                      transition={hoverHandler.end}
                      onClick={() => setShowNav(false)}
                      className='w-[100%] 
            bg-transparent rounded-2xl z-20  h-auto'
                    ><motion.a
                      className=' hoverToNavSmollScreen
              ALink LiBot focusLink
           '
                      href="#Projects">Projects</motion.a></motion.li>

                    <motion.li
                      variants={liLink}
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      onClick={() => setShowNav(false)}
                      whileHover={hoverHandler.start}
                      transition={hoverHandler.end}

                      className='w-[100%] 
            bg-transparent rounded-2xl z-20  h-auto'
                    ><motion.a
                      className=' hoverToNavSmollScreen 
            ALink LiBot focusLink '
                      href="#home">Home</motion.a></motion.li>

                    <motion.li
                      onClick={() => setShowNav(false)}
                      variants={liLink}
                      whileHover={hoverHandler.start}
                      transition={hoverHandler.end}
                      className='w-[100%] 
            bg-transparent rounded-2xl z-20  h-auto'
                    ><motion.a
                      className=' hoverToNavSmollScreen 
            ALink LiBot focusLink
              '
                      href="#contact">Contact</motion.a></motion.li>

                  </motion.ul>

                </motion.div>
              </motion.div>
            </>
          )}
        </div>

        {/* nav bar lurg screen */}
        <motion.nav
          variants={parent}
          initial="hidden"
          animate="visible"
          className={`nav-bar max-md:hidden hover:gap-7 bg-light-200 xl:scale-[1.2] xl:translate-y-[0px] z-60 blueShadow`} >

          <motion.ul

            className={` ulStyle z-60 compbinColors`}>
            <motion.li
              className='hoverToNavMediumScreen LiBot focusLink '
              variants={child}
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}
            ><motion.a

              href="#abuot">Abuot</motion.a></motion.li>

            <motion.li
              className='hoverToNavMediumScreen LiBot focusLink
            '
              variants={child}
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}
            ><a href="#skills">Skills</a></motion.li>

            <motion.li
              className='hoverToNavMediumScreen LiBot focusLink
            '
              variants={child}
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}
            ><a href="#Projects">Projects</a></motion.li>

            <motion.li
              className='hoverToNavMediumScreen LiBot focusLink
            '
              variants={child}
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}
            ><a href="#home">Home</a></motion.li>

            <motion.li
              variants={child}
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}
              className='hoverToNavMediumScreen LiBot focusLink'
            ><a href="#contact">Contact</a></motion.li>

          </motion.ul>
        </motion.nav>

        {/* chagne theme and language button  */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0, opacity: 1,
            transition: { duration: 1, stagger: 1.3 }
          }}
          className=' opacity-100 z-20 xl:translate-y-[0px] min-[350px]:max-[768px]:ltr:right-0/2  relative min-[350px]:max-[768px]:left-0/2
          max-md:w-[40%] w-[18%] h-auto  flex gap-2 xl:gap-8  flex-row-reverse justify-around '>

          <div
            className="w-15 h-[30px]"
          >
            <motion.button
              whileHover={hoverHandler.start}
              transition={hoverHandler.end}

              className={` 
           
            xl:scale-[1.7] w-[min(51vw,30px)] 
            h-[min(51vw,30px)] rounded-full blueShadow 
            font-[Raleway] font-bold 
            text-[min(10vw,17px)] text-center bg-light-100 dark:bg-dark-100   text-light-300 `}

              checked={languHindler}
              onClick={chagneLanguage}
            >
              {language}
            </motion.button></div>

          <div>
            <ChagneTheme
              className={` xl:scale-[1.5] blueShadow
            `}
              checked={chagneTheme}
              onChange={(e) => {
                if (e.target.checked == false) {

                  document.documentElement.classList.toggle('dark')
                  setChagneTheme(e.target.checked)
                } else if (e.target.checked == true) {
                  document.documentElement.classList.toggle('dark')
                  setChagneTheme(e.target.checked)
                }
              }
              }
            /></div>
        </motion.div>


      </div>

    </>
  )
}
export default Header