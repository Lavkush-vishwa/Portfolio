import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='footer' className=' flex justify-around bg-orange-800 text-white p-10 md:p-4 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-xl md:text-2xl font-normal'>please Contact to me follow the social media link</h3>
      </div>
      <ul className='text-sm md:text-xl'>
        <li className='flex gap-1 items-center'> <MdOutlineEmail size={20} />
          <a href="kushvishwa0@gmail.com">  kushvishwa0@gmail.com</a>
        </li>
        <li className='flex gap-1 items-center'> <CiLinkedin size={20} />
          <a href="https://www.linkedin.com/in/lavkushvish">  https://www.linkedin.com/in/lavkushvish</a>
        </li>
        <li className='flex gap-1 items-center'> <FaGithub size={20} />
          <a href="https://github.com/Lavkush-vishwa">https://github.com/Lavkush-vishwa</a>
        </li>
      </ul>

    </div>
  )
}

export default Footer
