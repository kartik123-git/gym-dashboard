"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const RAM_OPTIONS = ["64 GB", "32 GB", "16 GB", "8 GB"];
const STORAGE_OPTIONS = ["2 TB or more", "1 TB"];

export default function FilterPanel({ onClose, setFilterCount }) {
  const [ram, setRam] = useState([]);
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    setFilterCount(ram.length + storage.length);
  }, [ram, storage, setFilterCount]);

  const toggleValue = (state, setState, value) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  const clearAll = () => {
    setRam([]);
        ([]);
  };

  return (
    <Box p={2}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between">
        <Button
          startIcon={<ArrowBackIosIcon />}
          size="small"
          onClick={onClose}
        >
          Back
        </Button>

     
      </Box>

      {/* <Typography variant="body2" mt={2}>
        Selected Filters ({ram.length + storage.length})
      </Typography> */}

      {/* <Box display="flex" gap={1} flexWrap="wrap" my={2}>
        {[...ram, ...storage].map((item) => (
          <Chip
            key={item}
            label={item}
            onDelete={() =>
              ram.includes(item)
                ? toggleValue(ram, setRam, item)
                : toggleValue(storage, setStorage, item)
            }
          />
        ))}
      </Box> */}

      <Divider />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Memory (RAM)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {RAM_OPTIONS.map((opt) => (
            <FormControlLabel
              key={opt}
              control={
                <Checkbox
                  checked={ram.includes(opt)}
                  onChange={() => toggleValue(ram, setRam, opt)}
                />
              }
              label={opt}
            />
          ))}
             <Box>
          <Button size="small" onClick={clearAll}>
            Clear All
          </Button>
          
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {STORAGE_OPTIONS.map((opt) => (
            <FormControlLabel
              key={opt}
              control={
                <Checkbox
                  checked={storage.includes(opt)}
                  onChange={() =>
                    toggleValue(storage, setStorage, opt)
                  }
                />
              }
              label={opt}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
