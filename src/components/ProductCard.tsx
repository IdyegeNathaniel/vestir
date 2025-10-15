"use client"

import Typography from "@mui/material/Typography"
import Rating from "@mui/material/Rating"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import { ProductType } from "./assets/assets"
import { useState } from "react"
import Link from "next/link"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"


export const ProductCard = ({ product }: { product: ProductType }) => {
  const [fullDescription, setFullDescription] = useState<boolean>(false)

  let description = product.description
  if (!fullDescription) {
    description = description.substring(0, 90) + "....";
  }

  return (
    <Box sx={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column', gap: 1, borderRadius: "4px", boxShadow: 2 }}>
      <Box sx={{ position: "relative ", display: "flex", alignItems: "center" }}>
        <Chip sx={{ position: "absolute", top: 10, right: 10, fontSize: "14px", bgcolor: "red", color: "white", textAlign: "center"  }} label={- `${product.discountPercentage}`} />
        <Link href="#">
          <Image src={product.thumbnail} width={280} height={250} alt="product-img" />
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "8px", gap: 2 }}>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: "14px", md: "18px" }, mb: 1 }}>{product.title}</Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "gray" }}>{description}</Typography>
          <Button variant="text" sx={{fontSize: "12px", fontcolor: "#000", textTransformeation: "none"}} onClick={() => setFullDescription(prev => !prev)} >{fullDescription ? "Less" : "More"}</Button>

        </Box>
        <Stack spacing={1} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "18px" }, fontWeight: 600 }}>${product.price}</Typography>
          <Rating defaultValue={product.rating} precision={0.5} size="small" readOnly />
        </Stack>
        <Button variant="contained" size="medium">Add to Cart</Button>
      </Box>
    </Box>
  )
}
