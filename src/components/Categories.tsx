"use client"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { IconButton } from "@mui/material"
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined"

export const Categories = () => {
  return (
      <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-between"}, gap: 3, alignItems: "center" }}>
          <Box sx={{ display: { xs: "column", md: "row" }, gap: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "12px" }}>Variant Products</Typography>
              <Typography variant="h2" sx={{ fontSize: {xs: "24px", md:"48px"} }}>Our Best Collections</Typography>
          </Box>
          <Box sx={{ display: {xs: "none", md: "flex"}, gap: 3, alignItems: "center" }}>
              {
                  ["All", "New Collection", "Bags", "shoes", "Watches"].map((item, index) => (
                      <Box key={index} sx={{ padding: "4px 10px", border: "2px solid #051F20", borderRadius: "15px", cursor: "pointer" }}>{item}</Box>
                  ))
              }
          </Box>
          <Box>
              <IconButton>
                  <FilterAltOutlined />
              </IconButton>
          </Box>
      </Box>
  )
}
