import React from 'react'
import allData from '../data/resumeDataImg'

function Resume() {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">

      <h1 className="text-4xl font-bold text-center text-[#573e04] mb-10">
        Resume
      </h1>

      <div className="flex flex-col gap-4">

        <img
          src="https://avatars.githubusercontent.com/u/86579704?v=4"
          alt="Jonn's resume photo"
          className="w-60 rounded-full m-auto shadow-xl shadow-gray-400"
        />

        <p className="inline-block my-2 font-normal text-stone-500 text-justify">
          I have always been an enthusiast and passionate about technology. I believe in its ability to include and bring people together, solving the simplest to the most complex problems of our daily lives.
        </p>

        <p className="inline-block my-2 font-normal text-stone-500 text-justify">
          My trajectory with programming started after the last global isolation events, where I had the opportunity to start my transition to the IT area, expanding my knowledge in the area. I intend to become a Senior Full Stack Web Developer and delve into mobile development. Always focusing on communication, learning and user experience.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-semibold text-center text-[#573e04] mt-10">Technologies that I know</h4>

        {
          allData.map((item) => (
            <div className="flex flex-wrap items-center justify-center">
              {
                item.map(({ src, alt, index }) => (
                  <img key={index} src={src} alt={alt} />
                ))
              }
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Resume