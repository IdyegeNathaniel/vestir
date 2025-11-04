import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function ProducLoading(){
    return(
         <Box component="section" sx={{ padding: { xs: "12px", md: "24px" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* LEFT BOX */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Skeleton variant="rectangular"  />

          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Box>

        {/* RIGHT BOX */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            gap: 3,
            padding: { xs: "8px", md: "4px" },
          }}
        >
            <Skeleton variant="rectangular" sx={{ width: "inherit" }} height={100} />
          
      </Box>
    </Box>
    </Box>
    )
}