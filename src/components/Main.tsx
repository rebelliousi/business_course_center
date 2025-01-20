import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MainType } from '../types/Main';
import { useMain } from '../Hooks/useMain';
import PopupForm from './PopUpForm'; // Import the PopupForm
import { useTranslation } from "react-i18next"; 

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useMain();
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

     const openPopup = () => {
        setIsPopupOpen(true);
    };

     const closePopup = () => {
        setIsPopupOpen(false);
    };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseleave', () => {
        setIsHovering(false);
      });
      containerRef.current.addEventListener('mouseenter', () => {
        setIsHovering(true);
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseleave', () => {
          setIsHovering(false);
        });
        containerRef.current.removeEventListener('mouseenter', () => {
          setIsHovering(true);
        });
      }
    };
  }, []);

  const backgroundVariants = {
    initial: {
      scale: 1,
    },
    hovering: {
      scale: 1.1,
      transition: { duration: 0.4 },
    },
  };

  return (
    
    <section
      className=" relative bg-gradient-to-r from-blue-800 to-indigo-900 overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate={isHovering ? 'hovering' : 'initial'}
        className="absolute inset-0 overflow-hidden"
      ></motion.div>

      <div className="container mx-auto relative z-1 py-24 md:py-[180px]">
        {data &&
          data.map((item: MainType, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6">
                {item.title}
              </h1>
              <p className="text-[14px] md:text-xl lg:text-xl text-gray-200 mb-10">
                {item.description}
              </p>
            </motion.div>
          ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-4"
        >
          <button
          onClick={openPopup}
            className="bg-transparent hover:bg-white/20 text-white font-semibold py-3 px-6  text-[14px] rounded-md border border-white"
          >
           {t("footer.contactus")}
          </button>
        </motion.div>
      </div>
      {/* Animated Shapes */}
      <motion.div
        initial={{ x: -100, y: 100, rotate: -45, opacity: 0 }}
        animate={{ x: -50, y: 50, rotate: 45, opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: 200, y: -20, rotate: 30, opacity: 0 }}
        animate={{ x: 100, y: -50, rotate: -30, opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-pink-500 to-red-500 rounded-full blur-2xl"
      ></motion.div>
      {/* Yeni Daireler */}
      <motion.div
        initial={{ x: -150, y: 20, rotate: -60, opacity: 0.2 }}
        animate={{ x: -80, y: 10, rotate: 60, opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-1/3 left-1/8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: 150, y: 80, rotate: 45, opacity: 0.2 }}
        animate={{ x: 80, y: 90, rotate: -45, opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-1/3 right-1/8 w-32 h-32 bg-gradient-to-bl from-green-400 to-teal-400 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: -20, y: -150, rotate: 20, opacity: 0.2 }}
        animate={{ x: -10, y: -70, rotate: -20, opacity: 0.4 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-0 left-1/2  w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: 150, y: 150, rotate: -10, opacity: 0.2 }}
        animate={{ x: 50, y: 50, rotate: 10, opacity: 0.4 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-0 right-1/2 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl"
      ></motion.div>
        {isPopupOpen && <PopupForm closePopup={closePopup} />}
    </section>
  );
};

export default HeroSection;