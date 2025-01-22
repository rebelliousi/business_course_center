import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../Hooks/useNews';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsDetails } from '../types/News';

const NewsDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useNews();
    const [selectedNews, setSelectedNews] = useState<NewsDetails | undefined>();
    const [imageLoaded, setImageLoaded] = useState(false); // Resim yüklendi mi kontrolü

    useEffect(() => {
        if (data && id) {
            const newsItem = data.find((item) => item.id === parseInt(id, 10));
            setSelectedNews(newsItem);
            setImageLoaded(false); // Yeni bir haber seçildiğinde resmi yüklenmemiş olarak işaretle
        }
    }, [data, id]);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (!selectedNews) {
        return <div>News not found.</div>;
    }

    return (
        <div className="font-jakarta container mx-auto mt-8 p-4 md:p-8 min-h-screen">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative">
                    {/* Haber Resmi */}
                    <div className={`w-full h-72 rounded-t-lg overflow-hidden relative ${!imageLoaded ? 'bg-gray-200 animate-pulse' : ''}`}>
                         {!imageLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                             </div>
                         )}

                        <img
                            src={selectedNews.image}
                            alt={selectedNews.title}
                            className={`w-full h-full object-cover object-center rounded-t-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={handleImageLoad}
                        />
                    </div>
                </div>
                <div className="p-6">
                    {/* Haber Başlığı */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {selectedNews.title}
                    </h1>
                    {/* Haber Açıklaması */}
                    <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {selectedNews.description}
                        </p>
                    </div>
                    {/* Tarih ve Geri Dönme */}
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center text-gray-500">
                            <span className="mr-2"><AiOutlineCalendar size={20} /></span>
                            <p className="ml-2">{selectedNews.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;