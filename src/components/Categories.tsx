"use client"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Footprints, Handbag, Shirt, ShoppingCart, Watch } from "lucide-react"
import { Grid } from "@mui/material"


export const Categories = () => {


    const searchParams = useSearchParams()
    const selectedCategory = searchParams.get("category")



    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" }, gap: { xs: 1, md: 3 }, alignItems: { sx: "flex-start", md: "center" } }}>
            <Box sx={{ display: { xs: "column", md: "row" }, gap: 2 }}>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>Variant Products</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "24px", md: "48px" } }}>Our Best Collections</Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 3, md: 2 }} sx={{}}>
                    {
                        items.map((item, index) => (
                            <Grid key={index} size={{ xs: 6, md: 4, lg: 2 }} sx={{ bgcolor: "#fff", py: 2, display: "flex", alignItems: { sx: "flex-start", md: "center" }, justifyContent: "center", fontSize: {xs: "12px", md: "14px", lg: "16px"}, fontWeight: "bold" }}>

                                {item.icon}{item.name}
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

const items = [
    {
        name: "All",
        icon: <ShoppingCart style={{ width: "16px", height: "16px", paddingRight: "4px" }} />,
        slug: "all"
    },
    {
        name: "Shirts",
        icon: <Shirt style={{ width: "16px", height: "16px", paddingRight: "4px" }} />,
        slug: "shirts"
    },
    {
        name: "Shoes",
        icon: <Footprints style={{ width: "16px", height: "16px", paddingRight: "4px" }} />,
        slug: "shoes"
    },
    {
        name: "Watches",
        icon: <Watch style={{ width: "16px", height: "16px", paddingRight: "4px" }} />,
        slug: "watches"
    },
    {
        name: "Bags",
        icon: <Handbag style={{ width: "16px", height: "16px", paddingRight: "4px" }} />,
        slug: "bags"
    },
]
