import React from 'react'
import { FaCss3,FaFigma,FaHtml5,FaJs, FaReact } from 'react-icons/fa'
//import {SiRadis} from "react-icons/si"
import { FaGoogle } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { RiNetflixFill } from '@remixicon/react'
import { FaAmazon } from 'react-icons/fa'

const Experiece = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experince</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>

        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaHtml5 color="#E34F26" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaCss3 color="#15726" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaReact color="#E34F26" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaJs color="#E34F26" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaFigma color="#E34F26" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <SiMongodb color="green" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaGoogle color="red" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <FaAmazon color="gray" size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <RiNetflixFill color="blue" size={50} />
        </span>
        {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <SiRadis color="pink" size={50} />
        </span> */}

        </div>
        <div>
        <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <FaGoogle color="red" size={50 } className=''/>
          <span className='text-white'>
            <h2 className='leading-tight'>software engineer google</h2>
            <p className='text-sm leading-tight font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, tenetur tempore. Sit, </p>
            <ul className='text-sm p-2 '>
              <li>software developer</li>
              <li>senior sde developer</li>

            </ul>
          </span>
        </div>
        

        <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <RiNetflixFill color="red" size={50 } className=''/>
          <span className='text-white'>
            <h2 className='leading-tight'>software engineer Netflix</h2>
            <p className='text-sm leading-tight font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, tenetur tempore. Sit, </p>
            <ul className='text-sm p-2 '>
              <li>software developer</li>
              <li>senior sde developer</li>

            </ul>
          </span>
        </div>

        <div className='flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <SiMongodb color="red" size={50 } className=''/>
          <span className='text-white'>
            <h2 className='leading-tight'>software engineer mongodb</h2>
            <p className='text-sm leading-tight font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, tenetur tempore. Sit, </p>
            <ul className='text-sm p-2 '>
              <li>software developer</li>
              <li>senior sde developer</li>

            </ul>
          </span>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experiece
