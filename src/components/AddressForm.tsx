"use Client";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { shippingFormSchema, ShippingFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormDataType {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
// }


const AddressForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {


  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3", { scroll: false })

  }

  // const[formData, setFormData] = useState<FormDataType>({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   city: '',
  // })

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const{ name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }))

  // }
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  // }
  return (
    <Box component="div">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "16px", fontWeight: 600 }}
          gutterBottom
        >
          Shipping Address
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit(handleShippingForm)}
        >
          <Stack spacing={1}>
            <InputLabel>Name</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.name.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <InputLabel required>Email</InputLabel>
            <TextField
              type="email"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.email.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <InputLabel required>Phone</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="phone"
              {...register("phone")}
            />
            {errors.phone && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.phone.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <InputLabel required>Address</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="address"
              {...register("address")}
            />
            {errors.address && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.address.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <InputLabel required>City</InputLabel>
            <TextField
              type="text"
              fullWidth
              size="small"
              sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }}
              id="state"
              {...register("city")}
            />
            {errors.city && (
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {errors.city.message}
              </Typography>
            )}
          </Stack>

          {/* BUTTON */}
          <Button
            type="submit"
            endIcon={<ArrowRight size={15} />}
            sx={{
              backgroundColor: "#051F20",
              color: "white",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressForm;
