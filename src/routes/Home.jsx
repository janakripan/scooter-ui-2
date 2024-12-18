import React from 'react'
import Hero from './components/Hero'
import Specs from './components/Specs'
import ProductInformation from './components/ProductInformation'
import motor from '../assets/motor-split.png'
import Accessories from './components/Accessories'
import Gallery from './components/Gallery'
import Colors from './components/Colors'
import Testimonial from './components/Testimonial'
import Subscribe from './components/Subscribe'

function Home() {
  return (
   <main className="overflow-x-hidden">

    <section className='relative  max-w-screen-xl mx-auto'>  

          <Hero/>

    </section>


    <section className='max-w-screen-xl mx-auto' >
          <Specs/>
    </section> 
      

    <section id='products' className='max-w-screen-xl mx-auto'>
      <ProductInformation/>
    </section>

    <section className='mt-10 max-w-screen-xl mx-auto'>
      <div className='max-w-[1500px] w-full h-full mx-auto  flex flex-col items-center  px-4  lg:px-12'>

        <h2 className='text-3xl text-scooter text-center md:text-4xl lg:text-5xl font-bold font-ubuntu md:mt-8'>
        High Efficiency Motor
        </h2>

        <span className='text-base text-center font-ubuntu text-balance mt-6'>
          More torque for powerful riding with 22% maximum hill climbing capability.
        </span>
        <div className="w-full">
          <img src={motor} className='w-auto h-auto' alt="" />
        </div>

      </div>
    </section>


    <section className='max-w-screen-xl mx-auto'>
      <Accessories/>
    </section>
   


    <section id='gallery' className='max-w-screen-xl mx-auto'>
      <Gallery/>
    </section>
    

    <section className='max-w-screen-xl mx-auto'>
      <Colors/>
    </section>
    

    <section>
      <Testimonial/>
    </section>

    <section className='max-w-screen-xl mx-auto'>
      <Subscribe/>
    </section> 


    
   </main>
  )
}

export default Home
