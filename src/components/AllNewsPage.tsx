import React, { useState } from 'react';
import { useNews } from '../Hooks/useNews';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
const ITEMS_PER_PAGE = 12; // You can adjust this value

const AllNewsPage: React.FC = () => {

    const { t } = useTranslation();
    const { data } = useNews();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const handleCardClick = (id: number) => {
        navigate(`/newsdetail/${id}`);
    };




    if (!data || data.length === 0) {
        return <div className="min-h-screen"></div>;
    }


    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentNews = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };


    return (
        <div className="container p-5 mx-auto mt-4 font-jakarta sm:mt-8 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-left">{t("titles.news")}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {currentNews.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleCardClick(item.id)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-32 sm:h-40 md:h-48 object-cover"
                        />

                        <div className="p-3 sm:p-4">
                            <h1 className="font-bold text-base sm:text-lg text-gray-800 text-left">
                                {item.title}
                            </h1>
                            <p className="text-gray-600 text-sm line-clamp-3 sm:line-clamp-4 text-left">
                                {item.description}
                            </p>
                            <div className="flex items-center mt-1 sm:mt-2 text-gray-500 text-left">
                                <span className="material-icons">
                                    <AiOutlineCalendar />
                                </span>
                                <p className="ml-1 sm:ml-2 text-[10px] sm:text-[12px]">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 sm:px-4 py-1 sm:py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        {t("pagination.prev")}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 sm:px-4 py-1 sm:py-2 mx-1 rounded ${
                                currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 sm:px-4 py-1 sm:py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                     {t("pagination.next")}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllNewsPage;