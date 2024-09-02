import React from 'react'
import images from "../../Components/about/images.jpg"
import { IoArrowForward } from 'react-icons/io5'



function About1() {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap justify-center mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap  flex-col md:flex-row items-center'>
          <img className='md:h-80' src={images} alt="about" />
          <ul className=''>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Front-end Technology</h1>
                <p className='text-sm md:text-md leading-tight'>A Front-End Developer is someone who creates websites and web applications.

                  The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works.

                  You can think of Front-End as client-side and Back-End as server-side.

                  The basic languages for Front-End Development are HTML, CSS, Reactjs,tailwindcss,bootstrap and JavaScript.
                  we have the all language knowledge</p>
              </span>

            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />



              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Back-end Technology</h1>
                <p className='text-sm md:text-md leading-tight'>As a back-end web developer, you’re the one who builds out the database, integrates APIs, and sets up the server-side technologies that bring a website to life. Without you, the website wouldn’t function. So if you’re a pro at server-side programming, you might be the perfect fit for a client’s next web project. we have back-end knowledge with JavaScript language .</p>
              </span>

            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />




              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Technology</h1>
                <p className='text-sm md:text-md leading-tight'>database is an organized collection of data or a type of data store based on the use of a database management system (DBMS), the software that interacts with end users, applications, and the database itself to capture and analyze the data. The DBMS additionally encompasses the core facilities provided to administer the database. The sum total of the database, the DBMS and the associated applications can be referred to as a database system. Often the term "database" is also used loosely to refer to any of the DBMS, the database system or an application associated with the database Mongo db and sql database are used in my project</p>
              </span>

            </div>


          </ul>
        </div>
      </div>

    </div>
  )
}

export default About1

