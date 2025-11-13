import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"

export const AuthHeader = () => {
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: "transparent", padding: {xs: "24px", md: "24px 40px"} }} elevation={0}>
            <Toolbar sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Typography
              variant="h3"
              sx={{
                color: "#163832",
                fontFamily: 'var(--font-quintessential)',
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 400,
              }}
            >
              -Vestir-
              </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}



