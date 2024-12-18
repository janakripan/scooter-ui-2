import React from 'react'
import specData from '../../constants/specData'

function Specs() {
  return (
    <div className='w-full lg:my-20 h-fit lg:px-12 flex items-center j mx-auto max-w-screen-xl '>
        <ul  className='w-full  grid  lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-center'>

            {specData.map((item)=>(
                <li key={item} className=' lg:w-fit lg:h-fit flex items-center justify-center '>
                    <div className='scale-75  md:scale-75 xl:scale-100 shadow-custom-blur
                     w-44 h-32 flex flex-col  justify-center items-center '>
                        <h3 className='text-4xl text-scooter font-bold leading-tight items-end font-ubuntu '>
                            {item.title}
                            <span className='font-ubuntu text-sm pl-3'>

                                {item.unit}

                            </span>
                        </h3>
                        <span className='text-sm leading-tighter font-ubuntu '>

                            {item.spec}

                        </span>
                    </div>

                </li>
            ))}

        </ul>


      
    </div>
  )
}

export default Specs
