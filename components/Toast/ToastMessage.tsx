"use client";
import { Snackbar, Alert, type AlertColor } from "@mui/material";

interface ToastProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity?: AlertColor;
  duration?: number;
}

export default function ToastMessage({
  open,
  handleClose,
  message,
  severity = "success",
  duration = 3000,
}: ToastProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
