import React, { useEffect, useState } from 'react'
import { BsCloudMoonFill } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'
import useHandleTheme from '../hook/useHandleTheme'

function HandleTheme() {
  const { theme, handleThemeSwitch } = useHandleTheme()

  return (
    <button
      onClick={handleThemeSwitch}
      className="fixed top-10 left-10 z-[99] dark:text-white"
    >
      {
        theme === 'dark'
          ? <FaRegSun size={30} />
          : <BsCloudMoonFill size={30} />
      }
    </button >
  );
}

export default HandleTheme