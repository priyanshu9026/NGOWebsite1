import React from 'react';
import './index.css'

const cardData = [
    { imgSrc: 'image1.jpg', heading: 'Heading 1' },
    { imgSrc: 'image2.jpg', heading: 'Heading 2' },
    { imgSrc: 'image3.jpg', heading: 'Heading 3' },
    { imgSrc: 'image4.jpg', heading: 'Heading 4' },
    { imgSrc: 'image5.jpg', heading: 'Heading 5' },
    { imgSrc: 'image6.jpg', heading: 'Heading 6' },
    { imgSrc: 'image7.jpg', heading: 'Heading 7' },
    { imgSrc: 'image8.jpg', heading: 'Heading 8' },
    { imgSrc: 'image9.jpg', heading: 'Heading 9' },
    { imgSrc: 'image10.jpg', heading: 'Heading 10' },
];

const OurPrograms = () => {
    return (
        <div className="containers">
            <h1>OUR PROGRAMS</h1>
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={card.imgSrc} alt="cardimage" />
                            <div className="card-body">
                                <h5 className="card-title">{card.heading}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPrograms;
