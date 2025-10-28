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
import { ShoppingCart } from "lucide-react"


export const ProductCard = ({ product }: { product: ProductType }) => {
  

  return (
    <Box sx={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column', gap: 1, borderRadius: "4px", boxShadow: 2 }}>
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center",  alignItems: "center" }}>
        <Chip sx={{ position: "absolute", top: 10, right: 10, fontSize: "14px", bgcolor: "red", color: "white", textAlign: "center"  }} size="small" label={- `${product.discountPercentage}`} />
        <Link href={`/product/${product.id}`}>
          <Image src={product.thumbnail} width={280} height={250} style={{ height: "250px", width: "100%", objectFit: "cover",}} alt="product-img" />
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "8px", gap: 2 }}>
        <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
          <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, mb: 1 }}>{product.title}</Typography>
          <Typography variant="h2" sx={{ color: "#312f2fff", fontSize: { xs: "14px", md: "14px" }, mb: 1 }}>{product.brand}</Typography>
        </Box>
        <Stack spacing={1} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "18px" }, fontWeight: 600 }}>${product.price}</Typography>
          <Rating defaultValue={product.rating} precision={0.5} size="small" readOnly />
        </Stack>
        <Button variant="contained" size="medium"  sx={{textTranform: "none", bgcolor: "#163832", '&:hover': { bgcolor: "#235347" }}} startIcon={<ShoppingCart style={{ width: "14px", height: "14px" }} />}>Add to Cart</Button>
      </Box>
    </Box>
  ) 
}
