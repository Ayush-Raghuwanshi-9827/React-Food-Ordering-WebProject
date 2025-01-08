import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeals } from './TopMeal';
import  Slider from 'react-slick';
import CarsouelIteam from './Carsouelteam';

 const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  }
  return <div>
    {console.log(Slider,CarsouelIteam, topMeals)}

          <Slider {...settings}>
             {topMeals.map((iteam) =>(
              <CarsouelIteam 
              image={iteam.image} 
              title={iteam.title}/>
             ))}
          </Slider>
    </div>
}

export default MultiItemCarousel;
