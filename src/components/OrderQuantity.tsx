"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const OrderQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const minProduct = 1
  //const maxProduct = 5

  const increaseQuantity = () => (
    setQuantity( quantity + 1 )
  )
 
  const decreaseQuantity = () => (
    setQuantity(Math.max( quantity - 1, minProduct ))
  )

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        mt: 2,
      }}
    >
      <MinusIcon size={20} style={{ cursor: "pointer" }} onClick={decreaseQuantity} />
      <Typography variant="body1" sx={{ fontSize: "16px" }}>
        {quantity}
      </Typography>
      <PlusIcon size={20} style={{ cursor: "pointer" }} onClick={increaseQuantity} />
    </Box>
  );
};

export default OrderQuantity;
