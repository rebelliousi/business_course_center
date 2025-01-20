import circle from "../assets/img/illustration.png";
import { FaRegCircle } from 'react-icons/fa';
import { AdviceData } from "../types/Advice";

const Advice = () => {
    return (
        <div className="container mx-auto min-h-[550px] ">
            {AdviceData && (
                <div className="flex flex-col items-center p-6">
                    {/* Title and Description */}
                    <div className="text-center mb-6">
                        <h1 className="text-xl  lg:text-2xl font-bold text-gray-800">{AdviceData[0].title}</h1>
                        <p className="text-[14px] lg:text-[18px] mt-2 text-gray-600">{AdviceData[0].description}</p>
                    </div>

                    {/* Container for Circle and Cards */}
                    <div className="relative flex justify-center w-full">

                        {/* Big Circle in the center */}
                        <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] xl:w-[440px] lg:w-[440px] xl:h-[440px] lg:h-[440px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center absolute shadow-xl py-8 sm:py-0 md:translate-y-16 xl:translate-y-0 lg:translate-y-0 translate-y-20 sm:translate-y-20">
                            <img
                                src={circle}
                                className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] lg:w-[400px] xl:h-[400px] lg:h-[400px] rounded-full object-cover border-4 border-white"
                                alt="Circle Illustration"
                            />
                        </div>

                        {/* Cards Container */}
                        <div className="relative flex justify-center w-full mt-8  lg:mt-0">
                            {/* Left Side Cards */}
                            <div className="flex flex-col sm:flex sm:flex-col sm:space-y-6 gap-4 sm:gap-4 md:gap-6 xl:gap-6 lg:gap-6 space-y-6 md:space-y-10 xl:space-y-10 lg:space-y-10 md:flex xl:flex lg:flex md:absolute xl:absolute lg:absolute sm:left-[-65px] md:left-[-35px] 2xl:left-[190px] xl:left-[80px] lg:left-[-45px] sm:item-center items-center md:items-start xl:items-start lg:items-start left-[-30px] ">
                                {/* Card 1 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 xl:w-64 lg:w-64 xl:h-24 lg:h-24 sm:left-[-85px] left-[-85px]  md:left-[80px] xl:left-[80px] lg:left-[80px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800">{AdviceData[0].leftSide[0].title}</h3>
                                        <p className="text-[10px] md:text-sm lg:text-sm text-gray-500 pr-0 lg:pr-10">{AdviceData[0].leftSide[0].description}</p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:left-[-115px] left-[-115px] md:left-[35px] lg:left-[35px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800">{AdviceData[0].leftSide[1].title}</h3>
                                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-500">{AdviceData[0].leftSide[1].description}</p>
                                </div>

                                {/* Card 3 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:left-[-80px] left-[-80px] sm:left-0 md:left-[50px] lg:left-[50px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] right-[-8px] md:top-[-8px] md:right-[-8px] lg:top-[-8px] lg:right-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800">{AdviceData[0].leftSide[2].title}</h3>
                                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-500">{AdviceData[0].leftSide[2].description}</p>
                                </div>
                            </div>

                            {/* Right Side Cards */}
                            <div className="flex flex-col gap-4 md:gap-6 lg:gap-6 space-y-6 md:space-y-10 lg:space-y-10 md:flex  lg:flex md:absolute lg:absolute right-[-30px] 2xl:right-[190px] xl:right-[80px]  md:right-[-35px]  lg:right-[-45px] items-center md:items-end lg:items-end">
                                {/* Card 1 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-85px] right-[-85px] sm:right-0 md:right-[80px] lg:right-[80px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800 text-right">{AdviceData[0].rightSide[0].title}</h3>
                                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-500 text-right">{AdviceData[0].rightSide[0].description}</p>
                                </div>

                                {/* Card 2 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-115px] right-[-115px] sm:right-0 md:right-[35px] lg:right-[35px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className=" w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800 text-right">{AdviceData[0].rightSide[1].title}</h3>
                                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-500 text-right">{AdviceData[0].rightSide[1].description}</p>
                                </div>

                                {/* Card 3 */}
                                <div className="relative w-[120px] sm:w-[120px] sm:h-20 h-20 md:w-48 md:h-20 lg:w-64 lg:h-24 sm:right-[-80px] right-[-80px] md:right-[55px] lg:right-[55px] bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 hover:scale-105">
                                    <div className="absolute top-[-8px] left-[-8px] md:top-[-8px] md:left-[-8px] lg:top-[-8px] lg:left-[-8px] p-2 bg-white shadow-md rounded-full">
                                        <div className="w-4 h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                                            <FaRegCircle className="text-white text-sm md:text-xl lg:text-xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-800 text-right">{AdviceData[0].rightSide[2].title}</h3>
                                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-500 text-right">{AdviceData[0].rightSide[2].description}</p>
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