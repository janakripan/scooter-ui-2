import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../../assets/shared/TestimonialCard";
import testimonials from "../../constants/testimonials";
import SharedButton from '../../assets/shared/SharedButton'
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

function SlideShow() {
    const sliderRef = useRef(null); 
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        

                
                    {testimonials.map((item)=>(
                        <TestimonialCard
                        key={item.id}
                         star={item.stars}
                        content={item.content}
                        dp={item.pic}
                        name={item.name}
                        designation={item.designation}
                        />
                    ))}
                


        
      </Slider>

      <div className=' flex w-full h-fit mt-10 justify-center flex-row gap-x-10 '>
        <SharedButton className=' group bg-transparent  hover:bg-scooter hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 border-scooter w-14 aspect-square rounded-full  flex flex-row justify-centr items-center'
          onClick={() => sliderRef.current.slickPrev()}
        >
          <NavigateBeforeSharpIcon className='text-scooter group-hover:text-white h-full w-full transition-colors duration-300' />

        </SharedButton>
        

        <SharedButton className=' group bg-transparent  hover:bg-scooter hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 border-scooter w-14 aspect-square rounded-full  flex flex-row justify-centr items-center'
          onClick={() => sliderRef.current.slickNext()}
        >
          <NavigateNextSharpIcon className='text-scooter group-hover:text-white h-full w-full transition-colors duration-300' />

        </SharedButton>
        </div>
    </div>
  );
}

export default SlideShow;