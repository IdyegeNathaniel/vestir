import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loading() {
  return (
    <Box
      sx={{
        backgroundColor: "#DAF1DE",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography component="h1" sx={{ fontSize: { xs: "2rem", md: "4rem" }, fontWeight: 600,}} gutterBottom>
        Vestir<sup>®</sup>
      </Typography>
      <Typography component="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 600, }}>Since 2005</Typography>
    </Box>
  );
}
