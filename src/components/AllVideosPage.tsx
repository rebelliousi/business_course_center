// src/components/AllVideosPage.tsx
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useMedia } from '../Hooks/useMedia';
import { VideoData } from '../types/Media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoClose } from 'react-icons/io5';
import { useTranslation } from "react-i18next";

const VIDEOS_PER_PAGE = 12;

const AllVideosPage: React.FC = () => {
    const { t } = useTranslation();
    const { data: videos } = useMedia();
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    if (!videos || videos.length === 0) {
        return <div className="min-h-screen"></div>;
    }

    const handleVideoClick = (video: VideoData) => {
        setSelectedVideo(video);
    };

    const handleClosePopup = () => {
        setSelectedVideo(null);
    };
    
    const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    const endIndex = startIndex + VIDEOS_PER_PAGE;
    const currentVideos = videos.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="container mx-auto mt-8 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-left">{t("titles.media")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentVideos?.map((video) => (
                    <div
                        key={video.id}
                        className="relative rounded-lg shadow-md overflow-hidden cursor-pointer"
                        onClick={() => handleVideoClick(video)}
                    >
                         <div className="relative">
                            <img
                                src={video.image}
                                alt={video.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition duration-300">
                                <FaPlay className="text-white text-4xl" />
                            </div>
                         </div>
                       
                         <div className="p-2">
                             <h3 className="text-lg font-medium">{video.title}</h3>
                         </div>
                    </div>
                ))}
            </div>
             {totalPages > 1 && (
               <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-3 py-1 rounded-md border ${
                            currentPage === page ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            )}


            {selectedVideo && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl max-h-[90vh] overflow-hidden">
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900 text-xl"
                        >
                             <IoClose />
                        </button>
                        <div className='rounded-lg mb-4 overflow-hidden'>
                            <video controls className="w-full h-auto max-h-[calc(90vh-100px)] object-contain" autoPlay >
                                <source src={selectedVideo.video} type="video/mp4" />
                                Your device doesn't support this video
                            </video>
                        </div>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllVideosPage;