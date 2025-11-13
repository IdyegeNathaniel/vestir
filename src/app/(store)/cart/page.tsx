import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmptyCart from "@/components/EmptyCart";

export default function Cart(){
    return(
        <Box component="section">
            <Box sx={{ minHeight: "70vh", padding: "24px" }}>
                <Typography component="h1" sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "2rem" } }}>
                    Shopping Cart
                </Typography>
                <Box sx={{ marginTop: 5 }}>
                    <EmptyCart />
                </Box>
            </Box>
        </Box>
    )
}