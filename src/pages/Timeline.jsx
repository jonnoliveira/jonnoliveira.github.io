import React from 'react'
import TimeData from '../components/TimeData'
import data from '../data/timeData'

function Timeline() {
  return (
    <div id="timeline" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">

      <h1 className="text-4xl font-bold text-center text-[#573e04]">
        Timeline
      </h1>

      {
        data.map(({ id, year, title, duration, instituition, description }) => (
          <TimeData
            key={id}
            year={year}
            title={title}
            duration={duration}
            instituition={instituition}
            description={description}
          />
        ))
      }
    </div>
  )
}

export default Timeline