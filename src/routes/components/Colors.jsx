import React, { useState } from 'react'
import whiteSCooter from '../../assets/scooterWhite-big.png'
import red from '../../assets/red-scooter.png'
import green from '../../assets/green-scooter.png'
import blue from '../../assets/blue-scooter.png'
import black from '../../assets/scooter-black.png'

function Colors() {

    const pictures  = [blue,green,red,black]
  

  return (
    <div  className='w-full max-w-[1500px] my-20  flex flex-col items-center mx-auto' >

        <h2 className='text-3xl md:text-4xl px-4 lg:text-5xl text-scooter font-bold font-ubuntu mt-8' >
            Colors
        </h2>

        <span  className='text-base font-ubuntu  mt-4  md:mt-10'>
             Checkout our products colors.
        </span>

        <div 
        style={{ backgroundImage: `url(${whiteSCooter})` }}
        className={`bg-cover bg-no-repeat bg-center h-[45vh] lg:w-full lg:h-screen mt-10 md:mt-20 flex flex-col justify-end`}
         >

            

            <div className='w-full translate-y-16 md:translate-y-28 lg:translate-y-60'>
               <ul className='flex flex-row justify-between w-full'>

               {pictures.map((item)=>(
                    <li key={item}>
                        <div className=' aspect-square hover:scale-110 transition-all duration-300 '>
                            <img src={item} alt="" />
                        </div>
                    </li>
                ))}

               </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Colors
