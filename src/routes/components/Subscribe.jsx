import React, { useState } from 'react'
import SharedButton from '../../assets/shared/SharedButton'

function Subscribe() {
    const [email , setEmail] = useState("")
    
  return (
    <div className='w-full h-fit py-28 flex flex-col justify-center items-center px-4'>


        <div className='mx-auto h-fit mb-10 '>

            <h2 className='text-scooter font-semibold text-2xl md:text-3xl xl:text-4xl text-center font-ubuntu my-5'>
            Subscribe To Newsletter
            </h2>
            <span className='text-base text-center font-ubuntu '>
            Subscribe to our newsletter to get amazing offers in future.
            </span>

        

        </div>
        <form action="" className='w-full'>
            <div className='scale-80 lg:scale-100 mt-10 h-14 w-full lg:w-6/12 mx-auto gap-x-4 flex flex-row' >
                <label htmlFor="email">

                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 lg:h-full border-none lg:hover:scale-105 transition-all duration-300 rounded-lg shadow-custom-blur sm:text-sm"
                />
                <SharedButton className='bg-scooter whitespace-nowrap rounded-lg shadow-custom-blur lg:hover:scale-105 transition-all duration-300  text-white '>
                    Get Started
                </SharedButton>
            </div>
        </form>


      
    </div>
  )
}

export default Subscribe
