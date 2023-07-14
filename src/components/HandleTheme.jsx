import React, { useEffect, useState } from 'react'
import { BsCloudMoonFill } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'

function HandleTheme() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      onClick={handleThemeSwitch}
      className="fixed top-10 left-10 z-[99]"
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