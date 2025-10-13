import { ProductCard } from "@/components/ProductCard";
import { ProductsList } from "@/components/ProductsList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const backGround = {
    backgroundImage: "url(/Collection2.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    width: "100%",
}

export default function Home() {
    return (
        <Box>
            <Box component="section" style={backGround}>
                {/* <HeroSlider /> */}
                <Box sx={{ width: "100%", display: 'flex', flexDirection: { xs: "column", md: "row" }, justifyContent: 'space-between', alignItems: 'center', gap: 5, }}>
                    <Box sx={{ flex: 1, justifyContent: "flex-end", width: "70%" }}><Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '58px' }, fontWeight: 600 }}>Be Stylish & Modish</Typography></Box>
                    <Box sx={{ flex: 1, justifyContent: "flex-end", width: "30%" }}><Typography variant="body2" sx={{ fontSize: "18px", color: '#4e4b4b' }}> Be the most stylish with our products. We always give the best for the products we produce. We use the best and premium materials so that it can last a long time and survive damage.</Typography> </Box>
                </Box>
            </Box>
            <Box sx={{ my: { xs: 2, md: 5 }, padding: "0 24px" }}>
                <ProductsList />
            </Box>
        </Box>
    )
}