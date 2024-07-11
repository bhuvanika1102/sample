import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  gift22,
  gift33,
  naruto,
  unicorn,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={gift22}
          productName="Instant Camera"
          price="800.00"
          color="Petunia"
          badge={true}
          des="Capture memories instantly with our Instant Camera for sale! This sleek device delivers high-quality prints in seconds, ensuring every moment is preserved with clarity and charm. Don't miss out on the chance to seize the day, one snapshot at a time!."
        />
        <Product
          _id="1012"
          img={gift33}
          productName="Kitkat"
          price="300.00"
          color="Red"
          badge={false}
          des="Indulge in a sweet delight with a bunch of KitKat gifts on sale, a treat for any chocolate lover's palate. With assorted flavors and charming packaging, these gifts are perfect for any occasion, from birthdays to festive celebrations. Grab a bundle of joy and make someone's day a little sweeter with these delightful treats!."
        />
        <Product
          _id="1013"
          img={naruto}
          productName="Naruto Toy"
          price="525.00"
          color="Mixed"
          badge={true}
          des="Unlock the power of the Hidden Leaf Village with this Naruto action figure! Perfect for any fan, it features intricate details and dynamic poses. Bring the excitement of the ninja world home today!."
        />
        <Product
          _id="1014"
          img={unicorn}
          productName="Unicorn Kit"
          price="300.00"
          color="Mixed"
          badge={false}
          des="Unleash the magic with our Unicorn Kit! Complete with a dazzling unicorn purse, enchanting notebook, and a cuddly unicorn doll, it's the perfect package for any unicorn lover. Let your imagination soar with this whimsical set!."
        />
      </div>
    </div>
  );
};

export default BestSellers;
