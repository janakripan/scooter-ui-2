import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function TestimonialCard({
    star,
    content,
    dp,
    name,
    designation,
}) {
  return (
    
        <div className='flex flex-col    w-[350px] h-[350px] p-12 hover:bg-white  
        items-center shadow-md hover:scale-105 hover:shadow-square transition-all duration-500 '>
        <div className='flex flex-col items-center'>
            <ul className='flex flex-row items-center'>
                {
                new Array(star).fill(" ")
                .map((star)=>(
                    <li key={star}>
                        <StarIcon style={{color:' #ffcc00'}} />
                    </li>
                ))}
                
            </ul>
            <p className='text-balance text-center my-5 font-ubuntu text-sm'>
                {content}
            </p>
            <div className='flex flex-row mt-12 justify-center gap-3'>

                <div className='w-12 aspect-square bg-cover bg-center  rounded-full'
                style={ { backgroundImage:`url(${dp})` } }>
                </div>
                
                <div>
                    <h6 className='font-medium text-ubuntu'>{name}</h6>
                    <span>{designation}</span>
                </div>

            </div>

        </div>

        <div className='w-full h-'>

        </div>
      
    </div>
    
  )
}

export default TestimonialCard
