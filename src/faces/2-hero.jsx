// ================================
// Hero Section / قسم البطل
// ================================
// Main hero section with animated profile image rotation and social links
// القسم البطل الرئيسي مع دوران الصورة الشخصية المتحرك وروابط التواصل الاجتماعي

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Stack } from '@mui/material';
import { dataTitles } from '../components/setLanguage'
import { useLanguageStore } from '../components/setLanguage'
import { useProjects } from '../components/turnPictures'
import { GitHubBut, DownloadBut } from '../components/UiComponents'
import {
  GitHubIcon,
  TwitterIcon,
  InstagramIcon
} from '../../public/assets/icons/icons'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Lottie from 'lottie-react';
import animation from '../../public/assets/animateIcons/Web-Development.json';

function Hero() {
  // Content and language state / المحتوى وحالة اللغة
  const { subjectHeader } = dataTitles
  const { language } = useLanguageStore()

  // Picture rotation logic / منطق دوران الصورة
  const { pictures, current, changePicture } = useProjects()

  // نستخدم useRef لحفظ السجل لأنه لا يحتاج لإعادة رسم الواجهة عند تحديثه
  // Use useRef to keep track of shown pictures without triggering re-renders
  const shownPicturesRef = useRef([current]);

  useEffect(() => {
    const handleChangePicture = () => {
      let nextPicture;
      const shown = shownPicturesRef.current;

      // إذا تم عرض كل الصور، قم بتصفير السجل
      // If all pictures have been shown, reset the list
      if (shown.length >= pictures.length) {
        shownPicturesRef.current = [current];
      }

      // اختيار صورة عشوائية لم يتم عرضها من قبل
      // Select a random picture that hasn't been shown yet
      do {
        const randomIndex = Math.floor(Math.random() * pictures.length);
        nextPicture = pictures[randomIndex];
      } while (shownPicturesRef.current.includes(nextPicture));

      // إضافة الصورة للسجل وتحديث الحالة
      // Add picture to history and update state
      shownPicturesRef.current.push(nextPicture);
      changePicture(nextPicture);
    };

    // تشغيل المؤقت - كل 7 ثوانٍ
    // Set interval timer - every 7 seconds
    const interval = setInterval(handleChangePicture, 7000);

    // تنظيف المؤقت عند الخروج
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  const pictureAnimate = {
    hidden: {
      y: 100,
      opacity: 1,
    },
    visible: {
      y: 0,
      x: ['100%', 0],
      scale: [3, 1],
      rotateX: [0, "360deg"],
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <div id="home" className="w-full mb-20  h-auto">
        <div>
          <div className='mx-4 z-0 max-lg:translate-y-[40px]'>
            <motion.div
              variants={pictureAnimate}
              initial="hidden"
              animate="visible"
              className='max-md:w-[50%] ltr:max-[400px]:translate-x-[60%] ltr:max-md:translate-x-[77%] rtl:max-md:translate-x-[-65%] rtl:max-[400px]:translate-x-[60%] '>

              <motion.div
                style={{ backgroundImage: `url(${current})` }}
                className="mx-4 
                bg-cover bg-center transition-all duration-1000 delay-100 ease outline-4 outline-offset-2 outline-accent shadow-[0px_0px_50px_#EBE4D1]
                z-0 w-[110px] h-[110px] rounded-full"
              />

            </motion.div>

            <div className="flex z-0 ltr:max-md:translate-x-[0%] ltr:max-[400px]:translate-x-[-10%] rtl:max-md:translate-x-[0%] justify-between xl:justify-around  gap-4">
              <div className="   md:w-[60%] mt-10 ">
                <h1 className="
              text-5xl mb-9 z-0 xl:w-[60%]  max-md:text-center text-secondary first-line:text-primary 
                ltr:max-md:translate-x-[3%] rtl:max-md:translate-x-[-30%] 
               max-lg:w-[100%] rtl:w-[60%] leading-[1.3]  font-[Amiri] font-bold">{subjectHeader[language].title}</h1>
                <p className=" z-0
              text-[24px]   w-[100%]  max-md:text-center
               ltr:max-md:translate-x-[4%] rtl:max-md:translate-x-[0%]   font-[Tajawal] font-medium dark:text-accent text-accentTo">{subjectHeader[language].Detailed}</p>

                <div>
                  <div className="flex m-6 gap-4">
                    <TwitterIcon className='text-secondary' sx={{
                      fontSize: 40,

                    }} />
                    <InstagramIcon className='text-pink-300  dark:text-pink-300' sx={{
                      fontSize: 40,

                    }} />
                    {window.innerWidth < 768 ? (
                      <GitHubIcon className='dark:text-accent ' sx={{
                        fontSize: 40,

                      }} />

                    ) : null}
                    {window.innerWidth < 768 ? (
                      <DownloadBut />

                    ) : null}
                  </div>
                  <div
                    className='flex relative  max-[910px]:left-[10%] ltr:left-[5%] rtl:right-[5%]   justify-between xl:justify-start  max-md:hidden *:self-center  w-[100%] h-auto'>
                    <GitHubBut />
                    <DownloadBut />
                  </div>
                </div>
              </div>

              <Lottie
                animationData={animation}
                autoplay
                loop
                className=" max-md:hidden ltr:rotate-y-180 w-[300px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero