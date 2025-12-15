import { Collections } from "@/components/Collections";
import { ProductsList } from "@/components/ProductsList";
import HeroSlider from "@/components/Slider";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Suspense } from "react";

export default function Home() {
  return (
    <Box>
      <Box component="section">
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <HeroSlider />
        </Suspense>
      </Box>
      <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <ProductsList />
        </Suspense>
      </Box>
      <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <Collections />
        </Suspense>
      </Box>
    </Box>
  );
}
