import React from 'react'
import Scooter from '../../assets/footer-scooter.png'
import resources from '../../constants/resources'
import about from '../../constants/about'
import legal from '../../constants/legal'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


function Footer() {
  return (
    <div id='contacts' className='w-full bg-scooter flex flex-col  z-0 max-w-1500 relative  mx-auto h-fit lg:h-[500px]'>

       <div className='pt-8 lg:pt-0 flex flex-row flex-1 lg:justify-end'>

     
        <img src={Scooter} className=' hidden lg:block h-auto w-auto  absolute -top-24  left-0 ' alt="" />



        <div className='flex  flex-col px-3 md:px-32  lg:px-12 lg:pr-40 md:w-full h-fit  lg:pt-32 '>

          <div className='w-full h-fit flex flex-col  md:flex-row gap-y-10 md:mb-10 lg:mb-0 flex-1 justify-between'>

            <ul className='text-white  flex  flex-col lg:gap-8 gap-4 '>

                <h6 className='text-xl font-semibold font-ubuntu mb-3'>About</h6>

                  {about.map((item)=>(
                    <li key={item.id} className='font-ubuntu-light text-sm  ' >
                      {item.destination}
                    </li>
                  ))
                  }

                </ul>
                
                
                
                <ul className='text-white flex flex-col gap-y-8 lg:gap-8 gap-4'>
                
                <h6 className='text-xl font-semibold font-ubuntu mb-3'>Resources</h6>
                
                  {resources.map((item)=>(
                    <li key={item.id} className='font-ubuntu-light text-sm ' >
                      {item.destination}
                    </li>
                  ))
                  }

                </ul>
                
                
                <ul className='text-white flex flex-col gap-y-8 lg:gap-8 gap-4'>
                
                <h6 className='text-xl font-semibold font-ubuntu mb-3'>Legal</h6>
                
                  {legal.map((item)=>(
                    <li key={item.id} className='font-ubuntu-light whitespace-nowrap text-sm ' >
                      {item.destination}
                    </li>
                  ))
                  }

            </ul>

          </div>

          <div  className=' flex flex-row gap-x-3 pt-4 h-fit r w-fit lg:self-end   '>

              <div className='h-8 aspect-square flex justify-center  items-center rounded-full'>

                <FacebookOutlinedIcon
                style={{color:'white' , fontSize:'36px'}}
                />

              </div>
              
              <div  className='h-8 aspect-square bg-white flex justify-center items-center rounded-full'>

                <XIcon/>

              </div>

              <div  className='h-8 aspect-square flex justify-center items-center bg-white rounded-full'>
                  <InstagramIcon/>
              </div>
          

          </div>
          
         
          
        </div>
        

       </div>
       <div className='w-full flex justify-center lg:absolute bottom-0  py-4 lg:pb-8'>
        <span className='text-sm font-ubuntu font-light leading-loose text-white'>
        © Copyright 2021. All rights reserved.
        </span>
       </div>
      
    </div>
  )
}

export default Footer
