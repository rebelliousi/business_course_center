import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useCourse } from "../Hooks/useCourses";
import { useTranslation } from "react-i18next";

const Course: React.FC = () => {
  const { data } = useCourse();
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const handleDescriptionClick = (id: number) => {
    setSelectedCourse(id);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="font-jakarta container mx-auto mb-7 p-5" id="courses">
      <h2 className="font-semibold text-xl lg:text-3xl  text-black font-jakarta pb-3">
        {t("titles.courses")}
      </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {data?.map((course) => (
          <div
            key={course.id}
            className="group relative p-4 sm:p-5 bg-white hover:bg-indigo-200 shadow-lg rounded-lg transition-all hover:scale-105 overflow-hidden"
          >
              <div className="relative mb-2 sm:mb-4">
              <img
                src={course.image}
                alt={course.name}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain mb-2 sm:mb-4"
              />
              <div className="absolute inset-0 rounded-lg transition-all"></div>
            </div>
            <div className="text-left">
              <h3 className="text-[14px] sm:text-[16px] lg:text-lg font-semibold">{course.name}</h3>
              <p
                 className="text-gray-600 cursor-pointer text-[10px] sm:text-[12px] lg:text-[16px]  line-clamp-2 overflow-hidden"
                 onClick={() => handleDescriptionClick(course.id)}
               >
                   {course.description}
               </p>
              <div className="mt-1 sm:mt-2">
                  <span className="text-[10px] sm:text-[12px] lg:text-[14px] text-gray-500">{course.duration}</span>
              </div>
              <div className="mt-1 sm:mt-2 font-bold text-[#1a1358] text-[10px] sm:text-[12px] lg:text-[14px]">
                {course.price}
                <span>TMT</span>
              </div>
            </div>
          </div>
        ))}
      </div>


      {selectedCourse !== null && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 relative">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Course Description</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              {data?.find((course) => course.id === selectedCourse)?.description}
            </p>
            <div
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-2xl cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;