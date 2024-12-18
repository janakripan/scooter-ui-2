import React from 'react'
import golfBag from '../../constants/golfBag'
import shopping from '../../constants/shopping'
import hexaTick from '../../assets/hexagon-tick.png'
import golfRack from '../../assets/golf.png'
import golfscooter from '../../assets/golfScooter.png'
import shoppingRack from '../../assets/shoppingRack.png'
import shoppingScooter from '../../assets/shoppingScooter.png'
import SharedButton from '../../assets/shared/SharedButton'


function Accessories() {
  return (
    <div className='w-full max-w-[1500px] my-20 px-12 flex flex-col items-center mx-auto'>

        <h2 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-scooter font-bold font-ubuntu mt-8'>
                Multiple Accessories
        </h2>
        <span className='text-base text-balance mx-auto font-ubuntu  mt-10'>
        There are multiple modes for the scooter for your multiple needs.
        </span>

        <div className='w-full flex flex-col gap-y-7 lg:gap-y-0 lg:flex-row my-20 items-center justify-between'>

           <div>

                <h3 className='font-semibold font-ubuntu text-2xl md:text-3xl lg:text-4xl text-scooter'>
                Golf Bag Rack
                </h3>


                <ul className='mt-8'>

                    {golfBag.map((item)=>(
                        <li key={item.id} className='flex flex-row items-center py-3 gap-4 text-scooter '>
                            <img src={hexaTick} className='w-6 aspect-square md:w-10 lg:w-12' alt="" />
                    
                            {item.content}
                    
                    
                        </li>
                    ))}

                </ul>
           </div>
            <div>
                <img src={golfRack} alt="" />
                
            </div>
            <div>

                <img src={golfscooter} alt="" />

            </div>


        </div>
        <div  className='w-full flex flex-col-reverse lg:flex-row  items-center my-20 justify-between' >

            <div className=' flex  items-center pt-8'>
                <img src={shoppingScooter} className='  absolute  lg:scale-75 xl:scale-100 left-0' alt="" />   
            </div>

            <div className='flex  items-center lg:ml-52 mb-40 md:mb-60 mt-5 lg:mt-0 lg:mb-0 justify-center'>
                    <img src={shoppingRack} alt="" />
            </div>


            <div>

                <h3 className='font-semibold font-ubuntu text-2xl md:text-3xl lg:text-4xl text-scooter'>

                Shopping Rack

                </h3>

                <ul className='mt-8'>

                    {shopping.map((item)=>(
                        
                        <li key={item.id} className='flex flex-row items-center py-3  gap-4 text-scooter'>
                            <img src={hexaTick} alt="" />
                    
                                {item.content}

                        </li>

                    ))}

                </ul>


            </div>
            

        </div>


        <SharedButton className=' bg-transparent h-16 w-12/12  lg:w-[500px] text-scooter border-[2px] border-scooter rounded-xl font-ubuntu
                                text-lg md:text-xl font-bold mt-40 lg:mt-8 ' > 
        More Accessories Coming Soon
        </SharedButton>


      
    </div>
  )
}

export default Accessories
