"use client"

import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Badge, { BadgeProps } from "@mui/material/Badge"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { Marquee } from "../components/Marquee"

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({ 
  "& .MuiBadge-badge": {
        right: 5,
        top: 10,
  }
}))

const Header: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)


 
  return (
    <Box sx={{ flexGrow: 1, width: '100%'  }}>
      <Marquee />
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#8EB69B', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
          <Box onClick={ e => setShowMenu(prev => !prev) }>
              <IconButton>
              <MenuOpenIcon fontSize='large' sx={{ color: "#163832", fontSize: 20 }}  />Menu
              </IconButton>
            </Box>
            <Box>
            <Typography variant="h3" sx={{ fontFamily: 'Quintessential', fontSize: { xs: '2rem', md: '3rem'}, color: "#163832", fontWeight: 600, }}>-Vestir-</Typography>
            </Box>
          <Box sx={{ display:'flex', alignItems: 'center', gap: 2 }}>
            <StyledBadge color="primary" badgeContent={5}>
              <IconButton>
                <FavoriteBorderOutlinedIcon sx={{ color: "#163832" }}  />
              </IconButton>
            </StyledBadge>
            <StyledBadge color="primary" badgeContent={5}>
              <IconButton>
                <ShoppingBagOutlinedIcon sx={{ color: "#163832" }}  />
              </IconButton>
            </StyledBadge>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header