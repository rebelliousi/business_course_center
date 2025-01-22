
import circle from "../assets/img/illustration.png";
import { FaRegCircle } from 'react-icons/fa';
import { AdviceData } from "../types/Advice";
import { useTranslation } from 'react-i18next';

const Advice = () => {
    const { t } = useTranslation();
    return (
        <div className="container font-jakarta mx-auto min-h-[520px] lg:min-h-[630px] pt-7">
            {AdviceData && (
                <div className="flex flex-col items-center p-6">
                    {/* Title and Description */}
                    <div className="text-center mb-6 lg:mb-16">
                        <h1 className=" text-xl md:text-3xl lg:text-3xl font-bold text-gray-800">{t(AdviceData[0].title)}</h1>
                        <p className="text-[14px]  md:text-[-18px] lg:text-[18px] mt-3 text-gray-600">{t(AdviceData[0].description)}</p>
                    </div>

                    {/* Container for Circle and Cards */}
                    <div className="relative flex justify-center w-full">

                        {/* Big Circle in the center */}
                        <div className="w-[130px] h-[130px] sm:w-[130px] sm:h-[130px] md:w-[300px] md:h-[300px] xl:w-[440px] lg:w-[440px] xl:h-[440px] lg:h-[440px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center absolute shadow-xl py-8 sm:py-0 md:translate-y-16 xl:translate-y-0 lg:translate-y-0 translate-y-[114px] sm:translate-y-[114px]">
                            <img
                                src={circle}
                                className="w-[130px] h-[130px] sm:w-[130px] sm:h-[130px] md:w-[300px] md:h-[300px] xl:w-[400px] lg:w-[400px] xl:h-[400px] lg:h-[400px] rounded-full object-cover border-4 border-white"
                                alt="Circle Illustration"
                            />
                        </div>

                        {/* Cards Container */}
                        <div className="relative flex justify-center w-full mt-8  lg:mt-0">
                            {/* Left Side Cards */}
                            <div className=" flex flex-col sm:flex sm:flex-col sm:space-y-3 gap-4 sm:gap-4 md:gap-6 xl:gap-6 lg:gap-6 space-y-3 md:space-y-10 xl:space-y-10 lg:space-y-10 md:flex xl:flex lg:flex md:absolute xl:absolute lg:absolute sm:left-[-65px] md:left-[-35px] 2xl:left-[190px] xl:left-[80px] lg:left-[-45px] sm:item-center items-center md:items-start xl:items-start lg:items-start left-[-30px] ">
                                {/* Card 1 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-17 h-17 md:w-48 md:h-20 xl:w-64 lg:w-[300px] xl:h-24 lg:h-24 sm:left-[-25px] left-[-25px]  md:left-[80px] xl:left-[80px] lg:left-[80px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800">{t(AdviceData[0].leftSide[0].title)}</h3>
                                        
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-17 h-17 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:left-[-75px] left-[-75px] md:left-[35px] lg:left-[35px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800">{t(AdviceData[0].leftSide[1].title)}</h3>
                              
                                </div>

                                {/* Card 3 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-17 h-17 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:left-[-45px] left-[-45px]  md:left-[50px] lg:left-[47px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800">{t(AdviceData[0].leftSide[2].title)}</h3>
                                   
                                </div>
                            </div>

                            {/* Right Side Cards */}
                            <div className="flex  flex-col gap-4 md:gap-6 lg:gap-6 space-y-4 md:space-y-10 lg:space-y-10 md:flex  lg:flex md:absolute lg:absolute right-[-30px] 2xl:right-[190px] xl:right-[80px]  md:right-[-35px]  lg:right-[-45px] items-center md:items-end lg:items-end">
                                {/* Card 1 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-18 h-18 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-25px] right-[-25px]  md:right-[80px] lg:right-[80px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                
                                    <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800 text-right">{t(AdviceData[0].rightSide[0].title)}</h3>
                                    
                                </div>

                                {/* Card 2 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-17 h-17 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-75px] right-[-75px]  md:right-[35px] lg:right-[35px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800 text-right">{t(AdviceData[0].rightSide[1].title)}</h3>
                                  
                                </div>

                                {/* Card 3 */}
                                <div className="relative w-[90px] sm:w-[90px] sm:h-17 h-17 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-45px] right-[-45px] md:right-[55px] lg:right-[55px] bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-[7px] md:text-[17px] lg:text-[17px] font-semibold text-gray-800 text-right">{t(AdviceData[0].rightSide[2].title)}</h3>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Advice;