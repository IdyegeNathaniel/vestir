import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Loading() {
  return (
    <Box sx={{ backgroundColor: '#DAF1DE', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <Typography> 
        Vestir<sup>®</sup>
        </Typography>
        <Typography> 
            Since 2005
        </Typography>
    </Box>
  )
}
