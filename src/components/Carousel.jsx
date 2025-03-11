import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import sandboard from '../assets/sandboard.jpg'
import paradisevalley from '../assets/paradisevalley.jpg'
import nationalpark from '../assets/nationalpark.jpg'
import aglou from '../assets/aglou.jpg'
import concert from '../assets/concert.jpg'



const CarouselComponent = () => {
  const images = [
    sandboard,
    paradisevalley,
    nationalpark,
    aglou,
    concert
  
  ];
  return (
    <div className="max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-2">All Inclusive Resorts</h1>
        <p className="text-center mb-6 text-gray-500">Agadir Best Destinations</p>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
        >
            {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={src} 
                            alt={`Destination ${index + 1}`} 
                            className="w-full h-80 object-cover rounded-2xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselComponent;
