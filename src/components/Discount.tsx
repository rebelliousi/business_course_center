import React from "react";
import { DiscountCard } from "../types/Discount";
import { useDiscount } from "../Hooks/useDiscount";
import { useTranslation } from "react-i18next";

const Discount: React.FC = () => {
    const { data: discounts } = useDiscount();
    const { t } = useTranslation();

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


    const getGradient = (index: number) => {
        const gradients = [
            "bg-gradient-to-r from-blue-800 to-indigo-900",
        ];
        return gradients[index % gradients.length];
    };

    const getTextColor = (index: number) => {
        const colors = [
            "text-white",
        ];
        return colors[index % colors.length];
    };

    return (
        <div className="font-jakarta container mb-7 mx-auto p-5">
            <h2 className="font-semibold text-xl lg:text-3xl text-black font-jakarta pb-3">
                {t("titles.discount")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 rounded-lg lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:m-4 md:m-1 lg:m-1 xl:m-1 ">
                {groupedData &&
                    Object.entries(groupedData).map(([percentage, items], index) => (
                        <div
                            key={percentage}
                            className={`rounded-lg bg-white hover:bg-indigo-200 shadow-lg p-2 sm:p-3 text-left my-1 mr-3 transform transition-transform duration-300 hover:scale-105 max-h-[500px] overflow-hidden
                                
                            `}

                        >
                            <div
                                className={`  m-3 sm:m-5 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mx-auto mb-3 sm:mb-5 border-2   rounded-full`} style={{
                                    outline: `2px solid #1a1358 `,
                                    outlineOffset: "-2px",
                                    boxShadow: '0 0 0 3px #ffff',
                                }}
                            >
                                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex  items-center justify-center overflow-hidden hover:bg-white ${getGradient(index)}`}>
                                    <span
                                        className={`relative z-10 text-xl sm:text-2xl lg:text-4xl  font-bold font-jakarta text-left ${getTextColor(index)}`}
                                    >
                                        {percentage}
                                    </span>
                                </div>
                            </div>

                            <div className="container p-1 sm:p-2 mx-1 font-jakarta text-xs sm:text-sm text-gray-600 w-full">
                                {items.map((discount, index) => (
                                    <p key={index} className="text-left w-full pb-2 sm:pb-3 lg:text-[14px] text-[12px]">
                                        {discount.description}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Discount;