import React from 'react'

function TimeData({ year, title, duration, instituition, description }) {
  return (
    <ol className="flex flex-col relative border-l border-stone-200">

      <li className="mb-10 ml-4">

        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />

        <span className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">

          <p className="inline-block px-2 py-1 font-semibold text-white bg-[#573e04] rounded-md dark:bg-white dark:text-black">
            {year}
          </p>

          <div className="flex flex-col gap-1 sm:flex-row sm:max-w-full sm:gap-5">

            <p className="text-[14px] sm:text-lg font-semibold text-[#573e04] dark:text-white">
              {title}
            </p>

            <p className="my-1 text-[12px] sm:text-sm font-nomral leadin-none text-stone-400 ">
              {duration} Year(s)
            </p>

            <p className="text-[12px] sm:text-sm font-semibold text-[#573e04] dark:text-white">
              {instituition}
            </p>

          </div>

        </span>

        <span>
          <p className="my-2 font-normal text-stone-500 text-justify dark:text-white/70">
            {description}
          </p>
        </span>
      </li>
    </ol >
  )
}

export default TimeData