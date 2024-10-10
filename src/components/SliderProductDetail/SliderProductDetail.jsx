import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
function SliderProductDetail({ arrImg }) {
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
                return <Image src={img} alt="slider" preview={false} width="100%" height="100px" />;
            })}
        </Slider>
    );
}

export default SliderProductDetail;
