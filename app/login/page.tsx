"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AlertColor } from "@mui/material";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";

import ToastMessage from "@/components/Toast/ToastMessage";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleLogin = () => {
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);

      if (email === "kartikbhardwaj255@gmail.com" && password === "Admin@123") {
        setToast({
          open: true,
          message: "Login Successful ",
          severity: "success",
        });

        // redirect after showing toast
        setTimeout(() => {
          router.push("/admin");
        }, 800);
      } else {
        setToast({
          open: true,
          message: "Invalid Email or Password ",
          severity: "error",
        });
      }
    }, 1200);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      {/* LEFT LOGIN FORM */}
      <Box
        sx={{
          width: "40%",
          p: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          DashManagement
        </Typography>

        <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
          Hello, Welcome back
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link href="#" underline="hover">
            Forgot password?
          </Link>
        </Box>

        {/* LOGIN BUTTON WITH LOADER */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.2, position: "relative" }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Login"}
        </Button>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          width: "60%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/loginpage.jpg"
          alt="login"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* TOAST */}
      <ToastMessage
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        handleClose={() => setToast({ ...toast, open: false })}
      />
    </Box>
  );
}
