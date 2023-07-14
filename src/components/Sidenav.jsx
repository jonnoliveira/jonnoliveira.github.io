import React, { useState } from "react"
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { MdOutlineTimeline } from "react-icons/md"

function Sidenav() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        size={30}
        className="fixed top-10 right-10 z-[99] md:hidden dark:text-white cursor-pointer"
      />
      {
        nav && (
          <div className="fixed w-full h-screen bg-white/90 dark:bg-slate-400 flex flex-col justify-center items-center z-20">
            <a
              href="#home"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 dark:bg-stone-800 dark:shadow-stone-400 dark:text-white"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>

            <a
              href="#resume"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 dark:bg-stone-800 dark:shadow-stone-400 dark:text-white"
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </a>

            <a
              href="#timeline"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 dark:bg-stone-800 dark:shadow-stone-400 dark:text-white"
            >
              <MdOutlineTimeline size={20} />
              <span className="pl-4">Timeline</span>
            </a>

            <a
              href="#projects"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 dark:bg-stone-800 dark:shadow-stone-400 dark:text-white"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>

            <a
              href="#contact"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 dark:bg-stone-800 dark:shadow-stone-400 dark:text-white"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        )
      }
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">

          <a href="#home" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineHome size={20} />
          </a>


          <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsPerson size={20} />
          </a>

          <a href="#timeline" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <MdOutlineTimeline size={20} />
          </a>

          <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineProject size={20} />
          </a>

          <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div >
  )
}

export default Sidenav