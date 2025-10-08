import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'



export default function NotFound(){
  return (
    <Box component="section" sx={{ width: '100%', height: '100vh' }}>
          <Stack spacing={2}>
            <Typography variant="h2">404</Typography>
            <Typography variant='h6'>opps! Page Not Found</Typography>
            <Link underline='none' sx={{ padding: '4px 8px' }}>Go Back</Link>
          </Stack>
    </Box>
  )
}
