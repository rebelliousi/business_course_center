// src/App.tsx
import React from 'react';
import {lazy,Suspense} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home=lazy(()=>import("./components/Home")) 
const AllVideosPage=lazy(()=>import("./components/AllVideosPage"))
const Footer=lazy(()=>import("./components/Footer"))
const AllActivityPage=lazy(()=>import("./components/AllActivityPage"))
const AllNewsPage=lazy(()=>import("./components/AllNewsPage"))
const NewsDetailPage=lazy(()=>import("./components/NewsDetailsPage"))
const Courses=lazy(()=>import("./components/Courses"))
const News=lazy(()=>import("./components/News"))
const Teachers=lazy(()=>import("./components/Teachers"))
const Media=lazy(()=>import("./components/Media"))
const Activity=lazy(()=>import("./components/Activity"))




const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/news' element={<News/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path="/all-videos" element={<AllVideosPage />} />
        <Route path="/all-activity" element={<AllActivityPage />} />
          <Route path="/allnews" element={<AllNewsPage />} />
        <Route path="/newsdetail/:id" element={<NewsDetailPage />} /> {/* NewsDetailPage için yeni route */}
      </Routes>
      <Footer />
      </Suspense>
    </div>
  );
};

export default App;