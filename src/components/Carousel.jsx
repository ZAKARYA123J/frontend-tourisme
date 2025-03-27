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
import marina from '../assets/marina.jpg'
import AgaBeach from '../assets/AgaBeach.jpg'
import Agacolor from '../assets/Agacolor.jpg'
import Aganight from '../assets/Aganight.jpg'
import Akchour from '../assets/Akchour.jpg'
import CROCOPARC from '../assets/CROCOPARC.jpg'
import Horses from '../assets/Horses.jpg'
import ouflaview from '../assets/ouflaview.jpg'
import ouzoud from '../assets/ouzoud.jpg'
import Rocks from '../assets/Rocks.jpg'
import Upview from '../assets/Upview.jpg'
import t from '../assets/t.jpg'
import SOUK from '../assets/SOUK.jpg'
import sitting from '../assets/sitting.jpg'
import srf from '../assets/srf.jpg'


const CarouselComponent = () => {
  const images = [
    sandboard,
    paradisevalley,
    nationalpark,
    aglou,
    concert,
    marina,
    AgaBeach,
    Agacolor,
    Aganight,
    Akchour,
    CROCOPARC,
    Horses,
    ouflaview,
    ouzoud,
    Rocks,
    sitting,
    SOUK,
    srf,
    t ,
    Upview,
  ];
  return (
    <div className="max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-2">must-see places</h1>
        <p className="text-center mb-6 text-gray-500 text-xl font-bold">Best Places In Agadir</p>
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
