"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";


interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [formData, setformData] = useState<LoginFormData>({
    email: "",
    password: ""
  });

  const handlePasswordVisibility = (): void => {
    setIsPassword((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    const {name, value} = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const isFormValid: boolean = formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
        py: 4,
      }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit}
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h4" component="h1">
            Log in
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Enter your email address and password
          </Typography>
        </Stack>

        <TextField
          type="email"
          variant="outlined"
          id="email"
          label="Email"
          placeholder="Enter your email address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          type={isPassword ? "password" : "text"}
          variant="outlined"
          id="password"
          label="Password"
          placeholder="Enter your valid password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {isPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Link
          href="/forgot-password"
          sx={{
            textDecoration: "none",
            alignSelf: "flex-start",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot password?
        </Link>

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={!isFormValid}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            py: 1.5,
            bgcolor: "#163832",
            "&:hover": {
              bgcolor: "#0f2621",
            },
          }}
        >
          Log in
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" component="span" sx={{ mr: 0.5 }}>
            New to Vestir?
          </Typography>
          <Link
            href="/register"
            sx={{
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Join now
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
