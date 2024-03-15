import React from "react";
import Geo from "./Geo";
import { useTheme } from "@mui/material";
import Header from "../../component/Header";
import Box from "@mui/material/Box";

const Geography = () => {
  const MUITheme = useTheme();
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <Box
        style={{
          height: "75vh",
          border: `1px solid ${MUITheme.palette.text.primary}`,
          borderRadius: "8px",
        }}
      >
        <Geo />
      </Box>
    </Box>
  );
};

export default Geography;
