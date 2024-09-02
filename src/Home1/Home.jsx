import React from 'react'
import avtarimg from "../Home1/avtarimg.webp"
import TextChanger from '../TextChanger'

function Home() {
  return (
    <div className=' text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'><TextChanger /></h1>
        <br />
        <p className='text-sm md:text-2xl tracking-tight '>Hello my name is lavkush vishwakarma basically i am from sultanpur but currently i live in noida , i did master of computer application from international insitute for special eduction which is affiated by Dr A P J abdul kalam technical university with 7.9 cgpa ?</p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-55 duration-300 hover:scale-105  font-bold rounded-3xl bg-red-600'>Contact me</button>
      </div>
      <div> <img className='' src={avtarimg} alt="" /></div>
    </div>
  )
}

export default Home


