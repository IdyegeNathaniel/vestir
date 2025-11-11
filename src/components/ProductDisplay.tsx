"use client"

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { ProductType } from "./assets/assets";

interface ProductDisplayProps {
    product: ProductType
}

const ProductDisplay = ({product} : ProductDisplayProps) => {

     const[thumbImg, setThumbImg] = useState( product.thumbnail )

     const handleThumbImg = (imageUrl: string) => { 
        setThumbImg(imageUrl)
    }

 
  return (
    <Box component="section" sx={{ padding: { xs: "12px", md: "24px" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/* LEFT BOX */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Box
            sx={{
              width: "inherit",
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Image
              src={thumbImg}
              width={400}
              height={500}
              alt={product.title}
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {product.images.map((image) => (
              <Grid
                key={image}
                onClick={ () => handleThumbImg(image) }
                sx={{
                  cursor: "pointer",
                  padding: "1px 2px",
                  border: thumbImg === image ? "2px solid #000" : "1px solid transparent" ,
                  "&:hover": { border: "1px solid #000" },
                }}
              >
                <Image src={image} width={50} height={50} alt={`${image}image`} />
              </Grid>
            ))}
          </Grid>
        </Box>


        {/* RIGHT BOX */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            gap: 3,
            padding: { xs: "8px", md: "4px" },
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "start", md: "center" },
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, fontSize: { xs: "2rem", md: "2rem" } }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  bgcolor: "#235347",
                  color: "white",
                  padding: "4px 6px",
                }}
              >
                {product.availabilityStatus}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
              {product.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                ${product.price}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                ({product.rating}){" "}
                <Rating
                  sx={{ paddingLeft: "4px" }}
                  size="medium"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
            </Box>
            <Box>
              <Button
                startIcon={<ShoppingCart />}
                sx={{
                  "& .MuiButton-startIcon": {
                    position: "absolute",
                    left: "16px",
                    margin: 0,
                  },
                  bgcolor: "#235347",
                  justifyContent: "center",
                  color: "white",
                  paddingLeft: "48px",
                  paddingY: "4",
                  borderRadius: "4px",
                }}
                fullWidth
              >
                Add to Cart
              </Button>
            </Box>
          </Box>

          {/* POliCIES & REVIEWS */}
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "1.5rem", fontWeight: 500, mb: 1 }}
              >
                Reviews
              </Typography>

              {/* Review list */}
              {product.reviews.map((review) => (
                <Box key={review.rating} sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Rating
                      size="medium"
                      value={review.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "10px", md: "12px" },
                        color: "#333",
                      }}
                    >
                      {new Date(review.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#333",
                      fontSize: { xs: "1rem", md: "1rem" },
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {review.comment}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333", mb: 1 }}>
                    {review.reviewDesc}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333", mb: 1 }}>
                    By {review.reviewerName}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "start", md: "center" },
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{}}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.5rem", fontWeight: 500, mb: 1 }}
                >
                  Specifications
                </Typography>
                <li>Minimum Order Quantity: {product.minimumOrderQuantity}</li>
                <li>{product.warrantyInformation}</li>
                <li>{product.shippingInformation}</li>
                <li>{product.returnPolicy}</li>
                <li>
                  Dimension: {product.dimensions.height}*
                  {product.dimensions.width}*{product.dimensions.depth}
                </li>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {product.meta?.qrCode && (
                  <Image
                    src={product.meta.qrCode}
                    width={80}
                    height={80}
                    alt="qr-code"
                  />
                )}

                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "10px", md: "12px" } }}
                >
                  {product.meta?.barcode}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductDisplay