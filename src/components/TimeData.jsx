import React from 'react'

function TimeData({ year, title, duration, instituition, description }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">

      <li className="mb-10 ml-4">

        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />

        <span className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <p className="inline-block px-2 py-1 font-semibold text-white bg-[#573e04] rounded-md">
            {year}
          </p>

          <p className="text-lg font-semibold text-[#573e04]">
            {title}
          </p>

          <p className="my-1 text-sm font-nomral leadin-none text-stone-400">
            {duration} Year(s)
          </p>

          <p className="text-sm  font-semibold text-[#573e04]">
            {instituition}
          </p>
        </span>

        <span>
          <p className="my-2 font-normal text-stone-500 text-justify">
            {description}
          </p>
        </span>
      </li>
    </ol >
  )
}

export default TimeData