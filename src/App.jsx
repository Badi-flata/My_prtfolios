import { useState, useEffect } from 'react'
import { Button, Stack } from '@mui/material';
import Header from './faces/1-header';
import Hero from './faces/2-hero';
import Main from './faces/5-mian';
import About from './faces/3-About';
import Skills from './faces/4-Skills';
import Contact from './faces/6-contact';
import Footer from './faces/7-footer';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PicturesContext } from './components/turnPictures'
import GlobalStyles from '@mui/material/GlobalStyles';
import { animate, scroll } from "framer-motion"
import { UlSmolScreen } from '../src/components/setLanguage'
import './App.css'

function App() {
  const { showNav } = UlSmolScreen()

  useEffect(() => {
    if (showNav === false) {
      const controls = [];
      document.querySelectorAll(".App > div").forEach((item) => {
        const stop = scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
          target: item,
          offset: ["start end", "end end", "start start", "end start"],
        });
        controls.push(stop);
      });

      // تشغيل دالة الإيقاف عند تغير الحالة
      return () => {
        controls.forEach((stop) => stop());
      };
    }
  }, [!showNav]);

  return (

    <>
      <StyledEngineProvider injectFirst>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <PicturesContext>
          <div className='container-1 Ap snap-start  dark:bg-dark-200 '>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Main />
            <Contact />
            <Footer />
          </div>
        </PicturesContext>
      </StyledEngineProvider>
    </>

  )
}

export default App
