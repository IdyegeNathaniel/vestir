
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: 'hidden',
  animation: "marquee 30s linear infinite",

  '@keyframes marquee': {
    '0%': {
      transform: "translateX(0%)"
    },

    '100%': {
      transform: "translateX(-50%)"
    }
  }

}))

export const Marquee = () => {
  return (
    <Box sx={{ backgroundColor: '#051F20', width: '100%', padding: '10px', fontSize: { xm: '12px', md: '14px' }, textAlign: 'center', color: 'white', overFlow: 'hidden' }}>
      <StyledBox>

        <Typography sx={{ whiteSpace: 'nowrap', paddingRight: '50px' }}>
          Free shipping on orders above ₦50,000 | Shop now and elevate your style | Shop our new collections and get free delivery nationwide.
        </Typography>
        <Typography sx={{ whiteSpace: 'nowrap', paddingRight: '50px' }}>
          Free shipping on orders above ₦50,000 | Shop now and elevate your style | Shop our new collections and get free delivery nationwide.
        </Typography>
      </StyledBox>
    </Box>
  )
}
