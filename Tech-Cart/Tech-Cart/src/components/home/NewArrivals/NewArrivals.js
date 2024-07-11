import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  watch,
  gift3,
  gift1,
  gift2,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={watch}
            productName="Watch"
            price="250.00"
            color="Pink"
            badge={true}
            des="Stunning pink watch for sale! Elevate your style with this chic timepiece, perfect for any occasion. Grab it now and add a pop of color to your wardrobe!
            "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={gift3}
            productName="Sister Cup with Pillow"
            price="400.00"
            color="Bluish Green"
            badge={true}
            des="he enchanting blend of traditional flavors and modern elegance, now served with a cup of refreshing bluish-green hue, captivating both palate and eyes. Embark on a culinary journey where tradition meets innovation, as each bite of Sister Pillaw transports you to a realm of exquisite taste and visual delight!."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={gift1}
            productName="Cute Pillow with Keychain"
            price="280.00"
            color="White & Grey"
            badge={true}
            des="Add a touch of charm to your space with our adorable designed pillow, complete with a matching keychain. Elevate your décor with this delightful duo, perfect for gifting or adding a cozy accent to any room. Get yours now and snuggle up in style!."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={gift2}
            productName="Little Teddy Gift"
            price="200.00"
            color="Red & White"
            badge={false}
            des="Little Teddy Gift, adorned in red and white, perfect for spreading joy far and wide, now available for sale, a cuddly delight!💞"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100001"
            img={watch}
            productName="Watch"
            price="250.00"
            color="Pink"
            badge={true}
            des="Stunning pink watch for sale! Elevate your style with this chic timepiece, perfect for any occasion. Grab it now and add a pop of color to your wardrobe!
            "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={gift3}
            productName="Sister Cup with Pillow"
            price="400.00"
            color="Bluish Green"
            badge={false}
            des=" The enchanting blend of traditional flavors and modern elegance, now served with a cup of refreshing bluish-green hue, captivating both palate and eyes. Embark on a culinary journey where tradition meets innovation, as each bite of Sister Pillaw transports you to a realm of exquisite taste and visual delight!."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={gift1}
            productName="Cute Pillow with Keychain"
            price="280.00"
            color="White & Grey"
            badge={true}
            des="Add a touch of charm to your space with our adorable designed pillow, complete with a matching keychain. Elevate your décor with this delightful duo, perfect for gifting or adding a cozy accent to any room. Get yours now and snuggle up in style!."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={gift2}
            productName="Little Teddy Gift"
            price="200.00"
            color="Red & White"
            badge={false}
            des="Little Teddy Gift, adorned in red and white, perfect for spreading joy far and wide, now available for sale, a cuddly delight!💞"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
