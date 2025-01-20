// BannerSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSlider} from "../Hooks/useSlider"




const BannerSlider: React.FC = () => {

  const {data} =useSlider()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Yumuşak geçişler
    arrows: false, // Okları gizle
  };

  return (
    <div className="container mx-auto  p-2  pt-10">
      <div className="w-full px-4">
        <Slider {...settings}>
          {data?.map((banner) => (
            <div key={banner.id} className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-3xl font-bold mb-4">{banner.title}</h2>
                <p className="text-lg">{banner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
