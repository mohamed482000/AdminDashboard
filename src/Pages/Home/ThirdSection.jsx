import React from "react";
import Stack from "@mui/system/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Pie from "../PieChartPage/Pie";
import Bar from "../BarChartPage/Bar";

const ThirdSection = () => {
  const MUITheme = useTheme();
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      <Paper
        sx={{
          padding: "16px 32px",
          [MUITheme.breakpoints.down("md")]: {
            padding: "16px 15px",
          },
          height: "360px",
          flexGrow: "1",
          maxWidth: "570px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingTop: "10px",
            textTransform: "capitalize",
            fontSize: "1.25rem",
            fontWeight: "700",
            lletterSpacing: "0.0075em",
            color: MUITheme.palette.secondary.main,
          }}
        >
          Campaign
        </Typography>
        <Box sx={{ height: "200px" }}>
          <Pie isDashBoard={true} />
        </Box>
        <Typography variant="h6" sx={{ mt: "15px", textAlign: "center" }}>
          $48,352 revenue generated
        </Typography>
        <Typography
          variant="body2"
          px={0.7}
          sx={{ paddingBottom: "5px", textAlign: "center" }}
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          padding: "16px 32px",
          [MUITheme.breakpoints.down("md")]: {
            padding: "16px 15px",
          },
          height: "360px",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingTop: "10px",
            textTransform: "capitalize",
            fontSize: "1.25rem",
            fontWeight: "700",
            lletterSpacing: "0.0075em",
            color: MUITheme.palette.secondary.main,
          }}
        >
          Sales Quantity
        </Typography>
        <Box sx={{ height: "250px" }}>
          <Bar isDashBoard={true} />
        </Box>
      </Paper>
    </Stack>
  );
};

export default ThirdSection;
