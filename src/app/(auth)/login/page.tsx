"use client";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";

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
          maxWidth: "500px",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Stack component="form" direction="column" spacing={3}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">Log in</Typography>
            <Typography variant="h6" sx={{ color: "#3b3939ff" }}>
              Enter your email address and password
            </Typography>
            
          </Stack>

            <TextField
              type="email"
              variant="outlined"
              id="email"
              label="Email"
              sx={{ minWidth: "500px", borderRadius: "" }}
              placeholder="Enter your email address"
              name="email"
              size="medium"
              fullWidth
            />

            <TextField
              type={isPassword ? "password" : "text"}
              variant="outlined"
              id="password"
              label="Password"
              sx={{ minWidth: "500px" }}
              placeholder="Enter your valid password"
              name="passwordz"
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
            <Link component="text" sx={{ textDecoration: "none", mb: 5 }}>Forgot password?</Link>
            <Button variant="contained" sx={{ textTransform: "none", fontSize: {md: "1rem"}, padding: "8px 3px", mb: 2, bgcolor: "#163832" }} size="medium" disabled>Log in</Button>
            <Button variant="text" sx={{ textTransform: "none", fontWeight: 500, fontSize: "16px" }} href="/register">New to Vestir? Join</Button>
          
  
        </Stack>
      </Box>
    </Box>
  );
}
