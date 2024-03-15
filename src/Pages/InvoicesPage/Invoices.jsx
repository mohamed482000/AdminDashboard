import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../component/Header";

const Invoices = () => {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: 650, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Invoices;
