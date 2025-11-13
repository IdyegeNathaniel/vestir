"use client";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handlePasswordVisibility = () => {
    setIsPassword( prev => !prev ) 
  }
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "500px",
          padding: "12px 24px",
          border: "2px solid black",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Stack direction="column" spacing={3}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">Log in</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              Enter your email address and password
            </Typography>
          </Stack>
          <FormControl sx={{ gap: 2 }} required>
            <TextField
              type="email"
              sx={{ minWidth: "500px" }}
              variant="outlined"
              label="Email address"
              placeholder="Enter your email address"
              name="email"
              size="medium"
              fullWidth
            />
            <TextField
              type={isPassword ? "password" : "text"}
              sx={{ minWidth: "500px" }}
              variant="outlined"
              label="Email address"
              placeholder="Enter your email address"
              name="email"
              size="medium"
              fullWidth
               slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handlePasswordVisibility}>
                                            {isPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
            />
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
}
