import React, { useEffect, useState } from 'react'
import { BsMoonStars } from 'react-icons/bs'
import { PiSunHorizonBold } from 'react-icons/pi'
import useHandleTheme from '../hook/useHandleTheme'

function HandleTheme() {
  const { theme, handleThemeSwitch } = useHandleTheme()

  return (
    <div className="fixed flex items-center top-10 left-10 z-[99] bg-white w-16 h-8 rounded-full shadow-inner shadow-stone-500 cursor-pointer border dark:bg-stone-400 dark:border-stone-300"
    >
      <button
        className="bg-white border w-7 h-7 ml-[0.15rem] dark:mr-[0.15rem] rounded-full shadow-sm shadow-black duration-500 ease-in-out dark:translate-x-[1.9rem]"
        onClick={handleThemeSwitch}
      >
        <div className="w-full h-full flex items-center justify-center">
          {
            theme === 'dark'
              ? <PiSunHorizonBold size={15} color={'#ddab35'} />
              : <BsMoonStars size={15} color={'#1e1a65'} />
          }
        </div>
      </button>
    </div >
  );
}

export default HandleTheme
