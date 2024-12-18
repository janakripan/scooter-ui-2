import React from 'react'
import scooterWhite from '../../assets/scooter-white.png'
import frontWheel from '../../assets/frontWheel.png'
import seat from '../../assets/seat.png'
import SharedButton from '../../assets/shared/SharedButton'

function Gallery() {
  return (
    <div  className=' w-full max-w-[1500px] my-20 px-4 md:px-12 flex flex-col items-center mx-auto' >

      <h2  className='text-3xl md:text-4xl lg:text-5xl text-center whitespace-nowrap text-scooter font-bold font-ubuntu mt-8'>

          Gallery

      </h2>


      <span className='text-base font-ubuntu text-center mt-10'>
      View gallery of our products and make yourself satisfied with our creation.
      </span>

      <div className='w-full h-fit mt-20 flex flex-col-reverse lg:flex-row  lg:justify-between items-center '>

        <div className='flex flex-col gap-y-4 lg:gap-y-14 lg:pt-48 ' >

                 <div>

                      <img src={scooterWhite} className='lg:scale-95 scale-80' alt="" />

                  </div>

                  <div className='flex flex-col items-center gap-y-4 lg:gap-y-8' >

                       <SharedButton className='bg-transparent h-16 w-10/12 md:w-[500px] text-scooter border-[2px] border-scooter rounded-xl font-ubuntu
                                            md:text-xl text-lg font-bold ' >
                          Battery Images
                        </SharedButton>


                        <SharedButton className='bg-transparent h-16 w-10/12 md:w-[500px] text-scooter border-[2px] border-scooter rounded-xl font-ubuntu
                                      md:text-xl text-lg font-bold ' >
                          Spare Parts Images
                        </SharedButton>


                        <SharedButton className='bg-transparent h-16 w-10/12 md:w-[500px] text-scooter border-[2px] border-scooter rounded-xl font-ubuntu
                                      md:text-xl text-lg font-bold ' >
                          Charging Cable Images
                        </SharedButton>


                  </div>


        </div>

        <div className='flex flex-col   lg:gap-y-32 ' >

                
                      <img src={seat} className='scale-95' alt="" />
                      <img src={frontWheel} className='scale-95' alt="" />

                

        </div>


      </div>
      
    </div>
  )
}

export default Gallery
