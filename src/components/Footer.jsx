import React from 'react'
import { FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
import { TbBrandVite, TbBrandTailwind } from 'react-icons/tb';

function Footer() {
  return (
    <footer className="bg-[#573e04] w-full h-14 flex justify-center items-center dark:bg-black/95">

      <div className="flex justify-evenly items-center w-full opacity-50 max-w-[1040px] md:pl-20">

        <div className="flex gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/jonnoliveira/">
            <FaLinkedinIn size={20} color={'#fff'} className="cursor-pointer" />
          </a>

          <a target="_blank" href="https://github.com/jonnoliveira">
            <FaGithub size={20} color={'#fff'} className="cursor-pointer" />
          </a>
        </div>

        <p className="text-white">
          Created by Jonathas Oliveira - 2023
        </p>

        <div className="flex gap-6">
          <FaReact size={20} color={'#fff'} />
          <TbBrandVite size={20} color={'#fff'} />
          <TbBrandTailwind size={20} color={'#fff'} />
        </div>

      </div>
    </footer>
  )
}

export default Footer