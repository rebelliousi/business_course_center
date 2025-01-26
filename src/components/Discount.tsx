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
        <div className="container p-5 mx-auto font-jakarta mb-7">
            <h2 className="pb-3 text-xl font-semibold text-black-800 lg:text-3xl font-jakarta">
                {t("titles.discount")}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {displayedGroups.map(([percentage, items]) => (
                    <div
                        key={percentage}
                        className={`discount-card rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-4 text-white flex flex-col ${!isDesktop && isExpanded(percentage) ? "h-auto" : ""
                            }`}
                    >
                        <h3 className="mb-2 text-2xl font-bold lg:text-3xl">
                            {percentage}
                        </h3>
                        {/*Conditionally render this based on whether expanded and on mobile*/}
                        {!( !isDesktop && isExpanded(percentage)) &&
                        <p className="mb-1 text-xs lg:text-sm">
                            {items.length > 0 ? items[0].description : "Açıklama Yok"}
                        </p>
                         }


                        {!isDesktop && isExpanded(percentage) && (
                            <ul className="mt-2 ml-4 text-xs text-white list-disc list-inside lg:text-sm">
                                {items.map((discount, i) => (
                                    <li key={i} className="mb-1">{discount.description}</li>
                                ))}
                            </ul>
                        )}

                        {items.length > 1 && (
                            <button
                                onClick={() => handleMoreClick(percentage)}
                                className="p-2 mt-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                {isDesktop ? (
                                    <FaExternalLinkAlt className="text-2xl text-white" />
                                ) : (
                                    <IoIosArrowDown
                                        className="text-2xl text-white"
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
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">{selectedPercentage}</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                <IoMdClose className="text-3xl" />
                            </button>
                        </div>
                        <ul className="ml-4 text-sm text-gray-800 list-disc list-inside">
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