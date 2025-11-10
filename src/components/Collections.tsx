"use client"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import { images } from "./assets/assets"
import { motion } from "framer-motion"

export const Collections: React.FC = () => {
    return (
      <Box component="section">
        <Box sx={{ display: { xs: "column", md: "row" }, gap: 2, marginY: 5 }}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            Vestir Specials
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "32px", md: "48px" }, fontWeight: 500 }}
          >
            Our Latest Collections
          </Typography>
        </Box>

        {/* COLECTION CONTAINERS */}
        <Box sx={{ width: "100%", display: "flex", gap: 3 }}>
          {/* LEFT */}
          <Box
            sx={{
              position: "relative",
              flexGrow: 1,
              width: "1/2",
              height: "450px",
              cursor: "pointer",
              borderRadius: "4px",
              boxShadow: 2,
            }}
          >
            <Image
              src={images.Collection1}
              fill
              style={{ objectFit: "cover" }}
              alt="collection-img"
            />
            <Box
            component={motion.div}
            whileHover={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                position: "absolute",
                bgcolor: "rgba(0, 0, 0, 0.4)",
                inset: 0,
                padding: 3,
              }}
            >
              <Typography
                component={motion.h2}
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem", lg: "3.75rem" },
                  color: "white",
                  fontWeight: 500,
                }}
              >
                {" "}
                Neatly Woven shirts suitable for Summer{" "}
              </Typography>
              <Typography
              component={motion.h6}
                variant="h6"
                sx={{ color: "rgba(255, 255, 255, 0.75)" }}
              >
                {" "}
                Be the best version of yourself{" "}
              </Typography>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                flexGrow: 1,
                padding: 3,
                height: "1/2",
              }}
            >
              <Image
                src={images.Collection3}
                fill
                style={{ objectFit: "cover" }}
                alt="collection-img"
              />
              <Box
            component={motion.div}
            whileHover={{ x: -5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
                sx={{
                  position: "absolute",
                  bgcolor: "rgba(0, 0, 0, 0.2)",
                  inset: 0,
                  padding: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: { xs: "1.5rem", md: "1.75rem", lg: "2rem" },
                  }}
                >
                  {" "}
                  Sustainable,
                  <br />
                  Handmade Fashion{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                flexGrow: 1,
                padding: 3,
                height: "1/2",
              }}
            >
              <Image
                src={images.Collection31}
                fill
                style={{ objectFit: "cover" }}
                alt="collection-img"
              />
              <Box
               component={motion.div}
            whileHover={{ x: 5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
                sx={{
                  position: "absolute",
                  bgcolor: "rgba(0, 0, 0, 0.2)",
                  inset: 0,
                  padding: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: { xs: "1.5rem", md: "1.75rem", lg: "2rem" },
                  }}
                >
                  {" "}
                  Timeless Fashion{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}
