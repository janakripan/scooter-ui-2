import React from 'react'
import SlideShow from './SlideShow';





  



function Testimonial() {





  return (
    <div className='w-full max-w-screen-xl lg:mt-64 px-4 md:px-12 md:py-20 flex flex-col items-center mx-auto bg-gray-50 ' >

        <h2  className=' text-xl md:text-3xl lg:text-4xl text-scooter font-bold font-ubuntu mt-8' >
            Testimonials
        </h2>

        <div className='w-full h-fit mt-10'>
        <SlideShow/>

        </div>

      

        
    </div>
  )
}

export default Testimonial
