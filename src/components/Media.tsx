import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMedia } from "../Hooks/useMedia";
import { VideoData } from "../types/Media";
import { useTranslation } from "react-i18next";

const MediaComponent: React.FC = () => {
    const { t } = useTranslation();
    const { data: videos } = useMedia();
    const [mainVideoSrc, setMainVideoSrc] = useState<string | null>(null);
    const [mainVideoTitle, setMainVideoTitle] = useState<string | null>(null);
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);

    React.useEffect(() => {
        if (videos && videos.length > 0) {
            setMainVideoSrc(videos[0].video);
            setMainVideoTitle(videos[0].title);
        }
    }, [videos]);

    const handleSmallVideoClick = (video: VideoData, index: number) => {
        setMainVideoSrc(null);
        setTimeout(() => {
            setMainVideoSrc(video.video);
            setMainVideoTitle(video.title);
            setPlayingVideo(index);
        }, 0)
    };

    return (
        <div className="container mx-auto p-4 sm:p-5 font-jakarta" id="media">
            <div className="flex item-center justify-between container pb-2 sm:pb-3">
                <h2 className="font-semibold text-xl lg:text-3xl text-black font-jakarta">
                    {t("titles.media")}
                </h2>
                <Link to="/all-videos" className="text-indigo-600 lg:text-[14px] text-[10px] sm:text-[12px] font-normal">{t("allnews.all")}</Link>
            </div>

            <div className="flex flex-col md:flex-row w-full max-w-screen-2xl mb-12 sm:mb-16">
                <div className="lg:w-[650px] lg:m-2 w-full mb-3 sm:mb-4 md:mb-0">
                    <div className="rounded-lg overflow-hidden">
                        <video controls className="w-full h-[200px] sm:h-[280px] md:h-[337px] lg:h-[400px] xl:h-[450px]" autoPlay={playingVideo !== null} key={mainVideoSrc}>
                            {mainVideoSrc && <source src={mainVideoSrc} type="video/mp4" />}
                            Your device doesn't support this video
                        </video>
                        <div className="p-2">
                            <p className="text-xl sm:text-2xl font-medium">{mainVideoTitle}</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-[650px] lg:w-[650px] h-auto ">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                        {videos?.slice(0, 6).map((video, index) => (
                            <div
                                key={video.id}
                                className={`relative rounded-lg shadow-md overflow-hidden cursor-pointer ${playingVideo === index ? 'opacity-50 pointer-events-none' : ''}`}
                                onClick={() => handleSmallVideoClick(video, index)}
                            >
                                <video className="w-full h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] object-cover" poster={video.image}>
                                    <source src={video.video} type="video/mp4" />
                                    {video.title ?? "Your device doesn't support this video."}
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition duration-300">
                                    <FaPlay className="text-white text-2xl sm:text-4xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaComponent;