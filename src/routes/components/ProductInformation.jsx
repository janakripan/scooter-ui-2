import React from 'react'
import scooterSplit from '../../assets/scooter-split.png'
import productInfo from '../../constants/productInfo'
import hexaTick from '../../assets/hexagon-tick.png'

function ProductInformation() {
  return (
    <div className='w-full h-fit p-12 mt-10 flex flex-col max-w-[1500px] mx-auto items-center'>

        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center text-scooter font-bold font-ubuntu mt-8 '>
        Product Information
        </h2>
        <span className='text-base font-ubuntu text-center  mt-6'>
        Our Scooter has following unique design and technology features:
        </span>
        <div className='w-full h-fit flex flex-col md:flex-row mb-6  items-center md:justify-between '>
            <div>

                <img src={scooterSplit} alt="" />

            </div>
            <div>

                <ul className= 'w-full '>

                    {productInfo.map((item)=>(
                        <li key={item} className='flex flex-row items-center py-3 gap-4' >

                            <img src={hexaTick} className='w-6 md:w-8 lg:w-12 aspect-square' alt="" />
                            <span className='text-base font-ubuntu  '> {item.content} </span>

                        </li>
                    ))}
                </ul>

            </div>
        </div>


      
    </div>
  )
}

export default ProductInformation
