import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle, isDashboard = false }) => {
  const MUITheme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{
          color: MUITheme.palette.info.light,

          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

export default Header;
