"use client"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { IconButton } from "@mui/material"
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined"
import { useState } from "react"

export const Categories = () => {
    const[showCategory, setShowCategory] = useState<boolean>(false)

    const handleShowCategory = () => setShowCategory(prev => !prev);
  return (
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" }, gap: {xs: 1, md: 3}, alignItems: {sx: "flex-start" ,md: "center"} }}>
          <Box sx={{ display: { xs: "column", md: "row" }, gap: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "12px" }}>Variant Products</Typography>
              <Typography variant="h2" sx={{ fontSize: {xs: "24px", md:"48px"} }}>Our Best Collections</Typography>
          </Box>
        {showCategory &&  
          <Box sx={{ display: "flex", gap: { sx: 1, md: 3 }, alignItems: "center", transition: "5s ease-in" }}>
              {
                  ["All", "New Collection", "Bags", "shoes", "Watches"].map((item, index) => (
                      <Box key={index} sx={{bgcolor: "#fefefe", padding: "4px 10px",  cursor: "pointer" }}>{item}</Box>
                  ))
              }
              </Box>
          }
          <Box>
              <IconButton onClick={handleShowCategory} sx={{fontWeight: 600, color: "#000"}}>
                  <FilterAltOutlined />
                  <Typography>Filter</Typography>
              </IconButton>
          </Box>
      </Box>
  )
}
