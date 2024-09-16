import React from 'react';
import './index.css';


const OurImpact = () => {
    const cardData = [
        { id: 1, title: 'Card 1', number: 123, imgSrc: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Card 2', number: 456, imgSrc: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Card 3', number: 789, imgSrc: 'https://via.placeholder.com/150' },
        { id: 4, title: 'Card 4', number: 101, imgSrc: 'https://via.placeholder.com/150' },
        { id: 5, title: 'Card 5', number: 112, imgSrc: 'https://via.placeholder.com/150' },
        { id: 6, title: 'Card 6', number: 131, imgSrc: 'https://via.placeholder.com/150' },
      ];
  return (
    
    <div className='container'>
        
      <h1 className="d-flex flex-row justify-content-start m-5 main-heading">OUR IMPACT</h1>
      <p className="m-5">
        import React from 'react'; import Swiper, SwiperSlide from
        'swiper/react'; import Navigation, Pagination from 'swiper/modules'; //
        Corrected import for Swiper modules import 'swiper/css'; import
        'swiper/css/navigation'; import 'swiper/css/pagination';
      </p>
      <button className="btn btn-primary m-5">Learn More</button>
      <video></video>

      <section className="card-grid">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imgSrc} alt={card.title} className="card-img" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-number">{card.number}</p>
        </div>
      ))}
    </section>
    </div>
  );
};

export default OurImpact;