"use client"

import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"

export const AuthHeader = () => {

  const [scrolled, setScrolled] = useState<boolean>(false)

 useEffect(() => {
   window.addEventListener("scroll", () => {
    if (scrollY > 5) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
   })
 }, [])
 
  
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
        <AppBar position="sticky" sx={{top: 0, bgcolor: scrolled ? "rgba(230, 212, 212, 0.4)" : "transparent" , padding: {xs: "24px", md: "24px 40px"}, zIndex: 50 }} elevation={0}>
            <Toolbar sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Typography
              variant="h3"
              sx={{
                color: "#163832",
                fontFamily: 'var(--font-quintessential)',
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 400,
              }}
            >
              -Vestir-
              </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}



