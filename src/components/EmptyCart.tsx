import ShoppingCartCheckoutOutlined from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const EmptyCart = () => {
  return (
    <Box component="section">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 2 }}>
            <ShoppingCartCheckoutOutlined sx={{ fontSize: 50 }} />
            <Typography variant="h5" sx={{ fontWeight: 500 }}>Your Vestir Cart is Empty!</Typography>
            <Typography variant="body2" gutterBottom>Browse our store and discover our best deals!</Typography>
            <Button variant='contained' sx={{ background: "transparent", color: "#000", '&:hover': { bgcolor: '#8EB69B', color: "#fff" }}}>Back to Store</Button>
        </Box>
    </Box> 
  )
}

export default EmptyCart