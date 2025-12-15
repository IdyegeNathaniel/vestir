import { Collections } from "@/components/Collections";
import { ProductsList } from "@/components/ProductsList";
import HeroSlider from "@/components/Slider";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import Loading from "../loading";

export default function Home() {
  return (
    <Box>
      <Box component="section">
        <Suspense fallback={<Loading />}>
          <HeroSlider />
        </Suspense>
      </Box>
      <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
        <Suspense fallback={<Loading />}>
          <ProductsList />
        </Suspense>
      </Box>
      <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
        <Suspense fallback={<Loading />}>
          <Collections />
        </Suspense>
      </Box>
    </Box>
  );
}
