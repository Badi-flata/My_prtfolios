import * as React from 'react';
import { styled } from '@mui/material/styles';
import Styled from 'styled-components';

//
import {
  Stack, Chip, Avatar,
  Typography, Switch, FormControlLabel, FormGroup
} from '@mui/material';

//import icons
import { ArrowDownToLine, Languages } from 'lucide-react';

import { useLanguageStore, dataTitles } from './setLanguage';

export const ChagneTheme = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 1,
  borderRadius: 66 / 3,
  '& .MuiSwitch-switchBase': {
    margin: 5,
    padding: 0,

    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(31px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#030712',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        borderColor: '#001e3c',
        backgroundColor: '#030712',
        ...theme.applyStyles('dark', {
          backgroundColor: '#404147',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#D8DADF',
    width: 20,
    height: 20,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#FFFFFF',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#03892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,

    backgroundColor: '#FFFFFF',
    borderRadius: 44 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#030712',
    }),
  },
}));



export function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}




export const GitHubBut = () => {
  const { language } = useLanguageStore();
  const { ui } = dataTitles;

  return (
    <button href="#" className="flex scale-[1.3] xl:scale-[1.5] overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        <span className="ml-1 text-white">{ui[language].starGithub}</span>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex">
        <svg className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fillRule="evenodd" />
        </svg>
        <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">6</span>
      </div>
    </button>
  );
}




export const Loader = () => {
  return (
    <StyledWrapper>
      <div className="hole">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = Styled.div`
  .hole {
    display: flex;
    align-items: center;
    justify-content: center;
  }

 i {
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(136, 97, 14, 0);;
  border-radius: 140px;
  opacity: 0;
  animation-name: scale;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

i:nth-child(1) {
  animation-delay: 0.3s;
}

i:nth-child(2) {
  animation-delay: 0.6s;
}

i:nth-child(3) {
  animation-delay: 0.9s;
}

i:nth-child(4) {
  animation-delay: 1.2s;
}

i:nth-child(5) {
  animation-delay: 1.5s;
}

i:nth-child(6) {
  animation-delay: 1.8s;
}

i:nth-child(7) {
  animation-delay: 2.1s;
}

i:nth-child(8) {
  animation-delay: 2.4s;
}

i:nth-child(9) {
  animation-delay: 2.7s;
}

i:nth-child(10) {
  animation-delay: 3s;
}

@keyframes scale {
  0% {
    transform: scale(2.3);
    opacity: 0;
    box-shadow: 0px 0px 50px #f8aa02;
  }
  50% {
    transform: scale(1) translate(0px, -5px);
    opacity: 1;
    box-shadow: 0px 8px 20px rgb(174, 121, 6);
  }
  100% {
    transform: scale(0.1) translate(0px, 5px);
    opacity: 0;
    
    box-shadow: 0px 10px 20px rgb(209, 112, 14);
  }
}`;


export const LoaderScreen = () => {
  return (
    <StyledWrapper2>
      <div className="container">
        <div className="loader" />
        <div className="loader" />
        <div className="loader" />
      </div>
    </StyledWrapper2>
  );
}

const StyledWrapper2 = Styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    width: 160px;
    height: 100px;
    margin-left: -80px;
    margin-top: -50px;
    border-radius: 5px;
    background: #1e3f57;
    animation: dot1_ 3s cubic-bezier(0.55,0.3,0.24,0.99) infinite;
  }

  .loader:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
    border-radius: 3px;
    background: #3c517d;
    animation-name: dot2_;
  }

  .loader:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 0 0 5px 5px;
    background: #6bb2cd;
    animation-name: dot3_;
  }

  @keyframes dot1_ {
    3%,97% {
      width: 160px;
      height: 100px;
      margin-top: -50px;
      margin-left: -80px;
    }

    30%,36% {
      width: 80px;
      height: 120px;
      margin-top: -60px;
      margin-left: -40px;
    }

    63%,69% {
      width: 40px;
      height: 80px;
      margin-top: -40px;
      margin-left: -20px;
    }
  }

  @keyframes dot2_ {
    3%,97% {
      height: 90px;
      width: 150px;
      margin-left: -75px;
      margin-top: -45px;
    }

    30%,36% {
      width: 70px;
      height: 96px;
      margin-left: -35px;
      margin-top: -48px;
    }

    63%,69% {
      width: 32px;
      height: 60px;
      margin-left: -16px;
      margin-top: -30px;
    }
  }

  @keyframes dot3_ {
    3%,97% {
      height: 20px;
      width: 40px;
      margin-left: -20px;
      margin-top: 50px;
    }

    30%,36% {
      width: 8px;
      height: 8px;
      margin-left: -5px;
      margin-top: 49px;
      border-radius: 8px;
    }

    63%,69% {
      width: 16px;
      height: 4px;
      margin-left: -8px;
      margin-top: -37px;
      border-radius: 10px;
    }
  }`;





export const DownloadBut = () => {

  const { language } = useLanguageStore();
  const { ui } = dataTitles;

  const handleDownload = (e) => {
    e.preventDefault();
    const message = ui[language].cvUnavailable;
    alert(message);
  };


  return (
    <StyledDownloadBut>
      <div className="containerD max-md:bottom-[35%] bottom-[10%] xl:rtl:right-full
       rtl:right-[30%] lg:rtl:right-[-100%] max-[910px]:ltr:left-[40%] 
       xl:left-[110%]">
        <div className="tooltip rtl:left-[66%] ltr:left-[36%]">
          <p className="font-[Tajawal] font-medium even:text-[#a19e97]">{ui[language].downloadCV}</p>
        </div>
        <a className="bg-[#262c40] " onClick={handleDownload}>
          <svg viewBox="0 0 256 256" height={32} width={48} xmlns="http://www.w3.org/2000/svg">
            <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" fill="currentColor" /></svg></a>
      </div>
    </StyledDownloadBut>
  );
}

const StyledDownloadBut = Styled.div`
/* container style */
  .containerD{
    transform: translateY(-20px);
    position: relative;
     border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .containerD:hover{
    animation-play-state: paused;
  }

@keyframes pulse {
    0%, 100% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: translateY(-20px) scale(1); opacity: 1; }
}

/* link style */
  a {
  scale:1.1;
    color: #EBE4D1;
    padding: 10px 15px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.397);
   
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 600;
    gap: 8px;
    border-radius: 5px;
    margin: 0 5px;
    transition: 0.2s;
    border: 1px solid transparent;
  }

  a:hover {
    border-color: rgba(255, 255, 255, 0.623);
    background: linear-gradient(
      to bottom,
      #C8CBD4
      rgba(62, 51, 51, 0.247),
      #C8CBD4
    );
    box-shadow: 9px 8px #C8CBD4;
    transform: translateY(-6px);
  }

  a:active {
    transform: translateY(2px);
    box-shadow: none;
  }

  /* masseg on buttom */
  .tooltip {
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    bottom:0%; /* Position above the icon */
    margin-left: -100px; /* Center the tooltip */
    opacity: 0;
    transition:
      opacity 0.5s,
      transform 0.5s;
    transform: translateY(-14px);
  }


  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  .containerD:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateY(-26px);
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .container:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    animation: bounce 0.6s ease;
  }`;


