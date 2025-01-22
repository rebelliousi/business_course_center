import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTeacher } from '../Hooks/useTeacher';
import { useTranslation } from "react-i18next";

const Teachers: React.FC = () => {
    const { t } = useTranslation();
    const { data: teachers } = useTeacher();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const responsiveSlidesToShow = () => {
        if (windowWidth >= 1024) {
            return 4;
        } else if (windowWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: responsiveSlidesToShow(),
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
        <div className= "font-jakarta container mx-auto mb-7 p-7 lg:p-2 md:p-2 overflow-visible" id="teachers">
            <h2 className="left-3 lg:left-0 md:left-0 font-semibold text-xl lg:text-3xl text-black font-jakarta pb-3">
                {t("titles.teachers")}
            </h2>
            <Slider {...settings} className="overflow-visible ">
                {teachers?.map((teacher, index) => (
                    <div key={index} className="px-3 relative h-[420px] sm:h-[470px]">
                        <div className="bg-white rounded-lg shadow-md h-[300px] sm:h-[350px] overflow-hidden">
                            <img src={teacher.image} alt={`${teacher.name} ${teacher.surname}`} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[30px] sm:bottom-[50px] left-1/2 -translate-x-1/2 w-10/12 ">
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md h-[120px] sm:h-[150px]">
                                <h3 className="text-base sm:text-lg font-semibold">{teacher.name} {teacher.surname}</h3>
                                <p className="text-sm text-gray-600">{teacher.major}</p>
                                <p className="text-xs text-gray-500 mt-1 sm:mt-2">{teacher.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Teachers;