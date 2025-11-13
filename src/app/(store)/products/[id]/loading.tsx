"use client"

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loading() {
  return (
    <Box
      sx={{
        backgroundColor: "#DAF1DE",
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box component={motion.div} whileInView={{ scale: 1.2 }} transition={{ duration: 0.6, ease: "easeOut" }}></Box>
      <Typography component="h1" sx={{ fontSize: { xs: "2rem", md: "2rem" }, fontWeight: 600, }}>
        Vestir<sup>®</sup>
      </Typography>
      <Typography component="h2" sx={{ fontSize: { xs: "2rem", md: "1rem" }, fontWeight: 600, }}>Since 2005</Typography>
    </Box>
  );
}
