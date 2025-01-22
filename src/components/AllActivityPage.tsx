import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useActivity } from '../Hooks/useActivity';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AllActivityPage: React.FC = () => {
    const { t } = useTranslation();
    const { data: activityData } = useActivity();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

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

    if (!activityData || activityData.length === 0) {
        return <div>Loading...</div>;
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = activityData.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(activityData.length / cardsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="container mx-auto p-8 font-jakarta">
            <h1 className="text-2xl font-bold mb-6">{t("titles.activity")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCards.map((card, index) => (
                   <div
                        key={index}
                        className="px-1 cursor-pointer"
                    >
                        <div className="rounded-lg shadow-md overflow-hidden">
                             <Slider {...cardImageSettings}>
                                    {card.images?.map((imageData, imageIndex) => (
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
                                <h3 className="text-[16px] lg:text-[20px] font-semibold mb-1">{card.title}</h3>
                                <p className="text-gray-700 mb-2 line-clamp-2 lg:text-[16px] text-[12px]">
                                    {card.description}
                                </p>
                                <p className="text-gray-500 lg:text-[12px] text-[8px]">{card.date}</p>
                            </div>
                        </div>
                   </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`mx-2 p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                        <FaChevronLeft />
                    </button>
                    <span className="mx-2 text-gray-700">{`${currentPage} / ${totalPages}`}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`mx-2 p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                         <FaChevronRight/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllActivityPage;