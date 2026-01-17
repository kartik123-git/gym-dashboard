"use client";
import { useState } from "react";
import { Button, Drawer, Box, Badge } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterPanel from "./FilterPanel";

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  return (
    <>
      <Badge badgeContent={filterCount} color="primary">
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={() => setOpen(true)}
        >
          Filters
        </Button>
      </Badge>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 380 }}>
          <FilterPanel
            onClose={() => setOpen(false)}
            setFilterCount={setFilterCount}
          />
        </Box>
      </Drawer>
    </>
  );
}
