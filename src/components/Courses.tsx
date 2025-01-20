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
    <div className="container mx-auto mb-7 p-5" id="courses">
      <h2 className="font-semibold text-xl lg:text-3xl  text-black font-jakarta pb-3">
      {t("titles.courses")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
        {data?.map((course) => (
          <div
            key={course.id}
            className="group relative p-5 bg-white hover:bg-indigo-200 shadow-lg rounded-lg transition-all hover:scale-105 overflow-hidden"
          >
            <div className="relative mb-4">
              <img
                src={course.image}
                alt={course.name}
                className="lg:w-16 lg:h-16  w-12 h-12object-contain mb-4"
              />
              <div className="absolute inset-0 rounded-lg transition-all"></div>
            </div>
            <div className="text-left">
              <h3 className="text-[16px] lg:text-[22px] font-semibold">{course.name}</h3>
              <p
                className="text-gray-600 cursor-pointer lg:text-[16px] text-[12px]"
                onClick={() => handleDescriptionClick(course.id)}
              >
                {course.description}
              </p>
              <div className="mt-2">
                <span className="lg:text-[14px] text-[12px] text-gray-500">{course.duration}</span>
              </div>
              <div className="mt-2 font-bold text-[#1a1358] lg:text-[14px] text-[12px]">
                {course.price}
                <span>TMT</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse !== null && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 relative">
            <h3 className="text-2xl font-semibold mb-4">Course Description</h3>
            <p className="text-gray-800">
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