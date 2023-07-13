import React from 'react'

function ProjectItem({ image, title }) {
  return (
    <div className="w-full relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#573e04] ">
      <img
        src={image}
        alt={`${title}-project`}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:flex w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <a href="link">
          <p className="text-center p-3 m-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg w-28" >More Info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem