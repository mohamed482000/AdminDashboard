import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";

const NotFound = () => {
  const MUITheme = useTheme();
  return (
    <Stack
      sx={{
        height: "80vh",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">There is no design yet</Typography>
      <Typography variant="h5">Please try again later..</Typography>
    </Stack>
  );
};

export default NotFound;
