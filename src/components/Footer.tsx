import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/kurs merkez ak yazgy.png"
import {
  AiOutlineLink,
  AiFillMail,
  AiFillPhone,
  AiFillInstagram,
  AiFillMessage,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import PopupForm from "./PopUpForm";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { t } = useTranslation();

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
      <motion.footer
          id="contact"
          className="font-jakarta relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12 mt-16 font-jakarta w-full h-auto mx-auto overflow-hidden"
          initial={{opacity:0}}
          animate={{opacity:1}}
      >
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 justify-items-center mx-auto relative z-10">
              <div className="flex sm:flex-col md:flex-col lg:flex-row flex-row sm:items-center md:items-center items-start w-full mb-6 sm:mb-0">
                  <div className="flex sm:flex-col flex-row  sm:items-center items-start justify-start w-full sm:w-auto">
                      <img src={logo} alt="" />
                      <div className="border-l-2 border-white h-20 mx-4 lg:hidden block md:hidden sm:hidden "></div>
                      <p className="sm:mt-4 mt-0  text-white font-jakarta text-center flex items-center  sm:text-left text-[12px]">
                          Your trusted partner in delivering quality services.
                      </p>
                  </div>
              </div>

              <div className="space-y-3 text-center md:text-left w-full lg:pl-24 hidden md:hidden lg:block  ">
                  <h3 className="text-white text-[18px] font-semibold mb-4">
                      {t("footer.links")}
                  </h3>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3 justify-center md:justify-start">
                          <AiOutlineLink className="text-xl " />
                          <Link
                              to="/courses"
                              className="hover:text-gray-300 block font-jakarta"
                          >
                              {t("footer.courses")}
                          </Link>
                      </li>
                      <li className="flex items-center gap-3 justify-center md:justify-start">
                          <AiOutlineLink className="text-xl" />
                          <Link
                              to="/activity"
                              className="hover:text-gray-300 block font-jakarta"
                          >
                              {t("footer.activity")}
                          </Link>
                      </li>
                      <li className="flex items-center gap-3 justify-center md:justify-start">
                          <AiOutlineLink className="text-xl" />
                          <Link
                              to="/teachers"
                              className="hover:text-gray-300 block font-jakarta"
                          >
                              {t("footer.teachers")}
                          </Link>
                      </li>
                      <li className="flex items-center gap-3 justify-center md:justify-start">
                          <AiOutlineLink className="text-xl" />
                          <Link
                              to="/media"
                              className="hover:text-gray-300 block font-jakarta"
                          >
                              {t("footer.media")}
                          </Link>
                      </li>
                  </ul>
              </div>

              <div className="space-y-3 text-center md:text-left w-full ">
                  <h3 className="text-white text-[18px] font-semibold mb-4 text-left sm:text-center md:text-left">
                      {t("footer.contact")}
                  </h3>
                  <p className="text-white text-[16px]  flex items-center gap-3 justify-start sm:justify-start md:justify-start">
                      <AiFillMail className="text-xl " />
                      <a
                          href="https://www.gmail.com/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-300 ml-1"
                      >
                          lorem@gmail.com
                      </a>
                  </p>
                  <p className="text-white text-[16px] flex items-center gap-3 justify-start sm:justify-start md:justify-start">
                      <AiFillPhone className="text-xl" />
                      <a
                          href="https://www...com/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-300 ml-1"
                      >
                          +9935656565655
                      </a>
                  </p>
                  <p className="text-white text-[16px] flex items-center gap-3 justify-start sm:justify-start md:justify-start">
                      <AiFillInstagram className="text-xl" />
                      <a
                          href="https://www.instagram.com/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-300 ml-1"
                      >
                          lorem
                      </a>
                  </p>
                  <p className="text-white text-[16px] flex items-center gap-3 justify-start sm:justify-start md:justify-start">
                      <FaTiktok className="text-xl " />
                      <a
                          href="https://www.tiktok.com/lorem@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-300 ml-1"
                      >
                          lorem
                      </a>
                  </p>

                  <p>
                      <button
                          onClick={openPopup}
                          className="text-left sm:text-center text-white text-[16px] flex items-center gap-3 justify-start hover:text-gray-300 mt-4"
                      >
                          <AiFillMessage className="text-xl" />
                          <span>{t("footer.contactus")}</span>
                      </button>
                  </p>
              </div>
          </div>

          {/* Animated Shapes */}
          <motion.div
               initial={{ x: -100, y: 100, rotate: -45, opacity: 0}}
              animate={{ x: -50, y: 50, rotate: 45, opacity: 0.6}}
              transition={{duration: 2, repeat: Infinity, repeatType: "mirror"}}
              className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl"
          ></motion.div>
           <motion.div
              initial={{ x: 200, y: -20, rotate: 30, opacity: 0}}
              animate={{ x: 100, y: -50, rotate: -30, opacity: 0.6}}
              transition={{duration: 2, repeat: Infinity, repeatType: "mirror"}}
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
      </motion.footer>
  );
};

export default Footer;