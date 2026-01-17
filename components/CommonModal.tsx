"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";

/* ---------- PROPS INTERFACE ---------- */

export interface CommonModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  actions?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

/* ---------- COMPONENT ---------- */

export default function CommonModal({
  open,
  title,
  onClose,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
}: CommonModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      {title && (
        <DialogTitle>
          {title}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}

      <DialogContent dividers>{children}</DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}
