"use Client";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingBagIcon } from "lucide-react";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { paymentFormSchema, PaymentFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

const PaymentMethod = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handleShippingForm: SubmitHandler<PaymentFormInputs> = (data) => console.log(data)

  return (
    <Box component="div">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "16px", fontWeight: 600 }}
          gutterBottom
        >
          Payment Method
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit(handleShippingForm)}
        >
          <Stack spacing={1}>
            <InputLabel>Holder Name</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="name"
              {...register("holdername")}
            />
            {errors.holdername && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.holdername.message}
              </Typography>
            )}
          </Stack>

          <Stack spacing={1}>
            <InputLabel required>Cardnumber</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="email"
              {...register("cardnumber")}
            />
            {errors.cardnumber && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.cardnumber.message}
              </Typography>
            )}
          </Stack>

          <Stack spacing={1}>
            <InputLabel required>Expiry Date</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="expiry date"
              {...register("expirationdate")}
            />
            {errors.expirationdate && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.expirationdate.message}
              </Typography>
            )}
          </Stack>
        
          <Stack spacing={1}>
            <InputLabel required>cvv</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="cvv"
              {...register("cvv")}
            />
            {errors.cvv && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.cvv.message}
              </Typography>
            )}
          </Stack>

          {/* BUTTON */}
          <Button
            type="submit"
            endIcon={<ShoppingBagIcon size={15} />}
            sx={{
              backgroundColor: "#051F20",
              color: "white",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentMethod