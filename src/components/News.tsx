import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import { AiOutlineCalendar } from "react-icons/ai";
import { useNews } from '../Hooks/useNews';
import { useTranslation } from "react-i18next";

const News: React.FC = () => {
  const { data } = useNews();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = (id: number) => {
    navigate(`/newsdetail/${id}`);
  };

  return (
    <div
      id="news"
      className="container text-center p-5  bg-white mx-auto w-full h-auto mb-7"
    >
      <div className="text-center mt-1 flex items-center justify-between pb-3 "        >
        <h2 className="font-semibold text-xl lg:text-3xl text-black font-jakarta">
        {t("titles.news")}
        </h2>
        <Link
          to="/allnews"
          className="text-indigo-600 lg:text-[14px] text-[12px] font-normal "
        >
          {t("allnews.all")}
        </Link>
      </div>

      {/* İlk 4 Kart */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-1  lg:ml-0 lg:mr-0 md:mr-0 md:ml-0">
        {data?.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(item.id)}
          >
            {/* Görsel */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h1 className="font-bold text-lg text-gray-800 text-left">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm line-clamp-4 text-left">
                {item.description}
              </p>
              <div className="flex items-center mt-2 text-gray-500 text-left">
                <span className="material-icons">
                  <AiOutlineCalendar />
                </span>
                <p className="ml-2">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;