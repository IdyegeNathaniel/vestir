"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import EmptyCart from "@/components/EmptyCart";
import { ProductType } from "@/components/assets/assets";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";
import OrderQuantity from "@/components/OrderQuantity";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { ArrowRight } from "lucide-react";
import { Divider } from "@mui/material";
import AddressForm from "@/components/AddressForm";
import PaymentMethod from "@/components/PaymentMethod";

export default function Cart() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [shippingForm ] = useState(null);

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <Box component="section">
      <Box sx={{ minHeight: "70vh", padding: "24px" }}>
        <Typography
          component="h1"
          sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "2rem" } }}
        >
          Shopping Cart
        </Typography>

        {/* <Box sx={{ marginTop: 5 }}>
                    <EmptyCart />
                </Box> */}

        {/* STEPS */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: {xs: "start", md:"center"},
            gap: 3,
            my: 4,
          }}
        >
          {steps.map((step) => (
            <Box
              key={step.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                pb: 2,
                borderBottom:
                  step.id === activeStep ? "2px solid black" : "1px solid gray",
                color: step.id === activeStep ? "2px solid gray" : "gray",
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: step.id === activeStep ? "black" : "gray",
                  color: "white",
                  borderRadius: "100%",
                  padding: "4px",
                }}
              >
                {step.id}
              </Box>
              <Typography>{step.step}</Typography>
            </Box>
          ))}
        </Box>

        {/* STEPS AND DETAILS */}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 8,
            alignItems:{ xs: "center", md:"start"},
            justifyContent: "center"
          }}
        >
          {/* CART PRODUCT */}

          <Box
            sx={{
              width: {xs: "100%", md: "60%"},
              backgroundColor: "#dedede",
              borderRadius: "10px",
              padding: "12px",
            }}
          >

            { activeStep === 1 ? (
             <Box>
                {products.map((product) => (
                  <Box
                    key={product.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                      borderBottom: "1px solid white"
                    }}
                  >
                    <Box sx={{ width: "25%" }}>
                      <Image
                        src={product.thumbnail}
                        width={100}
                        height={100}
                        alt="product-image"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, fontSize: { xs: "12px", md: "16px" } }}
                        gutterBottom
                      >
                        {product.title}
                      </Typography>
                      <Typography variant="body1" sx={{}} gutterBottom>
                        ${product.price}
                      </Typography>

                      {/* INCREASE OR DECREASE QTY */}
                      <OrderQuantity />
                    </Box>
                    <Box
                      sx={{
                        width: "25%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "end",
                      }}
                    >
                      <Tooltip title="Remove" enterDelay={500} leaveDelay={300}>
                        <IconButton sx={{ "&:hover": {bgcolor: "#efdfdfff"} }}>
                          <DeleteForeverRounded color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                ))}
              </Box>)
            : activeStep === 2 ? (
            <AddressForm />
          ) : activeStep === 3 &&
            shippingForm ? ( 
            <PaymentMethod />
           ) :
            (<Typography color="error">Please Fill Shipping Form</Typography>)} 
          </Box>

          {/*  DETAILS  */}
          <Box
            sx={{
              width: {xs: "100%", md:"30%"},
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#dedede",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: "16px", fontWeight: 600 }}
              gutterBottom
            >
              Cart Details
            </Typography>
            <Stack direction="column" spacing={2} sx={{ color: "gray" }}>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1" sx={{ color: "black"}}>
                  ${products.reduce((acc, item) => 1 + item.price * 3, 0)}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body1">Shipping Fee</Typography>
                <Typography variant="body1">$10</Typography>
              </Box>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body1">Discount</Typography>
                <Typography variant="body1">$10</Typography>
              </Box>

              <Divider sx={{ bgcolor: "gray" }} />
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "black"  }}
              >
                <Typography variant="body1">Total</Typography>
                <Typography variant="body1" sx={{}}>
                  ${products.reduce((acc, item) => 1 + item.price * 3, 0)}
                </Typography>
              </Box>
            </Stack>
            {activeStep === 1 && (
              <Button
                onClick={() => router.push("/cart?step=2", { scroll: false })}
                endIcon={<ArrowRight size={15} />}
                sx={{ backgroundColor: "#051F20", color: "white", textTransform: "none" }}
              >
                Continue
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const steps = [
  {
    id: 1,
    step: "Shopping Cart",
  },
  {
    id: 2,
    step: "Shipping Address",
  },
  {
    id: 3,
    step: "Payment Method",
  },
];

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
];
