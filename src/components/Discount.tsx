import React, { useState, useEffect } from "react";
import { DiscountCard } from "../types/Discount";
import { useDiscount } from "../Hooks/useDiscount";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown} from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa"; // External Link Icon for Desktop
import { IoMdClose } from "react-icons/io"; // Close Icon

const Discount: React.FC = () => {
    const { data: discounts } = useDiscount();
    const { t } = useTranslation();
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedPercentage, setSelectedPercentage] = useState<string | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const groupedData = discounts?.reduce(
        (acc: Record<string, DiscountCard[]>, item) => {
            const key = `${item.percentage}`;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        },
        {}
    );

    const displayedGroups = Object.entries(groupedData || {}).slice(0, 3);

    const handleMoreClick = (percentage: string) => {
        if (isDesktop) {
            setSelectedPercentage(percentage);
            setShowModal(true);
        } else {
            setExpandedGroup(percentage === expandedGroup ? null : percentage);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPercentage(null);
    };

    const isExpanded = (percentage: string) => {
        return expandedGroup === percentage;
    };

    return (
        <div className="font-jakarta container mb-7 mx-auto p-5">
            <h2 className="font-semibold text-2xl lg:text-3xl text-gray-800 font-jakarta pb-3">
                {t("titles.discount")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayedGroups.map(([percentage, items]) => (
                    <div
                        key={percentage}
                        className={`discount-card rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-4 text-white flex flex-col ${!isDesktop && isExpanded(percentage) ? "h-auto" : ""
                            }`}
                    >
                        <h3 className="lg:text-3xl font-bold mb-2 text-2xl">
                            {percentage}
                        </h3>
                        {/*Conditionally render this based on whether expanded and on mobile*/}
                        {!( !isDesktop && isExpanded(percentage)) &&
                        <p className="lg:text-sm mb-1 text-xs">
                            {items.length > 0 ? items[0].description : "Açıklama Yok"}
                        </p>
                         }


                        {!isDesktop && isExpanded(percentage) && (
                            <ul className="list-disc list-inside lg:text-sm text-xs text-white ml-4 mt-2">
                                {items.map((discount, i) => (
                                    <li key={i} className="mb-1">{discount.description}</li>
                                ))}
                            </ul>
                        )}

                        {items.length > 1 && (
                            <button
                                onClick={() => handleMoreClick(percentage)}
                                className="mt-2 rounded-full hover:bg-gray-100 transition-colors duration-200 p-2"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                {isDesktop ? (
                                    <FaExternalLinkAlt className="text-white text-2xl" />
                                ) : (
                                    <IoIosArrowDown
                                        className="text-white text-2xl"
                                        style={{
                                            transform: isExpanded(percentage) ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s ease-in-out'
                                        }}
                                    />
                                )}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {showModal && selectedPercentage && groupedData && groupedData[selectedPercentage] && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{selectedPercentage}</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                <IoMdClose className="text-3xl" />
                            </button>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-800 ml-4">
                            {groupedData[selectedPercentage].map((discount, i) => (
                                <li key={i} className="mb-1">{discount.description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Discount;