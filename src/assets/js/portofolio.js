
import $ from 'jquery';
import "slick-carousel"

export const portofolio = () => {
    $('.slick').slick({
        autoplay: false,
        speed: 500,
        autoplaySpeed: 6000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        variableWidth: true,
        
        
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
           
        ]

    });
}