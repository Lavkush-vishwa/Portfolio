import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-3xl text-white font-bold '>Projects</h1>
      <div className='py-12 px-8  flex flex-wrap  gap-5 '>

        <ProjectCard title="Blood Bank App" main="this is the blood bank app using mern technology" />
        <ProjectCard title="Myntra Clone" main="this is the mynta clone frontend desin " />
        <ProjectCard title="Sarkari Result" main="sarkari result frontend design using react tailwind" />
        <ProjectCard title="Book store app " main="design bookstore app frontend desin" /> 
        <ProjectCard title="BarCode Genrator " main="this is the Name convert to the barcode" /> 
        <ProjectCard title="ToDo App " main="You Can add daily routine of your life activity" /> 
      </div>

    </div>
  )
}

export default Project
