import {
  // spfOne,
  // spfTwo,
  // spfThree,
  // spfFour,
  // bestSellerOne,
  // bestSellerTwo,
  // bestSellerThree,
  // unicorn,
  // newArrOne,
  // newArrTwo,
  // newArrThree,
  // newArrFour,

  cup1,
  cup2,
  cup3,
  cup4,
  clock1,
  clock2,
  clock4,
  clock5,
  clock6,
  clock7,
  clock8,
  clock9,
  clock10,
  bracelet1,
  bracelet2,
  bracelet3,
  bracelet4,
  bracelet5,
  bracelet6,

  teddy,
  tedddy6,
  teddy2,
  teddy7,
  teddy8,
  teddy9,
  teddy4,
  tedddy14,
  tedddy15,
  tedddy17,
  tedddy117,
  tedddy1118,
  tedddy16,
  b,
  tedddy119,
  now,
  a,
  c,
  tedddyy,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  // {
  //   _id: 1005,
  //   title: "Journal",
  //   link: "/journal",
  // },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  
  {
    _id: "209",
    img: cup1,
    productName: "cup",
    price: "295.00",
    color: "White & Red",
    badge: true,
    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "White & Red" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$295" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "210",
    img: cup2,
    productName: "cup",
    price: "220.00",
    color: "Mixed",
    badge: true,
    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "Mixed" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "211",
    img: cup3,
    productName: "cup",
    price: "250.00",
    color: "Black",
    badge: true,
    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
    brand:"Cup",
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$250" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "212",
    img: cup4,
    productName: "cup",
    price: "400.00",
    color: "White",
    badge: true,
    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "White" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$400" },
      {
        label: "Original Price ",
        value: "600",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "213",
    img: clock1,
    productName: "Clock",
    price: "125.00",
    color: "Mixed",
    badge: true,
    des: "As symbols of both utility and beauty, these exquisitely crafted wall clocks merge the practicality of timekeeping with the aesthetic pleasure of fine art, making them indispensable accents in any environment.",
    cat: "Clock",

    ficheTech: [

      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Mixed" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$125" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "214",
    img: clock2,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Whether adorning a cozy living room or a sophisticated office space, these wall clocks captivate attention with their unique designs and timeless allure.",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "215",
    img: clock4,
    productName: "Clock",
    price: "225.00",
    color: "Mixed",
    badge: true,
    des: "Designed to transcend mere timekeeping, these wall clocks serve as functional art pieces, elevating the ambiance of any space with their captivating presence.",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Mixed" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$225" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "216",
    img: clock5,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Every glance at these beautifully designed wall clocks is a journey through craftsmanship, where every curve and detail tells a story of creativity and ingenuity",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock6,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "With their captivating visuals and precise timekeeping mechanisms, these clocks not only adorn walls but also evoke a sense of wonder and admiration.",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock7,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Timeless craftsmanship meets modern innovation in these exquisitely designed wall clocks, where traditional materials harmonize with contemporary aesthetics.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock8,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "From sleek minimalist designs to ornate vintage-inspired motifs, these wall clocks cater to diverse tastes, adding a touch of sophistication to any interior decor.",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock9,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Crafted with meticulous attention to detail, each clock is a testament to the fusion of form and function, offering a striking focal point for any room.",
    cat: "Clock",
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock10,
    productName: "Clock",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "A symphony of elegance and functionality, these wall clocks boast intricate designs that seamlessly blend artistry with timekeeping precision.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "217",
    img: bracelet1,
    productName: "Bracelet",
    price: "295.00",
    color: "Black&White",
    badge: true,
    des: "A bracelet is a piece of jewelry worn around the wrist, made from various materials",
    cat: "Bracelet",
  },
  
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: teddy,
    productName: "Teddy Bear",
    price: "300.00",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights.",
    cat: "Cup",
 
  },
  {
    _id: "202",
    img: tedddy6,
    productName: "Teddy Bear",
    price: "450",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
  

  },

  {
    _id: "203",
    img: teddy4,
    productName: "Teddy Bear",
    price: "350",
    color: "Pink",
    badge: true,
    brand: "Cup",
    des: "Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
   
  },
  {
    _id: "2005",
    img: teddy2,
    productName: "Teddy Bear",
    price: "550",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights.",
    cat: "Cup",
    
  },

  {
    _id: "20005",
    img: tedddy14,
    productName: "Teddy Bear",
    price: "450",
    color: "White",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
   
  },

  {
    _id: "206",
    img: teddy7,
    productName: "Teddy Bear",
    price: "550",
    color: "Pink",
    badge: true,
    brand: "Cup",
    des: "Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
    
  },

  {
    _id: "207",
    img: teddy8,
    productName: "Teddy Bear",
    price: "750",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights",
    cat: "Cup",
    
  },

  {
    _id: "208",
    img: teddy9,
    productName: "Teddy Bear",
    price: "450",
    color: "Red",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
   
     
  },
  {
    _id: "233",
    img: tedddy15,
    productName: "Teddy Bear",
    price: "650",
    color: "Grey",
    badge: true,
    brand: "Cup",
    des: "Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
    
  },
  
 
  {
    _id: "209",
    img: cup1,
    productName: "cup",
    price: "220.00",
    color: "White&Red",
    badge: true,
    brand:"Cup",
    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
       
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "White & Red" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$295" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "210",
    img: cup2,
    productName: "cup",
    price: "220.00",
    color: "Mixed",
    badge: true,
    brand:"Cup",

    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
       
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "Mixed" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },

  {
    _id: "211",
    img: cup3,
    productName: "cup",
    price: "250.00",
    color: "Black",
    badge: true,
    brand:"Cup",

    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
       
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$250" },
      {
        label: "Original Price ",
        value: "500",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "212",
    img: cup4,
    productName: "cup",
    price: "400.00",
    color: "White",
    badge: true,
    brand:"Cup",

    des: "The Naruto coffee mug is a must-have for any fan of the popular anime and manga series. This mug features vibrant and dynamic artwork inspired by the iconic characters and symbols from the Naruto universe.",
    cat: "Cup",
       
    ficheTech: [
      { label: "Product Name ", value: "Naruto Coffee Mug 🍵" },
      { label: "Color ", value: "White" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$400" },
      {
        label: "Original Price ",
        value: "600",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Ceramic " },
    ],
  },
  {
    _id: "213",
    img: clock1,
    productName: "clock",
    price: "325.00",
    color: "Mixed",
    badge: true,
    brand:"Clock",

    des: "As symbols of both utility and beauty, these exquisitely crafted wall clocks merge the practicality of timekeeping with the aesthetic pleasure of fine art, making them indispensable accents in any environment.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "214",
    img: clock2,
    productName: "clock",
    price: "420.00",
    color: "Black",
    badge: true,
    brand:"Clock",

    des: "Whether adorning a cozy living room or a sophisticated office space, these wall clocks captivate attention with their unique designs and timeless allure.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "215",
    img: clock4,
    productName: "clock",
    price: "355.00",
    color: "White",
    badge: true,
    brand:"Clock",

    des: "Designed to transcend mere timekeeping, these wall clocks serve as functional art pieces, elevating the ambiance of any space with their captivating presence.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "216",
    img: clock5,
    productName: "clock",
    price: "320.00",
    color: "Red Mettalic",
    badge: true,
    brand:"Clock",

    des: "Every glance at these beautifully designed wall clocks is a journey through craftsmanship, where every curve and detail tells a story of creativity and ingenuity",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock6,
    productName: "clock",
    price: "500.00",
    color: "Feather Blue & White",
    badge: true,
    brand:"Clock",

    des: "With their captivating visuals and precise timekeeping mechanisms, these clocks not only adorn walls but also evoke a sense of wonder and admiration.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock7,
    productName: "clock",
    price: "220.00",
    color: "Black",
    badge: true,
    brand:"Clock",

    des: "Timeless craftsmanship meets modern innovation in these exquisitely designed wall clocks, where traditional materials harmonize with contemporary aesthetics.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock8,
    productName: " clock",
    price: "300.00",
    color: "pearl pink",
    badge: true,
    brand:"Clock",

    des: "From sleek minimalist designs to ornate vintage-inspired motifs, these wall clocks cater to diverse tastes, adding a touch of sophistication to any interior decor.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock9,
    productName: "clock",
    price: "350.00",
    color: "pearl pink",
    badge: true,
    brand:"Clock",

    des: "Crafted with meticulous attention to detail, each clock is a testament to the fusion of form and function, offering a striking focal point for any room.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },
  {
    _id: "2160",
    img: clock10,
    productName: "clock",
    price: "450.00",
    color: "mixed",
    badge: true,
    brand:"Clock",

    des: "A symphony of elegance and functionality, these wall clocks boast intricate designs that seamlessly blend artistry with timekeeping precision.",
    cat: "Clock",
       
    ficheTech: [
      { label: "Product Name ", value: "Clock ⏰" },
      { label: "Color ", value: "Black" },

      { label: "Brand", value: "Prettier" },
      { label: "Discount Price", value: "$220" },
      {
        label: "Original Price ",
        value: "300",
      },
      { label: "Review ", value: "⭐⭐⭐⭐ " },
      { label: "Height  ", value: "20cm" },
      { label: "Material  ", value: "Glass " },
    ],
  },

  {
    _id: "217",
    img: bracelet1,
    productName: "Bracelet",
    price: "295.00",
    color: "White & Black",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.    ",
    cat: "Bracelet",
  },
  {
    _id: "219",
    img: bracelet2,
    productName: "Bracelet",
    price: "220.00",
    color: "Pink & Black",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.",
    cat: "Bracelet",
  },
  {
    _id: "2191",
    img: bracelet3,
    productName: "Bracelet",
    price: "400.00",
    color: "Mixed",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.",
    cat: "Bracelet",
  },
  {
    _id: "2192",
    img: bracelet4,
    productName: "Bracelet",
    price: "300.00",
    color: "Black & White",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.",
    cat: "Bracelet",
  },
  {
    _id: "2193",
    img: bracelet5,
    productName: "Bracelet",
    price: "390.00",
    color: "Pink & Violet",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.",
    cat: "Bracelet",
  },
  {
    _id: "2194",
    img: bracelet6,
    productName: "Bracelet",
    price: "30.00",
    color: "Mixed",
    badge: true,
    brand:"Bracelet",

    des: "Stunningly crafted bracelets available for sale, exuding elegance and charm with intricate designs.",
    cat: "Bracelet",
  },

  // =================== imprimante hp =================

  {
    _id: "900",
    img: tedddy17,
    productName:
      "Teddy Bear",
    price: "450",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Desc : Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights.",
    cat: "Cup",
    
  },

  {
    _id: "901",
    img: tedddy117,
    productName: "Teddy Bear",
    price: "750",
    color: "Pink",
    badge: true,
    brand: "Cup",
    des: "Desc : Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
    
  },

  {
    _id: "tedddy1118",
    img: tedddy1118,
    productName: "Teddy Bear",
    price: "550",
    color: "White",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
   
  },
  // =================== imprimante ricoh =================
  {
    _id: "tedddy16",
    img: tedddy16,
    productName: "Teddy Bear",
    price: "550",
    color: "White",
    badge: true,
    brand: "Cup",
    des: "Desc : Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights.",
    cat: "Cup",
    
  },

  {
    _id: "b",
    img: b,
    productName: "Teddy Bear",
    price: "650",
    color: "Red",
    badge: true,
    brand: "Cup",
    des: "Desc : Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
    
  },
  {
    _id: "tedddy119",
    img: tedddy119,
    productName: "Teddy Bear",
    price: "500",
    color: "White",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
    
  },
  {
    _id: "now",
    img: now,
    productName: "Teddy Bear",
    price: "550",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Desc : Soft and cuddly teddy bear available for sale, perfect for cozying up on chilly nights.",
    cat: "Cup",
    
  },
  {
    _id: "a",
    img: a,
    productName: "Teddy Bear",
    price: "390",
    color: "White",
    badge: true,
    brand: "Cup",
    des: "Desc : Crafted with premium materials, this timeless toy brings comfort and joy to hearts worldwide.",
    cat: "Cup",
   
  },

  // =================== imprimante ricoh =================

  

  {
    _id: "tedddyy",
    img: tedddyy,
    productName: "Teddy Bear",
    price: "950",
    color: "Brown",
    badge: true,
    brand: "Cup",
    des: "Adorable addition to any collection or a delightful gift for loved ones of all ages.",
    cat: "Cup",
    
  },
];
