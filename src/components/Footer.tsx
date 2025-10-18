import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";


export const Footer: React.FC = () => {
    return (
        <Box component="section" sx={{ maxWidth: '100%', mx: 'auto', bgcolor: '#8EB69B', padding: '8px 24px', }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: "flex-start", md: 'center' }, gap: 5, py: 3 }} >
                <Stack spacing="3">
                    <Typography sx={{fontWeight: 600, mb: 2}}>Legal</Typography>
                    {["Privacy Policy","Return and Refunds","Shipping Policy","Terms of Service"].map((item, index) => (
                        <Typography key={index} sx={{fontSize: "12px", py: "4px",}}>{item}</Typography>
                    ))}
                </Stack>

                <Stack spacing="3">
                    <Typography sx={{fontWeight: 600, mb: 2}}>Brand</Typography>
                    {["About Us","Best Sellers","Contact Us", "Socials"].map((item, index) => (
                        <Typography key={index} sx={{fontSize: "12px", py: "4px",}}>{item}</Typography>
                    ))}
                </Stack>
            </Box>
            <Divider sx={{my: 3}} />
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
