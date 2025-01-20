import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTeacher } from '../Hooks/useTeacher';
import { useTranslation } from "react-i18next";



const Teachers: React.FC = () => {
    const { t } = useTranslation();
    const {data:teachers}=useTeacher()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto mb-7  p-2   overflow-visible" id="teachers"> 
           <h2 className=" px-3 font-semibold text-xl lg:text-3xl text-black font-jakarta pb-3">
         {t("titles.teachers")}
        </h2>
            <Slider {...settings} className="overflow-visible "> {/* overflow-visible on Slider */}
                {teachers?.map((teacher, index) => (
                    <div key={index} className="px-3 relative h-[470px]"> {/* Increased height on wrapper */}
                        <div className="bg-white rounded-lg shadow-md h-[350px] overflow-hidden"> {/* overflow-hidden on main card */}
                            <img src={teacher.image} alt={`${teacher.name} ${teacher.surname}`} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-10/12 "> {/* Adjusted bottom value */}
                            <div className="bg-white rounded-lg p-6 shadow-md h-[150px]">
                                <h3 className="text-lg font-semibold">{teacher.name} {teacher.surname}</h3>
                                <p className="text-sm text-gray-600">{teacher.major}</p>
                                <p className="text-xs text-gray-500 mt-2">{teacher.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Teachers;