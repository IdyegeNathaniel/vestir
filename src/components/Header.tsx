"use client";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Person from "@mui/icons-material/PersonOutlined";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Marquee } from "../components/Marquee";
import Link from "next/link";
import { Tooltip } from "@mui/material";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 10,
  },
}));



const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenustyle = {
    bgcolor: "#f3f3f3ff",
    width: "100%",
    height: "50vh",
    position: "absolute",
    top: 50,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    fontSize: "1rem",
    fontWeight: 500,
    transform: showMenu ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1000
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Marquee />
      <AppBar position="static" sx={{ bgcolor: "#8EB69B" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* MOBILE MENU */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, flex: 1, justifyContent: "flex-start" }}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <IconButton>
                <CloseIcon 
                  sx={{ color: "#163832", fontSize: 30, fontWeight: 600 }}
                />{" "}
              </IconButton>
            ) : (
              <IconButton>
                <MenuOpenIcon
                  sx={{ color: "#163832", fontSize: 30, fontWeight: 600 }}
                />
              </IconButton>
            )}
          </Box>
          {showMenu && (
            <Box sx={showMenustyle}>
              {["HOME", "PRODUCTS", "APPOINTMENT"].map((item, index) => (
                <Link
                  key={index}
                  href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  style={{
                    color: "#163832",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          )}

          {/* 1080p */}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              alignItems: "center",
              gap: 2,
            }}
          >
            {["HOME", "PRODUCTS", "APPOINTMENT"].map((item, index) => (
              <Link
                key={index}
                href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                style={{
                  color: "#163832",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
{/* LOGO */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{
              textDecoration: "none",
              color: "#163832",
}}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'var(--font-quintessential)',
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 400,
              }}
            >
              -Vestir-
              </Typography>
            </Link>
          </Box>
          
          {/* CART AND PROFILE */}
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
            
            {/* Profile */}
              <Tooltip title="Profile" enterDelay={500} leaveDelay={300}>
                <IconButton aria-label="profile">
                  <Person sx={{ color: "#163832" }} />
                </IconButton>
              </Tooltip>
            
            {/* Cart */}
            <Tooltip title="Cart" enterDelay={500} leaveDelay={300}>
              <StyledBadge color="primary" badgeContent={2}>
                <IconButton aria-label="cart">
                  <ShoppingBagOutlinedIcon sx={{ color: "#163832" }} />
                </IconButton>
              </StyledBadge>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
