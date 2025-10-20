import { products } from "@/components/assets/assets"
import Box from "@mui/material/Box"
import Image from "next/image"

export default function ProductPage() {
    return (
        <Box component="section" sx={{ bgcolor: "white", padding: "10px 24px" }}> 
            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 5 }, alignItems: "center", justifyContent: "center" }}>
                {/* LEFT BOX */}
                <Box sx={{  }}>
                    {/* <Image src={} width={400} height={400} alt="umage" /> */}
                </Box>

                {/* RIGHT BOX */}
                <Box>RIGHT</Box>
            </Box>
        </Box>
    )
}