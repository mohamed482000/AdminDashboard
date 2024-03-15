import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Geo from "../GeographyPage/Geo";

const FourthSection = () => {
  const MUITheme = useTheme();
  return (
    <Paper
      sx={{
        height: "360px",
      }}
    >
      <Box sx={{ height: "360px" }}>
        <Geo isDashBoard={true} />
      </Box>
    </Paper>
  );
};

export default FourthSection;

{
  /*
   */
}
