import { Collections } from "@/components/Collections";
import { ProductsList } from "@/components/ProductsList";
import HeroSlider from "@/components/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const backGround = {
}

export default function Home() {
    return (
        <Box>
            <Box component="section" style={backGround}>
                <HeroSlider />
            </Box>
            <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
                <ProductsList />
            </Box>
            <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
                <Collections />
            </Box>
        </Box>
    )
}