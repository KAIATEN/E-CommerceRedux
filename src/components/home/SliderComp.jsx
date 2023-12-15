import React from "react";
import Slider from "react-slick";
import {useNavigate} from "react-router-dom"
const SliderComp = () => {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center px-6">
          <div>
            <div className="text-5xl font-bold">En İyi Laptoplar Satışta</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              libero lacus, ultricies ac velit in, hendrerit congue nisi.
              Phasellus quis purus vulputate.
            </div>
            <div className="border rounded-full cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 text-2xl" onClick={()=>navigate("/products/6")}>
              İncele
            </div>
          </div>
          <div>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/v2-74024-2_large.jpg"
            />
          </div>
        </div>
        <div className="!flex items-center px-6 ">
          <div>
            <div className="text-5xl font-bold">En İyi Laptoplar Satışta</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              libero lacus, ultricies ac velit in, hendrerit congue nisi.
              Phasellus quis purus vulputate.
            </div>
            <div className="border rounded-full cursor-pointer w-[200px] h-16 flex items-center justify-center text-2xl" onClick={()=>navigate("/products/6")}>
              İncele
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/v2-74024-1_large.jpg" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
