import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';

function SliderComponent({ arrImg }) {
    var settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 2000,
        slidesToShow: 2, // Hiển thị 2 slide
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {arrImg.map((img, index) => {
                return (
                    <div key={index}>
                        <div style={{ padding: '8px' }}>
                            <Image
                                src={img}
                                alt="slider"
                                preview={false}
                                style={{
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}

export default SliderComponent;
