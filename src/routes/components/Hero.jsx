import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CircularText from '../../assets/shared/Circulartext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import scooter from '../../assets/scooter.png'
import SharedButton from '../../assets/shared/SharedButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Hero() {
  return (
      <div className=' h-screen  lg:h-fit overflow-hidden   flex  flex-col  '>
          <div className='max-w-screen-xl w-full h-fit lg:h-fit  flex flex-row  px-4  md:px-12  '>

              <div className=' h-fit mt-12 w-fit'>

                  <h1 className=' font-light font-ubuntu text-5xl lg:text-7xl text-scooter uppercase  '>

                  Let's ride <br />
                  <span className='font font-extrabold'> the future.</span>

                  </h1>
                  <div className='w-60 lg:w-80 h-1 bg-scooter mt-12'></div>

                  <p className='text-lg lg:text-xl  font-normal w-full max-w-sm mt-10'>Simple and sleek design with users in mind</p>

                  <div className=' lg:hidden'>

                    <img src={scooter} alt="" />

                  </div>



                  <div className='flex flex-row items-center justify-between mt-10 max-w-sm'>
                    <button className='scale-75 lg:scale-100 flex flex-row justify-between  items-center  font-semibold text-scooter font-ubuntu-medium w-40 '>
                      
                      <div className='scale-75 lg:scale-100 bg-scooter w-12 aspect-square flex items-center justify-center' >
                        <ArrowRightAltIcon  style={{ color: 'white' }}/>
                      </div>

                      Buy now


                    </button>

                    <button className="scale-75 lg:scale-100 h-20 w-44 flex flex-row items-center  justify-between ">
                      <div className='scale-75 lg:scale-100 w-20 flex items-center aspect-square'>
                            <p className=' text-xs text-balance text-left font-medium font-ubuntu text-scooter '> Watch our video how it works</p>
                      </div>
                      <div className='scale-75 lg:scale-100 w-20 flex items-end h-20'>
                        <CircularText  text="how.it.works." radius={30} className="text-xs text-scooter  " icon={<PlayArrowIcon style={{fontSize:'20', color:"scooter"}}/>} />
                      </div>

                    </button>


                  </div>
              </div>

              


              <div className='  flex h-fit flex-col justify-start'>

                 <div className=' hidden lg:block z-20'>
                 <img className='scale-110 mt-12 z-20' src= {scooter} alt="" />
                 </div>

                
                 
                 <div className=" hidden lg:block backgroungBlob bg-gray-200 absolute -right-28 top-20 w-6/12 -z-10 h-[400px] rounded-s-full   "></div>
              </div>
             

             





          </div>
          <div className='flex w-full h-fit   flex-row  justify-end gap-x-5 px-16'>
                          <h2 className='text-6xl md:text-8xl lg:text-9xl font-calistoga font-bold  bg-clip-text  border-collapse w-fit border-scooter'>
                            01
                          </h2>

                          <div className='flex items-center justify-center' >
                             <SharedButton className='bg-transparent w-8 h-8 flex items-center justify-center aspect-square border-[1px] p-2 border-scooter rounded-l-full'>
                              <KeyboardArrowLeftIcon/>
                             </SharedButton>
                             <SharedButton className='bg-transparent w-8 h-8 flex items-center justify-center aspect-square  border-[1px] border-scooter rounded-r-full'>
                              <KeyboardArrowRightIcon/>
                             </SharedButton>
                          </div>
                 </div>
        
      </div>
  )
}

export default Hero
