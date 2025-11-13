import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Link from "@mui/material/Link"

export const AuthFooter = () => {
  return (
    <Box component="section" sx={{ maxWidth: '100%', mx: 'auto', bgcolor: '#8EB69B', padding: '8px 24px', }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', }}>
                <Box>
                    <Typography variant="body2" sx={{ textAlign: 'center', color: '#000', fontWeight: 500, fontSize: { xs: '14px', md: '16px' } }}>
                        ©2025 Vestir<sup>®</sup>. All RIghts Reserved 
                    </Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Link href="#" sx={{ fontSize: { xs: '14px', md: '16px' }, color: '#000',}}>Privacy</Link>
                    <Link href="#" sx={{ fontSize: { xs: '14px', md: '16px' }, color: '#000',}}>Terms of service</Link>
                </Stack>
            </Box>
    </Box>
  )
}
