import React from 'react'
import { allData, lookingTechs } from '../data/resumeDataImg'

function Resume() {
  return (
    <section id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">

      <h1 className="text-4xl font-bold text-center text-[#573e04] mb-10 dark:text-white">
        Resume
      </h1>

      <div className="flex flex-col gap-4">

        <img
          src="https://avatars.githubusercontent.com/u/86579704?v=4"
          alt="Jonn's resume photo"
          className="w-60 rounded-full m-auto shadow-xl shadow-gray-400 dark:shadow-stone-400"
        />

        <p className="inline-block my-2 font-normal text-stone-500 text-justify dark:text-white/70">
          I have always been an enthusiast and passionate about technology. I believe in its ability to include and bring people together, solving the simplest to the most complex problems of our daily lives.
        </p>

        <p className="inline-block my-2 font-normal text-stone-500 text-justify dark:text-white/70">
          My trajectory in programming began after the recent global isolation events, where I had the opportunity to start my transition to the IT area by taking an online course in full stack web development, being able to expand my knowledge in the area. I intend to become a Senior Full Stack Web Developer and delve into mobile development, always focusing on communication, learning, and user experience.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-semibold text-center text-[#573e04] mt-10 dark:text-white">Technologies that I know</h4>

        {
          allData.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center justify-center">
              {
                item.map(({ src, alt, id }) => (
                  <img key={id} src={src} alt={alt} />
                ))
              }
            </div>
          ))
        }

        <h4 className="text-xl font-semibold text-center text-[#573e04] mt-10 dark:text-white">Keeping an eye on:</h4>

        <div className="flex flex-wrap items-center justify-center">

          {
            lookingTechs.map(({ src, alt, id }) => (
              <img key={id} src={src} alt={alt} />
            ))
          }

        </div>

      </div>
    </section>
  )
}

export default Resume