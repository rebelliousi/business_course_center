import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from "../types/Activity";
import { useActivity } from '../Hooks/useActivity';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



const Activity: React.FC = () => {
    const { t } = useTranslation();
    const { data: activityData } = useActivity();
    const [mainContent, setMainContent] = useState<Card | null>(null);
    const mainSliderRef = useRef<Slider>(null);
    const cardSliderRef = useRef<Slider>(null);

    useEffect(() => {
        if (activityData && activityData.length > 0) {
          
            setMainContent(activityData[0]);
        }
    }, [activityData]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const cardSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    const cardImageSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    const goToPrevCard = () => cardSliderRef.current?.slickPrev();
    const goToNextCard = () => cardSliderRef.current?.slickNext();
    const goToPrevMain = () => mainSliderRef.current?.slickPrev();
    const goToNextMain = () => mainSliderRef.current?.slickNext();

    const handleCardClick = (card: Card) => {
        setMainContent(card);
        if (mainSliderRef.current && card.image && card.image.length > 0) {
            mainSliderRef.current.slickGoTo(0);
        }
    };

    if (!activityData || activityData.length === 0) {
        return <div></div>;
    }

   const displayedCards = activityData.slice(0, 8);
  
    return (
        <div className="container mx-auto mb-10 p-8" id='activity'>
            <div className='flex items-center justify-between pb-3'>
                <h2 className="font-semibold  text-xl lg:text-3xl text-black font-jakarta">
                {t("titles.activity")}
                </h2>
                <Link to="/all-activity" className="text-indigo-600 lg:text-[14px] text-[12px] font-normal">{t("allnews.all")}</Link>
            </div>
            <div className="flex flex-col">
                <div className="md:flex md:flex-row gap-4 mb-8">
                    <div className="md:w-1/2 relative">
                        <Slider {...sliderSettings} ref={mainSliderRef}>
                        {mainContent?.image?.map((imageData, index) => (
                                    <div key={index}>
                                        <img src={imageData.image} alt={`Main Activity ${index + 1}`} className="w-full rounded-lg object-cover h-96 sm:h-[500px] md:h-96" />
                                    </div>
                                ))}
                        </Slider>
                        <button onClick={goToPrevMain} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow opacity-70 hover:opacity-100">
                            <FiChevronLeft size={20} />
                        </button>
                        <button onClick={goToNextMain} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow opacity-70 hover:opacity-100">
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        {mainContent && (
                            <>
                                <h2 className="text-[16px] lg:text-[24px] font-bold mb-2">{mainContent.title}</h2>
                                <p className="text-gray-700 mb-4 lg:text-[16px] text-[12px]">{mainContent.description}</p>
                                <p className="text-gray-500 lg:text-[16px] text-[12px]">{mainContent.date}</p>
                            </>
                        )}
                    </div>
                </div>
 
                <div className="relative">
                    <Slider {...cardSettings} ref={cardSliderRef}>
                        {displayedCards.map((card, index) => (
                            <div
                                key={index}
                                className="px-1 cursor-pointer"
                                onClick={() => handleCardClick(card)}
                            >
                                <div className="rounded-lg shadow-md overflow-hidden">
                                    <Slider {...cardImageSettings}>
                                    {card.image?.map((imageData, imageIndex) => (
                                        <div key={imageIndex} className="rounded-lg overflow-hidden">
                                            <img
                                                src={imageData.image}
                                                alt={`${card.title}  ${imageIndex + 1}`}
                                                className="w-full rounded-t-lg object-cover h-48"
                                            />
                                        </div>
                                         ))}
                                    </Slider>
                                    <div className="bg-gray-50 rounded-b-lg p-2">
                                        <h3 className="text-[16px] lg:text-[2px] font-semibold mb-1">{card.title}</h3>
                                        <p className="text-gray-700 mb-2 line-clamp-2 lg:text-[16px] text-[12px]">
                                            {card.description}
                                        </p>
                                        <p className="text-gray-500 lg:text-[12px] text-[8px]">{card.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <button onClick={goToPrevCard} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow opacity-70 hover:opacity-100">
                        <FiChevronLeft size={20} />
                    </button>
                    <button onClick={goToNextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow opacity-70 hover:opacity-100">
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Activity;