import AccountTypes from '@/components/AccountTypes'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function page() {
  return (
    <Box   
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 24px"
      }}>
        <Typography variant='h4' sx={{ fontWeight: 600,  fontSize: { xs: "20px", md: "34px" } }} gutterBottom>How would you like to use Vestir?</Typography>
        <Typography variant='body1' sx={{ fontSize: "18px" , color: "#333" }} gutterBottom>Please select an option below</Typography>
        <Box sx={{ my: 2 }}>
            <AccountTypes />
        </Box>
        <Button variant="text" href="/login" sx={{ textTransform: "none" }}>I already have an account</Button>
      </Box>
  )
}
