import React from 'react'
import ProjectItem from '../components/ProjectItem'
import data from '../data/projectsData.js'

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-8">

      <h1 className="text-4xl font-bold text-center text-[#573e04]">Projects</h1>

      <p className="text-center py-8 text-[#573e04]">
        This is my portfolio. Here you'll find some of my personal and academic projects.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        {
          data.map(({ id, image, title }) => (
            <ProjectItem key={id} image={image} title={title} />
          ))
        }
      </div>

    </div>
  )
}

export default Projects