"use client"
import CommonTable from '@/components/CommonTable';
import { Box, Button, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommonModal from '@/components/CommonModal';
import { useState } from 'react';

const GymMembers = () => {
  const [open , setOPen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null);

   const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "status",
      headerName: "Status",
      render: (row) => (
        <Chip
          label={row.status}
          color={row.status === "Active" ? "success" : "error"}
        />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      render: (row) => (
        <Box onClick={()=>{
          setSelectedRow(row);
          setOPen(true )}}>
       <VisibilityIcon  className='cursor-pointer'/>

        </Box>
      ),
    },
  ];
   const rows = [
    { id: 1, name: "Karthik", email: "k@gmail.com", status: "Active" },
    { id: 2, name: "Rahul", email: "r@gmail.com", status: "Inactive" },
  ];
  return (
    <div>
      <CommonTable columns={columns} rows={rows}/>
    <CommonModal
  open={open}
  onClose={() => setOPen(false)}
  title="Member Details"
>
  {selectedRow && (
    <Box className="flex flex-col gap-3">
      <Box><strong>Name:</strong> {selectedRow.name}</Box>
      <Box><strong>Email:</strong> {selectedRow.email}</Box>
      <Box>
        <strong>Status:</strong>{" "}
        <Chip
          label={selectedRow.status}
          color={selectedRow.status === "Active" ? "success" : "error"}
        />
      </Box>
    </Box>
  )}
</CommonModal>
      
    </div>
  )
}

export default GymMembers
