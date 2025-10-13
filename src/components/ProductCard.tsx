import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"
import { ProductType } from "./assets/assets"



export const ProductCard = ({ product } : {product: ProductType } ) => {
  return (
      <Box sx={{ width: 200, height: 280, display: 'flex', flexDirection: 'column', gap: 1 , borderRadius: "4px" }}>
          <Box sx={{}}>
        <Image src={product.thumbnail} width={200} height={200} alt="product-img"/>
          </Box>
          <Box sx={{ }}>
              <Typography variant="h2" sx={{ fontSize: "16px" }}>Collection2</Typography>
               <Typography variant="body2" sx={{ fontSize: "16px" }}>Collection2</Typography>
          </Box>
    </Box>
  )
}
