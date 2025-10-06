import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";


export const Footer: React.FC = () => {
    return (
        <Box component="section" sx={{ width: '100%', mx: 'auto', bgcolor: '#8EB69B'}}>
            <Box sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 24px' }}>
                <Box>
                    <Typography variant="body2" sx={{ textAlign: 'center', color: 'white', fontWeight: 500, fontSize: { xm: '14px', md: '16px' } }}>
                        Copyright © 2025. Vestir<sup>®</sup>
                    </Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Link href="#" sx={{ fontSize: { xm: '14px', md: '16px' }, color: '#000',}}>Privacy</Link>
                    <Link href="#" sx={{ fontSize: { xm: '14px', md: '16px' }, color: '#000',}}>Terms of service</Link>
                </Stack>
            </Box>
        </Box>
    )
}
