"use client"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Categories } from "./Categories"
import { ProductCard } from "./ProductCard"
import { useState, useEffect } from "react"
import { products } from "../components/assets/assets"


export const ProductsList = () => {
    // const [products, setProducts] =useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)


    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const api = "https://dummyjson.com/products";
    //         setLoading(true)
    //         try {
    //             const res = await fetch(api);
    //             const data = await res.json();

    //             setProducts(data)
    //         } catch (error) {
    //             console.log(error)
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchProducts()
    // }, [])


    return (
        <Box>
            <Box sx={{ marginY: 5 }}>
                <Categories />
            </Box>

            <Box sx={{ alignItems: "center" }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {products.map((product) => (
                        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex", }}>
                            
                                <ProductCard product={product} />
                            
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
