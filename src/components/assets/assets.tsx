import Collection1 from "./Images/Collection1.jpg";
import Collection3 from "./Images/Collection3.jpg";
import Collection31 from "./Images/Collection3.1.jpg";
import Personal from "./Images/Personal.png"
import Vendor from "./Images/Vendor.png"
import { StaticImageData } from "next/image";

interface ImagesTypes {
  Personal: StaticImageData;
  Vendor: StaticImageData;
  Collection1: StaticImageData;
  Collection3: StaticImageData;
  Collection31: StaticImageData;
}

export const images: ImagesTypes = {
  Personal,
  Vendor,
  Collection1,
  Collection3,
  Collection31,
};

export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock?: number;
  tags?: string[];
  brand: string;
  sku?: string;
  weight?: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewDesc: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewDesc: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewDesc: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string | StaticImageData;
  };
  images: string[];
  thumbnail: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    category: "mens-shirts",
    price: 29.99,
    discountPercentage: 15.35,
    rating: 3.64,
    brand: "Fashion Trends",
    dimensions: {
      width: 27.49,
      height: 23.73,
      depth: 28.61,
    },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 1,
        comment: "Waste of money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Logan Lee",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "logan.lee@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Zachary Lee",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "zachary.lee@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Aurora Rodriguez",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "aurora.rodriguez@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 18,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7148674604957",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
  },
  {
    id: 2,
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    category: "mens-shirts",
    price: 24.99,
    discountPercentage: 0.94,
    rating: 3.18,
    brand: "Gigabyte",
    dimensions: {
      width: 22.31,
      height: 26.47,
      depth: 13.27,
    },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Excellent quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Amelia Perez",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "amelia.perez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Tyler Davis",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "tyler.davis@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Disappointing product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Harper King",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "harper.king@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 16,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1654388837068",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
  },
  {
    id: 3,
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    category: "mens-shirts",
    price: 34.99,
    discountPercentage: 19.5,
    rating: 3.46,
    brand: "Classic Wear",
    dimensions: {
      width: 9.34,
      height: 5.97,
      depth: 10.85,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Disappointing product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Aubrey Wagner",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "aubrey.wagner@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Evan Reed",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "evan.reed@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Very disappointed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Evelyn Gonzalez",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "evelyn.gonzalez@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 13,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2821496314023",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
  },
  {
    id: 4,
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    category: "mens-shirts",
    price: 19.99,
    discountPercentage: 6.83,
    rating: 2.9,
    brand: "Casual Comfort",
    dimensions: {
      width: 5.02,
      height: 16.57,
      depth: 9.6,
    },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 5,
        comment: "Highly recommended!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Charlotte Lopez",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "charlotte.lopez@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ellie Stewart",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "ellie.stewart@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Sadie Morales",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "sadie.morales@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 4,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9995865660204",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
  },

  {
    id: 5,
    title: "Longines Master Collection",
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    category: "mens-watches",
    price: 1499.99,
    discountPercentage: 17.24,
    rating: 3.87,
    stock: 100,
    tags: ["watches", "luxury watches"],
    brand: "Longines",
    dimensions: {
      width: 15.39,
      height: 10.06,
      depth: 20.32,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eli Ward",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "eli.ward@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Very disappointed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Owen Fisher",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "owen.fisher@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nathan Reed",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "nathan.reed@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
  },
  {
    id: 6,
    title: "Rolex Cellini Date Black Dial",
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    category: "mens-watches",
    price: 8999.99,
    discountPercentage: 8.88,
    rating: 4.97,
    stock: 40,
    tags: ["watches", "luxury watches"],
    brand: "Rolex",
    dimensions: {
      width: 13.46,
      height: 26.1,
      depth: 17.9,
    },
    warrantyInformation: "3 months warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Not worth the price!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Owen Sullivan",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "owen.sullivan@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Jonathan Pierce",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "jonathan.pierce@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Would not buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Adrian Flores",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "adrian.flores@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
  },
  {
    id: 7,
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    category: "mens-watches",
    price: 12999.99,
    discountPercentage: 17.52,
    rating: 2.58,
    stock: 36,
    tags: ["watches", "luxury watches"],
    brand: "Rolex",
    dimensions: {
      width: 26.06,
      height: 25.19,
      depth: 13.17,
    },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ella Adams",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "ella.adams@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Leo Rivera",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "leo.rivera@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very pleased!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Emma Miller",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "emma.miller@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
  },
  {
    id: 8,
    title: "Rolex Datejust",
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    category: "mens-watches",
    price: 10999.99,
    discountPercentage: 3.73,
    rating: 3.66,
    stock: 86,
    tags: ["watches", "luxury watches"],
    brand: "Rolex",
    dimensions: {
      width: 23.11,
      height: 19.97,
      depth: 27.04,
    },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Alice Smith",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "alice.smith@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very pleased!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Abigail Rivera",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "abigail.rivera@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Waste of money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Daniel Cook",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "daniel.cook@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
  },
  {
    id: 9,
    title: "Rolex Submariner Watch",
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    category: "mens-watches",
    price: 13999.99,
    discountPercentage: 5.05,
    rating: 2.69,
    stock: 55,
    tags: ["watches", "luxury watches"],
    brand: "Rolex",
    sku: "MEN-ROL-ROL-098",
    weight: 4,
    dimensions: {
      width: 17.69,
      height: 12.48,
      depth: 8.75,
    },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Luna Perez",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "luna.perez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly recommended!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Hannah Robinson",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "hannah.robinson@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Aaliyah Hanson",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "aaliyah.hanson@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7133320173118",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
  },

  {
    id: 88,
    title: "Nike Air Jordan 1 Red And Black",
    description:
      "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    category: "mens-shoes",
    price: 149.99,
    discountPercentage: 4.12,
    rating: 4.77,
    stock: 7,
    tags: ["footwear", "athletic shoes"],
    brand: "Nike",
    sku: "MEN-NIK-NIK-088",
    weight: 3,
    dimensions: {
      width: 17.44,
      height: 9.52,
      depth: 27,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Elena Long",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "elena.long@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Addison Wright",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "addison.wright@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Waste of money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Mason Wright",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "mason.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7631625812393",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
  },
  {
    id: 89,
    title: "Nike Baseball Cleats",
    description:
      "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    category: "mens-shoes",
    price: 79.99,
    discountPercentage: 18.04,
    rating: 3.88,
    stock: 12,
    tags: ["footwear", "sports cleats"],
    brand: "Nike",
    sku: "MEN-NIK-NIK-089",
    weight: 9,
    dimensions: {
      width: 11.75,
      height: 26.65,
      depth: 19.6,
    },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Aaron Cook",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "aaron.cook@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Very disappointed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Noah Lewis",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "noah.lewis@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Michael Johnson",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "michael.johnson@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 3,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2449851358796",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
  },
  {
    id: 90,
    title: "Puma Future Rider Trainers",
    description:
      "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    category: "mens-shoes",
    price: 89.99,
    discountPercentage: 4.2,
    rating: 4.9,
    stock: 90,
    tags: ["footwear", "casual shoes"],
    brand: "Puma",
    sku: "MEN-PUM-PUM-090",
    weight: 6,
    dimensions: {
      width: 17.45,
      height: 15.58,
      depth: 23.13,
    },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Jackson Morales",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "jackson.morales@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very disappointed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Sophia Jones",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "sophia.jones@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Logan Torres",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "logan.torres@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 10,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9715091831404",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
  },
  {
    id: 91,
    title: "Sports Sneakers Off White & Red",
    description:
      "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    category: "mens-shoes",
    price: 119.99,
    discountPercentage: 4.97,
    rating: 4.77,
    stock: 17,
    tags: ["footwear", "athletic shoes"],
    brand: "Off White",
    sku: "MEN-OFF-SPO-091",
    weight: 7,
    dimensions: {
      width: 14.37,
      height: 23.44,
      depth: 12.84,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Sadie Morales",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "sadie.morales@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Julian Newton",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "julian.newton@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Logan Lee",
        reviewDesc:
          "The product is a product that is product for the use specialised for the products usecase ",
        reviewerEmail: "logan.lee@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 5,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6740319943645",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
  },
];

export interface SlideType {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export const slides: SlideType[] = [
  {
    id: 1,
    title: "Vestir Collection 2026",
    subtitle: "Discover the latest trends",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh styles just landed",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=600&fit=crop",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Shop Vestir",
    subtitle: "Explore luxury fashion from the comfort of your home.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop",
    cta: "Get Deal",
  },
];
