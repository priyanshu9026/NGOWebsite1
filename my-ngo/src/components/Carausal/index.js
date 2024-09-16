import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';  // Corrected import for Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function MobileFirstCarousel() {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true} // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000 }} // Autoplay feature with delay
        breakpoints={{
          // Adjust carousel for larger screens
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 }, // 2 slides per view on tablets
          1024: { slidesPerView: 3 }, // 3 slides per view on desktops
        }}
        style={styles.carousel}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x300?text=Slide+1" alt="Slide 1" style={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x300?text=Slide+2" alt="Slide 2" style={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x300?text=Slide+3" alt="Slide 3" style={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x300?text=Slide+4" alt="Slide 4" style={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x300?text=Slide+5" alt="Slide 5" style={styles.image} />
        </SwiperSlide>
      </Swiper>
    );
  }
  
  const styles = {
    carousel: {
      width: '100%',
      padding: '20px 0',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
    },
  };
  
  export default MobileFirstCarousel;
  