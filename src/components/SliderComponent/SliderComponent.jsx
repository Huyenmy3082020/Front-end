import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
function SliderComponent({ arrImg }) {
    var settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Tự động phát
        autoplaySpeed: 4000, // Tốc độ tự động phát
    };
    return (
        <Slider {...settings}>
            {arrImg.map((img) => {
                return <Image src={img} alt="slider" preview={false} width="100%" height="300px" />;
            })}
        </Slider>
    );
}

export default SliderComponent;
