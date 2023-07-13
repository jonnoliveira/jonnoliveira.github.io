import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Home() {
  return (
    <div id='home'>

      <img className="w-full h-screen object-cover scale-x-[-1]" src="src/assets/home-img.jpg" alt="home background image" />

      <div className='w-full h-screen absolute top-0 left-0 bg-white/60'>

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>

          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
            I'm Jonathas Oliveira
          </h1>

          <h2 className='flex sm:text-4xl text-3xl pt-4 text-gray-800'>

            <TypeAnimation
              sequence={[
                "Developer",
                1500,
                "Coder",
                1500,
                "Tech Lover",
                1500,
                "Gamer",
                1500,
                "Nature Lover",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />

          </h2>

          <div className='flex justify-evenly pt-6 max-w-[200px] w-full'>

            <FaLinkedinIn size={30} className='cursor-pointer' />
            <FaGithub size={30} className='cursor-pointer' />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home