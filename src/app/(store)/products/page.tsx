"use client"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Categories } from "@/components/Categories"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/components/assets/assets"


export default function ProductPage() {
     return (
         <Box component="section" sx={{ padding: "24px" }}>
                <Box sx={{ marginY: 5 }}>
                    <Categories />
                </Box>
    
                <Box sx={{ alignItems: "center" }}>
                    <Grid container spacing={{ xs: 2, md: 3, }}>
                        {products.map((product) => (
                            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex", }}>
                                    <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box> 
            </Box>
        )
}