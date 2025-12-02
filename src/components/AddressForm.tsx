"use Client"

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import InputLabel from '@mui/material/InputLabel'
import Stack from '@mui/material/Stack'
import React, { useState } from 'react'

interface FormDataType{
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const AddressForm: React.FC = () => {
    const router = useRouter() 

    const[formData, setFormData] = useState<FormDataType>({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const{ name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))

    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    }
  return (
    <Box component="div">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h5" sx={{ fontSize: "16px", fontWeight: 600 }} gutterBottom>
                Shipping Address
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Stack spacing={1}>
                <InputLabel required>Name</InputLabel>
                <TextField type='text' fullWidth size="small" sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }} value={formData.name} onChange={handleChange}   />
              </Stack>
              <Stack spacing={1}>
                <InputLabel required>Email</InputLabel>
                <TextField type='email' fullWidth size="small" sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }} value={formData.email} onChange={handleChange}   />
              </Stack>
              <Stack spacing={1}>
                <InputLabel required>Phone</InputLabel>
                <TextField type='text' fullWidth size="small" sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }} value={formData.phone} onChange={handleChange}   />
              </Stack>
              <Stack spacing={1}>
                <InputLabel required>Address</InputLabel>
                <TextField type='text' fullWidth size="small" sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff" }} value={formData.address} onChange={handleChange}   />
              </Stack>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <InputLabel required>City</InputLabel>
                <TextField type='text' fullWidth size="small" sx={{ fontSize: "1.5rem", bgcolor: "#f4eeeeff", }} value={formData.city} onChange={handleChange}   />
              </Stack>
              

            {/* BUTTON */}
             <Button
                type='submit'
                onClick={() => router.push("/cart?step=3", { scroll: true })}
                endIcon={<ArrowRight size={15} />}
                sx={{ backgroundColor: "#051F20", color: "white", textTransform: "none", fontSize: "1.2rem" }}
              >
                Continue
              </Button>
            </Box>

        </Box>
    </Box>
  )
}

export default AddressForm